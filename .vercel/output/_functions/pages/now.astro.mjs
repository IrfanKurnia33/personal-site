import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DlXVp__-.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_ClkBu9jG.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_DV5Nimf_.mjs';
import { $ as $$Prose } from '../chunks/Prose_ubZywdRE.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$Now = createComponent(($$result, $$props, $$slots) => {
  const updated = (/* @__PURE__ */ new Date("2026-08-02")).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Now", "description": "What I'm up to these days", "data-astro-cid-lfnvi74r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="prose-container" data-astro-cid-lfnvi74r> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "eyebrow": "Now", "title": "What I'm up to these days", "lead": "A list of things that keeps me busy at the moment.", "data-astro-cid-lfnvi74r": true })} <p class="now-updated mono" data-astro-cid-lfnvi74r>Last updated ${updated} — from Jakarta, Indonesia</p> ${renderComponent($$result2, "Prose", $$Prose, { "data-astro-cid-lfnvi74r": true }, { "default": ($$result3) => renderTemplate` <h2 data-astro-cid-lfnvi74r>🧑‍💻 Career Transition</h2> <p data-astro-cid-lfnvi74r>
Professionally, I'm a design generalist, designing print and digital materials for various business use in multiple industries. Currently working at a Madrid-based company Dicoded (not a typo).
</p> <p data-astro-cid-lfnvi74r>
I'm currently teaming up with my friend Fiqi to take an AI Engineering bootcamp on Udemy. We hope to break into the AI field as a junior-level engineer to help companies implement AI effectively. It's a slow process as I still prioritize my design work on a daily basis.
</p> <p data-astro-cid-lfnvi74r>
Soon enough the <a href="/projects/" data-astro-cid-lfnvi74r>projects</a> page will consist of AI-related projects.
</p> <h2 data-astro-cid-lfnvi74r>👩‍❤️‍👨 Life</h2> <img src="/blog-images/with-wifey.jpg" alt="Me and my wife wearing our England shirts" data-astro-cid-lfnvi74r> <p data-astro-cid-lfnvi74r>
Currently living a quite slow-paced life with my lovely wife and Batman (my latest stray cat coming into our home). We're both working from Monday to Friday, then spend weekends at padel courts, parents' homes, and probably weddings of our friends.
</p> <h2 data-astro-cid-lfnvi74r>🧘🏼‍♂️ Website</h2> <p data-astro-cid-lfnvi74r>
The "🧘🏼‍♂️" emoji represents my newly-discovered commitment to rebuild and maintain a website that is truly my "corner of the internet".
</p> <p data-astro-cid-lfnvi74r>
For years, my website purely serves as a design portfolio to attract recruiters and design managers. But lately, after meeting <a href="https://sive.rs" target="_blank" data-astro-cid-lfnvi74r>Derek</a> (the guy behind <a href="https://nownownow.com/" target="_blank" data-astro-cid-lfnvi74r>NowNowNow</a>), I felt like it's time to turn my website back to something that truly reflects who I am. And it's been rewarding so far.
</p> <h2 data-astro-cid-lfnvi74r>🎼 Music</h2> <p data-astro-cid-lfnvi74r>
I'm writing songs again! Ever since I got laid-off from my day job, I can have slow mornings with my favorite breakfast of chicken porridge, coffee, and my notepad. Hopefully I can come up with something soon enough.
</p> <h2 data-astro-cid-lfnvi74r>🔫 Delta Force</h2> <p data-astro-cid-lfnvi74r>
Currently hooked on playing Delta Force on my PC with some of my friends.
</p> ` })} </div> ` })} `;
}, "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/pages/now.astro", void 0);

const $$file = "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/pages/now.astro";
const $$url = "/now";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Now,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
