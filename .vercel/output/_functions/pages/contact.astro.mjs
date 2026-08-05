import { c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DlXVp__-.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_ClkBu9jG.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_DV5Nimf_.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `  <script>
  (function () {
    var form = document.getElementById("contact-form");
    var status = document.getElementById("form-status");
    var tsField = document.getElementById("ts");
    if (tsField) tsField.value = String(Date.now());

    function showStatus(kind, msg) {
      if (!status) return;
      status.hidden = false;
      status.className = "form-status form-status--" + kind;
      status.textContent = msg;
      status.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    // No-JS redirect success state: /contact/?sent=1
    var params = new URLSearchParams(window.location.search);
    if (params.get("sent") === "1") {
      showStatus("ok", "Thanks! Your message has been sent \u2014 I'll get back to you soon.");
      history.replaceState(null, "", window.location.pathname);
    }

    if (!form) return;
    form.addEventListener("submit", async function (e) {
      // Progressive enhancement: submit via fetch, fall back to normal POST.
      if (!window.fetch) return;
      e.preventDefault();
      var btn = document.getElementById("submit-btn");
      var original = btn ? btn.textContent : "";
      if (btn) {
        btn.disabled = true;
        btn.textContent = "Sending\u2026";
      }
      try {
        var res = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });
        var data = await res.json().catch(function () {
          return {};
        });
        if (res.ok && data.ok) {
          form.reset();
          if (tsField) tsField.value = String(Date.now());
          showStatus("ok", "Thanks! Your message has been sent \u2014 I'll get back to you soon.");
        } else {
          showStatus("error", (data && data.error) || "Something went wrong. Please try again, or email me directly.");
        }
      } catch (err) {
        showStatus("error", "Network error. Please try again, or email me directly.");
      } finally {
        if (btn) {
          btn.disabled = false;
          btn.textContent = original;
        }
      }
    });
  })();
<\/script>`])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact", "description": "Send me a message \u2014 it lands straight in my inbox.", "data-astro-cid-uw5kdbxl": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="prose-container" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "eyebrow": "Contact", "title": "Say hello", "lead": "Have a question, an idea, or just want to reach out? Send a message and it lands straight in my inbox.", "data-astro-cid-uw5kdbxl": true })} <div id="form-status" class="form-status" role="status" aria-live="polite" hidden data-astro-cid-uw5kdbxl></div> <form id="contact-form" class="contact-form" method="POST" action="/api/contact" novalidate data-astro-cid-uw5kdbxl> <!-- Honeypot: real users never see or fill this. Bots often do. --> <div class="hp" aria-hidden="true" data-astro-cid-uw5kdbxl> <label for="company" data-astro-cid-uw5kdbxl>Company</label> <input type="text" id="company" name="company" tabindex="-1" autocomplete="off" data-astro-cid-uw5kdbxl> </div> <!-- Timestamp: the API route rejects submissions completed too fast. --> <input type="hidden" name="ts" id="ts" value="" data-astro-cid-uw5kdbxl> <div class="field" data-astro-cid-uw5kdbxl> <label for="name" data-astro-cid-uw5kdbxl>Name</label> <input type="text" id="name" name="name" required autocomplete="name" maxlength="120" data-astro-cid-uw5kdbxl> </div> <div class="field" data-astro-cid-uw5kdbxl> <label for="email" data-astro-cid-uw5kdbxl>Email</label> <input type="email" id="email" name="email" required autocomplete="email" maxlength="200" data-astro-cid-uw5kdbxl> </div> <div class="field" data-astro-cid-uw5kdbxl> <label for="message" data-astro-cid-uw5kdbxl>Message</label> <textarea id="message" name="message" required rows="6" maxlength="5000" data-astro-cid-uw5kdbxl></textarea> </div> <button type="submit" class="button button--primary" id="submit-btn" data-astro-cid-uw5kdbxl>
Send message
</button> </form> </div> ` }));
}, "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/pages/contact.astro", void 0);

const $$file = "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
