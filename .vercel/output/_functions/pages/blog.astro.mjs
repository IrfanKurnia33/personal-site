import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DlXVp__-.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_B3xHMkw1.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_ClkBu9jG.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_DV5Nimf_.mjs';
import { $ as $$PostCard } from '../chunks/PostCard_DigbEZ0W.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).filter((p) => !p.data.draft).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const PER_PAGE = 5;
  const pageCount = Math.ceil(posts.length / PER_PAGE);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog", "description": "Jotting down my screams, one sentence at a time.", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-5tznm7mj> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "eyebrow": "Blog", "title": "Erratic Thoughts and More", "lead": "Jotting down my screams, one sentence at a time.", "data-astro-cid-5tznm7mj": true })} ${posts.length === 0 ? renderTemplate`<p data-astro-cid-5tznm7mj>No posts yet — check back soon.</p>` : renderTemplate`<div class="post-grid"${addAttribute(PER_PAGE, "data-per-page")} data-astro-cid-5tznm7mj> ${posts.map((post, i) => renderTemplate`<div class="post-item"${addAttribute(i, "data-index")}${addAttribute(i >= PER_PAGE, "hidden")} data-astro-cid-5tznm7mj> ${renderComponent($$result2, "PostCard", $$PostCard, { "post": post, "data-astro-cid-5tznm7mj": true })} </div>`)} </div>`} ${pageCount > 1 && renderTemplate`<nav class="pagination" aria-label="Blog pagination" data-astro-cid-5tznm7mj> <button class="pagination__btn" data-page-prev disabled data-astro-cid-5tznm7mj>
← Prev
</button> <div class="pagination__pages" data-astro-cid-5tznm7mj> ${Array.from({ length: pageCount }, (_, i) => renderTemplate`<button class="pagination__num"${addAttribute(i + 1, "data-page-num")}${addAttribute(i === 0 ? "page" : void 0, "aria-current")} data-astro-cid-5tznm7mj> ${i + 1} </button>`)} </div> <button class="pagination__btn" data-page-next data-astro-cid-5tznm7mj>
Next →
</button> </nav>`} </div> ` })} ${renderScript($$result, "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/pages/blog/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/pages/blog/index.astro", void 0);
const $$file = "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
