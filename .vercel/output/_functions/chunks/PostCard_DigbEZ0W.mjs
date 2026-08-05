import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_DlXVp__-.mjs';
import 'piccolore';
import { $ as $$Image } from './_astro_assets_9Hc5rF1i.mjs';
import { $ as $$FormattedDate } from './FormattedDate_DaTyBwFW.mjs';
/* empty css                         */

const $$Astro = createAstro("https://irfankurnia.com");
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { post } = Astro2.props;
  const { title, description, pubDate, heroImage, heroAlt, tags } = post.data;
  const href = `/blog/${post.id}/`;
  return renderTemplate`${maybeRenderHead()}<article class="post-card" data-astro-cid-iyiqi2so> ${heroImage && renderTemplate`<a${addAttribute(href, "href")} class="post-card__media" tabindex="-1" aria-hidden="true" data-astro-cid-iyiqi2so> ${renderComponent($$result, "Image", $$Image, { "src": heroImage, "alt": heroAlt ?? "", "width": 800, "height": 450, "data-astro-cid-iyiqi2so": true })} </a>`} <div class="post-card__body" data-astro-cid-iyiqi2so> <h3 class="post-card__title" data-astro-cid-iyiqi2so> <a${addAttribute(href, "href")} data-astro-cid-iyiqi2so>${title}</a> </h3> <!-- <p class="post-card__desc">{description}</p> --> <div class="post-card__meta" data-astro-cid-iyiqi2so> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-iyiqi2so": true })} ${tags?.[0] && renderTemplate`<span class="tag" data-astro-cid-iyiqi2so>${tags[0]}</span>`} </div> </div> </article> `;
}, "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/components/PostCard.astro", void 0);

export { $$PostCard as $ };
