import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DlXVp__-.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$SocialLinks } from '../chunks/BaseLayout_ClkBu9jG.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_DV5Nimf_.mjs';
export { renderers } from '../renderers.mjs';

const $$Socials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Socials", "description": "Where I am outside of this website" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="prose-container"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "eyebrow": "Socials", "title": "Where I am outside of this website", "lead": "All my profiles in one place." })} ${renderComponent($$result2, "SocialLinks", $$SocialLinks, { "variant": "list" })} </div> ` })}`;
}, "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/pages/socials.astro", void 0);

const $$file = "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/pages/socials.astro";
const $$url = "/socials";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Socials,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
