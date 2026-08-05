import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_DlXVp__-.mjs';
import 'piccolore';
import { $ as $$Image } from './_astro_assets_9Hc5rF1i.mjs';
/* empty css                         */

const $$Astro = createAstro("https://irfankurnia.com");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { project } = Astro2.props;
  const { title, description, year, tech, cover, coverAlt } = project.data;
  const href = `/projects/${project.id}/`;
  return renderTemplate`${maybeRenderHead()}<article class="project-card" data-astro-cid-mspuyifq> <a${addAttribute(href, "href")} class="project-card__link" data-astro-cid-mspuyifq> ${cover && renderTemplate`<div class="project-card__media" data-astro-cid-mspuyifq> ${renderComponent($$result, "Image", $$Image, { "src": cover, "alt": coverAlt ?? "", "width": 800, "height": 500, "data-astro-cid-mspuyifq": true })} </div>`} <div class="project-card__body" data-astro-cid-mspuyifq> <div class="project-card__meta" data-astro-cid-mspuyifq> ${year && renderTemplate`<span class="mono" data-astro-cid-mspuyifq>${year}</span>`} </div> <h3 class="project-card__title" data-astro-cid-mspuyifq>${title}</h3> <p class="project-card__desc" data-astro-cid-mspuyifq>${description}</p> ${tech?.length > 0 && renderTemplate`<ul class="project-card__tech" role="list" data-astro-cid-mspuyifq> ${tech.map((t) => renderTemplate`<li class="tag" data-astro-cid-mspuyifq>${t}</li>`)} </ul>`} </div> </a> </article> `;
}, "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/components/ProjectCard.astro", void 0);

export { $$ProjectCard as $ };
