import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DlXVp__-.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_B3xHMkw1.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_ClkBu9jG.mjs';
import { $ as $$PostCard } from '../chunks/PostCard_DigbEZ0W.mjs';
import { $ as $$ProjectCard } from '../chunks/ProjectCard_x62TNUqH.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const visible = (items) => items.filter((i) => !i.data.draft) ;
  const recentPosts = visible(await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()).slice(0, 3);
  const featuredProjects = visible(await getCollection("projects")).sort((a, b) => a.data.order - b.data.order).slice(0, 2);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="container hero" data-astro-cid-j7pv25f6> <!-- <p class="eyebrow">Welcome to my corner of the internet 👋</p> --> <img class="hero__avatar" src="/irfan-head-shot.jpg" alt="Irfan Kurnia" width="240" height="240" data-astro-cid-j7pv25f6> <h1 class="hero__title" data-astro-cid-j7pv25f6>
Hi, I'm <span class="hero__accent" data-astro-cid-j7pv25f6>Irfan</span>!
</h1> <!-- <p class="hero__lead">{SITE.description}</p> --> <ul data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6>I design <a href="/projects/" class="link" data-astro-cid-j7pv25f6>digital experiences</a> for a living.</li> <li data-astro-cid-j7pv25f6>I write stuff about <a href="https://irfankurnia33.medium.com" target="_blank" class="link" data-astro-cid-j7pv25f6>working in design</a> and some <a href="/blog/" class="link" data-astro-cid-j7pv25f6>personal thoughts.</a></li> <li data-astro-cid-j7pv25f6>Sometimes I write and perform my own <a href="/music/" class="link" data-astro-cid-j7pv25f6>music.</a></li> <!-- <li>I'm <a href="/contact/" class="link">open for full-time</a> remote positions in design.</li>
      <li>I'm currently learning to become an <a href="https://www.udemy.com/user/mochammadkurnia/" target="_blank" class="link">AI engineer.</a></li> --> </ul> <!-- <div class="hero__actions">
      <a href="/blog/" class="button button--primary">Read the blog</a>
      <a href="/about/" class="button button--ghost">About me</a>
    </div>
    <div class="hero__socials">
      <SocialLinks variant="row" />
    </div> --> </section>  <section class="container section" data-astro-cid-j7pv25f6> <div class="section__head" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Recent writing</h2> <a href="/blog/" class="section__more" data-astro-cid-j7pv25f6>All posts →</a> </div> <div class="grid grid--2" data-astro-cid-j7pv25f6> ${recentPosts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post, "data-astro-cid-j7pv25f6": true })}`)} </div> </section>  <section class="container section" data-astro-cid-j7pv25f6> <div class="section__head" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Selected projects</h2> <a href="/projects/" class="section__more" data-astro-cid-j7pv25f6>All projects →</a> </div> <div class="grid grid--2" data-astro-cid-j7pv25f6> ${featuredProjects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "project": project, "data-astro-cid-j7pv25f6": true })}`)} </div> </section> ` })} `;
}, "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/pages/index.astro", void 0);
const $$file = "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
