import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DlXVp__-.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_ClkBu9jG.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Page not found", "description": "That page doesn't exist.", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="prose-container notfound" data-astro-cid-zetdm5md> <p class="eyebrow mono" data-astro-cid-zetdm5md>404</p> <h1 data-astro-cid-zetdm5md>This page wandered off.</h1> <p class="notfound__lead" data-astro-cid-zetdm5md>
The page you're looking for doesn't exist or has moved.
</p> <div class="notfound__actions" data-astro-cid-zetdm5md> <a href="/" class="button button--primary" data-astro-cid-zetdm5md>Back home</a> <a href="/blog/" class="button button--ghost" data-astro-cid-zetdm5md>Read the blog</a> </div> </div> ` })} `;
}, "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/pages/404.astro", void 0);

const $$file = "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
