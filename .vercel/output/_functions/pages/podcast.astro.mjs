import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DlXVp__-.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_ClkBu9jG.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_DV5Nimf_.mjs';
import { $ as $$EmbedCard } from '../chunks/EmbedCard_Co3PqOXs.mjs';
import { $ as $$Prose } from '../chunks/Prose_ubZywdRE.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const PODCASTS = [
  {
    title: "Berawal dari Kegalauan Saat Kuliah, Orang Ini Putar Haluan Jadi UI/UX Designer",
    show: "Nodis Media",
    date: "2023-10-09",
    note: "A talk with a good friend of mine Ian about my journey into the world of UX design.",
    href: "https://www.youtube.com/watch?v=edFGT4gGVZE"
  },
  {
    title: "Wandering around: thoughts on being a generalist",
    show: "Erratic Thoughts and More",
    date: "2021-01-08",
    note: "As Kahlil Gibran said: 'We live only to discover beauty. All else is a form of waiting.'",
    href: "https://open.spotify.com/episode/07FeroqjGkhKwjmixUWdUv"
  }
];

const $$Podcast = createComponent(($$result, $$props, $$slots) => {
  const fmt = (iso) => iso ? new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }) : void 0;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Podcast", "description": "Where I yap sometimes.", "data-astro-cid-2sf3frmg": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-2sf3frmg> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "eyebrow": "Podcast", "title": "I talk about stuff sometimes", "lead": "Where I yap sometimes.", "data-astro-cid-2sf3frmg": true })} ${renderComponent($$result2, "Prose", $$Prose, { "data-astro-cid-2sf3frmg": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-2sf3frmg>
Sometimes I appear on other people's podcasts, and sometimes I host my own. Here's some of my yapping (so far).
</p> ` })} <div class="media-grid" data-astro-cid-2sf3frmg> ${PODCASTS.map((item) => renderTemplate`${renderComponent($$result2, "EmbedCard", $$EmbedCard, { "title": item.title, "subtitle": [item.show, fmt(item.date)].filter(Boolean).join(" \xB7 "), "kind": "Episode", "note": item.note, "embed": item.embed, "href": item.href, "data-astro-cid-2sf3frmg": true })}`)} </div> </div> ` })} `;
}, "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/pages/podcast.astro", void 0);

const $$file = "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/pages/podcast.astro";
const $$url = "/podcast";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Podcast,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
