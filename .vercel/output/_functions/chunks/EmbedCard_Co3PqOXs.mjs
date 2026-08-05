import { b as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate, d as addAttribute } from './astro/server_DlXVp__-.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const SC_TRACK_PARAMS = "&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false";
const scSetCache = /* @__PURE__ */ new Map();
async function resolveSoundCloudSet(pageUrl) {
  const cached = scSetCache.get(pageUrl);
  if (cached) return cached;
  let resolved = {
    src: `https://w.soundcloud.com/player/?url=${encodeURIComponent(pageUrl)}${SC_TRACK_PARAMS}&visual=true`,
    height: 450
  };
  try {
    const res = await fetch(
      `https://soundcloud.com/oembed?format=json&url=${encodeURIComponent(pageUrl)}`
    );
    if (res.ok) {
      const data = await res.json();
      const apiUrl = data.html?.match(/[?&]url=([^&"]+)/)?.[1];
      if (apiUrl) {
        resolved = {
          src: `https://w.soundcloud.com/player/?url=${apiUrl}${SC_TRACK_PARAMS}&visual=true&show_artwork=true`,
          height: 450
        };
      }
    }
  } catch {
  }
  scSetCache.set(pageUrl, resolved);
  return resolved;
}
function toEmbed(raw) {
  let url;
  try {
    url = new URL(raw);
  } catch {
    return { src: raw, height: 0 };
  }
  const host = url.hostname.replace(/^www\./, "");
  if (host === "soundcloud.com" || host === "m.soundcloud.com") {
    const pageUrl = `https://soundcloud.com${url.pathname}`;
    if (url.pathname.includes("/sets/")) return resolveSoundCloudSet(pageUrl);
    return {
      src: `https://w.soundcloud.com/player/?url=${encodeURIComponent(pageUrl)}${SC_TRACK_PARAMS}&visual=false`,
      height: 166
    };
  }
  if (host === "open.spotify.com" && !url.pathname.startsWith("/embed/")) {
    const isTrack = url.pathname.startsWith("/track/");
    return {
      src: `https://open.spotify.com/embed${url.pathname}${url.search}`,
      height: isTrack ? 152 : 352
    };
  }
  if (host === "open.spotify.com") {
    return { src: raw, height: url.pathname.startsWith("/embed/track/") ? 152 : 352 };
  }
  if (host === "youtube.com" && url.pathname === "/watch") {
    const id = url.searchParams.get("v");
    if (id) return { src: `https://www.youtube.com/embed/${id}`, height: 0 };
  }
  if (host === "youtu.be") {
    return { src: `https://www.youtube.com/embed${url.pathname}`, height: 0 };
  }
  return { src: raw, height: 0 };
}
function resolveEmbeds(raws) {
  return Promise.all(raws.filter(Boolean).map((raw) => toEmbed(raw)));
}

const $$Astro = createAstro("https://irfankurnia.com");
const $$EmbedCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EmbedCard;
  const { title, subtitle, kind, note, embed, embeds, href } = Astro2.props;
  const embedList = await resolveEmbeds(
    embeds && embeds.length ? embeds : embed ? [embed] : []
  );
  return renderTemplate`${maybeRenderHead()}<article class="embed-card" data-astro-cid-mpf2f5mp> <div class="embed-card__head" data-astro-cid-mpf2f5mp> <div data-astro-cid-mpf2f5mp> ${kind && renderTemplate`<span class="tag" data-astro-cid-mpf2f5mp>${kind}</span>`} <h3 class="embed-card__title" data-astro-cid-mpf2f5mp>${title}</h3> ${subtitle && renderTemplate`<p class="embed-card__subtitle mono" data-astro-cid-mpf2f5mp>${subtitle}</p>`} </div> </div> ${note && renderTemplate`<p class="embed-card__note" data-astro-cid-mpf2f5mp>${note}</p>`} ${embedList.length ? renderTemplate`<div class="embed-card__frames" data-astro-cid-mpf2f5mp> ${embedList.map((item) => renderTemplate`<div${addAttribute(["embed-card__frame", item.height && "embed-card__frame--audio"], "class:list")}${addAttribute(item.height ? `height:${item.height}px` : void 0, "style")} data-astro-cid-mpf2f5mp> <iframe${addAttribute(item.src, "src")}${addAttribute(title, "title")} loading="lazy" allow="encrypted-media; clipboard-write; picture-in-picture" style="border:0" allowfullscreen data-astro-cid-mpf2f5mp></iframe> </div>`)} </div>` : href && renderTemplate`<a class="button button--ghost"${addAttribute(href, "href")} target="_blank" rel="noopener" data-astro-cid-mpf2f5mp>
Listen
<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-mpf2f5mp> <path d="M7 17L17 7M7 7h10v10" data-astro-cid-mpf2f5mp></path> </svg> </a>`} </article> `;
}, "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/components/EmbedCard.astro", void 0);

export { $$EmbedCard as $ };
