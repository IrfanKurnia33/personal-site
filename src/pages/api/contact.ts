export const prerender = false;

function wantsJson(request: Request): boolean {
  const accept = request.headers.get("accept") ?? "";
  const xrw = request.headers.get("x-requested-with") ?? "";
  return accept.includes("application/json") || xrw !== "";
}

function parseOrigins(value: string | null): string[] {
  if (!value) return [];
  return value
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

function invalidInput(value: string): boolean {
  return /[\r\n]/.test(value);
}

function createJsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

function createRedirectResponse(ok: boolean, message: string) {
  const search = ok
    ? "?sent=1"
    : "?error=" + encodeURIComponent(message);
  return Response.redirect(`/contact/${search}`, ok ? 303 : 302);
}

async function getRequestOrigin(request: Request): Promise<string> {
  const origin = request.headers.get("origin") ?? "";
  if (origin) return origin;
  const referer = request.headers.get("referer") ?? "";
  if (!referer) return "";
  try {
    const url = new URL(referer);
    return `${url.protocol}//${url.hostname}${url.port ? `:${url.port}` : ""}`;
  } catch {
    return "";
  }
}

export async function POST({ request }: { request: Request }) {
  const formData = await request.formData();
  const name = (formData.get("name") ?? "").toString().trim();
  const email = (formData.get("email") ?? "").toString().trim();
  const message = (formData.get("message") ?? "").toString().trim();
  const company = (formData.get("company") ?? "").toString().trim();
  const ts = Number(formData.get("ts") ?? 0);

  const apiKey = (process.env.RESEND_API_KEY ?? "").trim();
  const from = (process.env.CONTACT_FROM ?? "").trim();
  const to = (process.env.CONTACT_TO ?? "").trim();
  const subjectPrefix = process.env.CONTACT_SUBJECT_PREFIX ?? "[Website]";
  const allowedOrigins = parseOrigins(process.env.CONTACT_ALLOWED_ORIGINS ?? "");

  if (!apiKey || !from || !to) {
    const message = "The contact form is not configured yet.";
    return wantsJson(request)
      ? createJsonResponse({ ok: false, error: message }, 500)
      : createRedirectResponse(false, message);
  }

  if (company !== "") {
    return wantsJson(request)
      ? createJsonResponse({ ok: true, error: null })
      : createRedirectResponse(true, "ok");
  }

  if (ts > 0) {
    const elapsedMs = Date.now() - ts;
    if (elapsedMs < 3000 || elapsedMs > 3 * 60 * 60 * 1000) {
      const message = "Submission looked automated. Please try again.";
      return wantsJson(request)
        ? createJsonResponse({ ok: false, error: message }, 422)
        : createRedirectResponse(false, message);
    }
  }

  const errors: string[] = [];
  if (!name || name.length > 120) errors.push("a valid name");
  if (!email || email.length > 200 || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    errors.push("a valid email address");
  }
  if (!message || message.length < 5 || message.length > 5000) errors.push("a message");
  if (invalidInput(name) || invalidInput(email) || invalidInput(message)) {
    errors.push("valid input");
  }

  if (errors.length > 0) {
    const message = `Please provide ${errors.join(", ")}.`;
    return wantsJson(request)
      ? createJsonResponse({ ok: false, error: message }, 422)
      : createRedirectResponse(false, message);
  }

  if (allowedOrigins.length > 0) {
    const requestOrigin = await getRequestOrigin(request);
    if (requestOrigin && !allowedOrigins.includes(requestOrigin)) {
      const message = "Request origin not allowed.";
      return wantsJson(request)
        ? createJsonResponse({ ok: false, error: message }, 403)
        : createRedirectResponse(false, message);
    }
  }

  const safeName = name.replace(/[&"'<>]/g, (char) => ({
    "&": "&amp;",
    '"': "&quot;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
  }[char] ?? char));
  const safeEmail = email.replace(/[&"'<>]/g, (char) => ({
    "&": "&amp;",
    '"': "&quot;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
  }[char] ?? char));
  const safeMessage = message.replace(/[&"'<>]/g, (char) => ({
    "&": "&amp;",
    '"': "&quot;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
  }[char] ?? char)).replace(/\n/g, "<br />");

  const subject = `${subjectPrefix} New message from ${name}`;
  const html = `<div style="font-family:sans-serif;line-height:1.6;color:#1d1d1d">` +
    `<h2 style="margin:0 0 12px">New contact message</h2>` +
    `<p><strong>Name:</strong> ${safeName}</p>` +
    `<p><strong>Email:</strong> ${safeEmail}</p>` +
    `<p><strong>Message:</strong></p>` +
    `<p style="white-space:pre-wrap">${safeMessage}</p>` +
    `</div>`;

  const text = `New contact message\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`;

  const payload = {
    from,
    to: [to],
    reply_to: email,
    subject,
    html,
    text,
  };

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const responseText = await response.text();
  if (!response.ok) {
    console.error("[contact] resend failed", response.status, responseText);
    const message = "Sorry — the message could not be sent. Please email me directly.";
    return wantsJson(request)
      ? createJsonResponse({ ok: false, error: message }, 502)
      : createRedirectResponse(false, message);
  }

  return wantsJson(request)
    ? createJsonResponse({ ok: true, okMessage: "Message sent." })
    : createRedirectResponse(true, "ok");
}
