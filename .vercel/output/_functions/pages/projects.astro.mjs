import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DlXVp__-.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_B3xHMkw1.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_ClkBu9jG.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_DV5Nimf_.mjs';
import { $ as $$ProjectCard } from '../chunks/ProjectCard_x62TNUqH.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const projects = (await getCollection("projects")).filter((p) => !p.data.draft).sort((a, b) => a.data.order - b.data.order);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Projects", "description": "A selection of UX and other projects.", "data-astro-cid-2hwget37": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-2hwget37> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "eyebrow": "Projects", "title": "Things I've built", "lead": "A selection of UX and other projects.", "data-astro-cid-2hwget37": true })} ${projects.length === 0 ? renderTemplate`<p data-astro-cid-2hwget37>Gonna put things here soon. Promise!</p>` : renderTemplate`<div class="project-grid" data-astro-cid-2hwget37> ${projects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "project": project, "data-astro-cid-2hwget37": true })}`)} </div>`} </div> ` })} `;
}, "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/pages/projects/index.astro", void 0);
const $$file = "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
