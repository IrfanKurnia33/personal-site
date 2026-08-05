import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_DlXVp__-.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://irfankurnia.com");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  const iso = date.toISOString();
  const label = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  return renderTemplate`${maybeRenderHead()}<time class="mono"${addAttribute(iso, "datetime")}>${label}</time>`;
}, "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
