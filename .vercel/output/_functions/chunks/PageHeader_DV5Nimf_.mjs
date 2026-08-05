import { b as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate, f as renderSlot } from './astro/server_DlXVp__-.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://irfankurnia.com");
const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { eyebrow, title, lead } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="page-header" data-astro-cid-wu5dj4rx> ${eyebrow && renderTemplate`<p class="eyebrow" data-astro-cid-wu5dj4rx>${eyebrow}</p>`} <h1 data-astro-cid-wu5dj4rx>${title}</h1> ${lead && renderTemplate`<p class="page-header__lead" data-astro-cid-wu5dj4rx>${lead}</p>`} ${renderSlot($$result, $$slots["default"])} </header> `;
}, "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/components/PageHeader.astro", void 0);

export { $$PageHeader as $ };
