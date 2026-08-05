import { b as createAstro, c as createComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead, r as renderComponent, j as renderHead, f as renderSlot } from './astro/server_DlXVp__-.mjs';
import 'piccolore';
import { S as SITE, H as HEADER_NAV_ITEMS, N as NAV_ITEMS } from './consts_DG01PjeS.mjs';
import 'clsx';
/* empty css                         */

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$3 = createAstro("https://irfankurnia.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const {
    title,
    description = SITE.description,
    image = "/og-default.png",
    article = false
  } = Astro2.props;
  const pageTitle = title ? `${title} \u2014 ${SITE.title}` : SITE.title;
  const canonical = new URL(Astro2.url.pathname, Astro2.site);
  const socialImage = new URL(image, Astro2.site);
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="canonical"', '><meta name="generator"', "><title>", '</title><meta name="description"', '><meta name="author"', '><!-- Open Graph / Twitter --><meta property="og:type"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', '><meta property="og:site_name"', '><meta property="og:locale"', '><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Icons --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Feed --><link rel="alternate" type="application/rss+xml"', ' href="/rss.xml"><!-- Theme color follows the active theme (set by the script below). --><meta name="theme-color" content="#fafef5" id="theme-color-meta"><script>\n  (function () {\n    try {\n      var stored = localStorage.getItem("theme");\n      var prefersDark = window.matchMedia(\n        "(prefers-color-scheme: dark)"\n      ).matches;\n      var theme = stored || (prefersDark ? "dark" : "light");\n      document.documentElement.setAttribute("data-theme", theme);\n      var meta = document.getElementById("theme-color-meta");\n      if (meta) meta.setAttribute("content", theme === "dark" ? "#1d1d1d" : "#fafef5");\n    } catch (e) {\n      document.documentElement.setAttribute("data-theme", "light");\n    }\n  })();\n<\/script>'])), addAttribute(canonical, "href"), addAttribute(Astro2.generator, "content"), pageTitle, addAttribute(description, "content"), addAttribute(SITE.author, "content"), addAttribute(article ? "article" : "website", "content"), addAttribute(pageTitle, "content"), addAttribute(description, "content"), addAttribute(canonical, "content"), addAttribute(socialImage, "content"), addAttribute(SITE.title, "content"), addAttribute(SITE.locale, "content"), addAttribute(pageTitle, "content"), addAttribute(description, "content"), addAttribute(socialImage, "content"), addAttribute(`${SITE.title} \u2014 Blog`, "title"));
}, "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/components/BaseHead.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<button type="button" id="theme-toggle" class="theme-toggle" aria-label="Toggle color theme" title="Toggle light / dark" data-astro-cid-x3pjskd3> <!-- Sun (shown in dark mode \u2192 click to go light) --> <svg class="icon icon-sun" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-x3pjskd3> <circle cx="12" cy="12" r="4" data-astro-cid-x3pjskd3></circle> <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" data-astro-cid-x3pjskd3></path> </svg> <!-- Moon (shown in light mode \u2192 click to go dark) --> <svg class="icon icon-moon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-x3pjskd3> <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" data-astro-cid-x3pjskd3></path> </svg> </button>  <script>\n  (function () {\n    var btn = document.getElementById("theme-toggle");\n    if (!btn) return;\n    var meta = document.getElementById("theme-color-meta");\n    btn.addEventListener("click", function () {\n      var current =\n        document.documentElement.getAttribute("data-theme") || "light";\n      var next = current === "dark" ? "light" : "dark";\n      document.documentElement.setAttribute("data-theme", next);\n      try {\n        localStorage.setItem("theme", next);\n      } catch (e) {}\n      if (meta)\n        meta.setAttribute("content", next === "dark" ? "#1d1d1d" : "#fafef5");\n    });\n  })();\n<\/script>'])), maybeRenderHead());
}, "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/components/ThemeToggle.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://irfankurnia.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const current = Astro2.url.pathname.replace(/\/+$/, "") || "/";
  const isActive = (href) => {
    const h = href.replace(/\/+$/, "") || "/";
    return h === "/" ? current === "/" : current === h || current.startsWith(h + "/");
  };
  return renderTemplate(_a || (_a = __template(["", '<header class="site-header" data-astro-cid-3ef6ksr2> <div class="container site-header__inner" data-astro-cid-3ef6ksr2> <a href="/" class="brand"', ' data-astro-cid-3ef6ksr2> <img class="brand__logo brand__logo--light" src="/site-logos/site-logo-light.svg"', ' width="450" height="180" data-astro-cid-3ef6ksr2> <img class="brand__logo brand__logo--dark" src="/site-logos/site-logo-dark.svg"', ' width="450" height="180" data-astro-cid-3ef6ksr2> </a> <nav class="nav" aria-label="Primary" data-astro-cid-3ef6ksr2> <button type="button" class="nav__toggle" id="nav-toggle" aria-expanded="false" aria-controls="nav-menu" data-astro-cid-3ef6ksr2> <span class="visually-hidden" data-astro-cid-3ef6ksr2>Menu</span> <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-astro-cid-3ef6ksr2> <path d="M3 6h18M3 12h18M3 18h18" data-astro-cid-3ef6ksr2></path> </svg> </button> <ul class="nav__menu" id="nav-menu" role="list" data-astro-cid-3ef6ksr2> ', ' </ul> </nav> <div class="site-header__actions" data-astro-cid-3ef6ksr2> ', ' </div> </div> </header>  <script>\n  (function () {\n    var toggle = document.getElementById("nav-toggle");\n    var menu = document.getElementById("nav-menu");\n    if (!toggle || !menu) return;\n    toggle.addEventListener("click", function () {\n      var open = menu.classList.toggle("is-open");\n      toggle.setAttribute("aria-expanded", open ? "true" : "false");\n    });\n  })();\n<\/script>'])), maybeRenderHead(), addAttribute(`${SITE.title} \u2014 home`, "aria-label"), addAttribute(SITE.title, "alt"), addAttribute(SITE.title, "alt"), HEADER_NAV_ITEMS.map((item) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(item.href, "href")}${addAttribute(["nav__link", { "is-active": isActive(item.href) }], "class:list")}${addAttribute(isActive(item.href) ? "page" : void 0, "aria-current")} data-astro-cid-3ef6ksr2> ${item.label} </a> </li>`), renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-3ef6ksr2": true }));
}, "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/components/Header.astro", void 0);

const SOCIALS = [
  {
    label: "Email",
    handle: "hello@irfankurnia.com",
    href: "mailto:hello@irfankurnia.com",
    icon: "mail"
  },
  {
    label: "GitHub",
    handle: "@irfankurnia33",
    href: "https://github.com/irfankurnia33",
    icon: "github"
  },
  {
    label: "LinkedIn",
    handle: "Irfan Kurnia",
    href: "https://www.linkedin.com/in/irfankurnia33/",
    icon: "linkedin"
  },
  {
    label: "X",
    handle: "@irfankurnia33",
    href: "https://x.com/irfankurnia33",
    icon: "x"
  },
  {
    label: "Instagram",
    handle: "@irfankurnia33",
    href: "https://instagram.com/irfankurnia33",
    icon: "instagram"
  }
];

const $$Astro$1 = createAstro("https://irfankurnia.com");
const $$SocialLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SocialLinks;
  const { variant = "row" } = Astro2.props;
  const items = SOCIALS.filter((s) => s.show !== false);
  const ICONS = {
    mail: "M2.35693 7.714L9.33693 12.368C10.2999 13.009 10.7809 13.33 11.3009 13.455C11.7609 13.565 12.2399 13.565 12.6989 13.455C13.2189 13.33 13.6999 13.009 14.6629 12.368L21.6429 7.714M7.15693 19.5H16.8429C18.5229 19.5 19.3629 19.5 20.0049 19.173C20.569 18.8852 21.0276 18.4263 21.3149 17.862C21.6429 17.22 21.6429 16.38 21.6429 14.7V9.3C21.6429 7.62 21.6429 6.78 21.3159 6.138C21.0283 5.57354 20.5694 5.11462 20.0049 4.827C19.3629 4.5 18.5229 4.5 16.8429 4.5H7.15693C5.47693 4.5 4.63693 4.5 3.99493 4.827C3.43084 5.11479 2.97229 5.57369 2.68493 6.138C2.35693 6.78 2.35693 7.62 2.35693 9.3V14.7C2.35693 16.38 2.35693 17.22 2.68393 17.862C2.97155 18.4265 3.43047 18.8854 3.99493 19.173C4.63693 19.5 5.47693 19.5 7.15693 19.5Z",
    github: "M3.5 15.6681C3.95 15.7221 4.28333 15.9281 4.5 16.2861C4.826 16.8231 6.037 18.8121 7.413 18.8121H9.5M15.995 21.0001V17.2351C15.995 16.6631 15.7207 16.0178 15.172 15.2991C16.374 15.0491 17.465 14.6171 18.312 13.9831C19.76 12.8991 20.5 11.2251 20.5 9.57209C20.5 8.41209 20.06 7.32909 19.296 6.41209C18.871 5.90109 20.115 2.54009 19.01 3.05309C17.905 3.56709 16.285 4.25109 15.436 4.00009C14.527 3.73209 13.536 3.58409 12.5 3.58409C11.6 3.58409 10.734 3.69509 9.926 3.90109C8.752 4.19909 7.63 3.53809 6.5 3.05309C5.37 2.56909 5.987 6.06109 5.651 6.47509C4.921 7.38009 4.5 8.44009 4.5 9.57209C4.5 11.2251 5.395 12.8991 6.843 13.9821C7.808 14.7041 9.017 15.1651 10.37 15.3921M10.37 15.3911C9.79 16.0271 9.50033 16.6314 9.501 17.2041V21.0001",
    linkedin: "M8 7.625V8.125M8 16.375V10.75M12 16.375V13.5M12 13.5V10.75M12 13.5C12 12.212 13.222 11.5 14.4 11.5C16 11.5 16 12.875 16 14.375V16.375M3 9.4C3 7.16 3 6.04 3.436 5.184C3.81949 4.43139 4.43139 3.81949 5.184 3.436C6.04 3 7.16 3 9.4 3H14.6C16.84 3 17.96 3 18.816 3.436C19.5686 3.81949 20.1805 4.43139 20.564 5.184C21 6.04 21 7.16 21 9.4V14.6C21 16.84 21 17.96 20.564 18.816C20.1805 19.5686 19.5686 20.1805 18.816 20.564C17.96 21 16.84 21 14.6 21H9.4C7.16 21 6.04 21 5.184 20.564C4.43139 20.1805 3.81949 19.5686 3.436 18.816C3 17.96 3 16.84 3 14.6V9.4Z",
    x: "M19.0001 4.00008L13.0701 10.9301M13.0701 10.9301L7.27505 4.34308C7.17426 4.23331 7.05144 4.14602 6.91463 4.08691C6.77782 4.02781 6.63008 3.99822 6.48105 4.00008H5.00705C4.17105 4.00008 3.70005 4.85008 4.21405 5.43508L10.9301 13.0701M13.0701 10.9301L19.7861 18.5651C20.3001 19.1501 19.8291 20.0001 18.9931 20.0001H17.5191C17.2081 20.0001 16.9151 19.8731 16.7251 19.6571L10.9301 13.0701M5.00005 20.0001L10.9301 13.0701",
    instagram: "M17 6.5H17.5M3 9.4C3 7.16 3 6.04 3.436 5.184C3.81949 4.43139 4.43139 3.81949 5.184 3.436C6.04 3 7.16 3 9.4 3H14.6C16.84 3 17.96 3 18.816 3.436C19.5686 3.81949 20.1805 4.43139 20.564 5.184C21 6.04 21 7.16 21 9.4V14.6C21 16.84 21 17.96 20.564 18.816C20.1805 19.5686 19.5686 20.1805 18.816 20.564C17.96 21 16.84 21 14.6 21H9.4C7.16 21 6.04 21 5.184 20.564C4.43139 20.1805 3.81949 19.5686 3.436 18.816C3 17.96 3 16.84 3 14.6V9.4ZM15.462 11.487C15.5294 11.9417 15.5065 12.4052 15.3947 12.8511C15.283 13.297 15.0845 13.7165 14.8106 14.0856C14.5367 14.4548 14.1928 14.7664 13.7985 15.0026C13.4042 15.2389 12.9672 15.3951 12.5125 15.4625C12.0578 15.5299 11.5943 15.507 11.1484 15.3952C10.7025 15.2835 10.283 15.085 9.91389 14.8111C9.16834 14.258 8.67306 13.4313 8.537 12.513C8.40094 11.5947 8.63526 10.6599 9.1884 9.91439C9.74154 9.16884 10.5682 8.67356 11.4865 8.5375C12.4048 8.40144 13.3396 8.63576 14.0851 9.1889C14.8307 9.74204 15.3259 10.5687 15.462 11.487Z"
  };
  return renderTemplate`${variant === "row" ? renderTemplate`${maybeRenderHead()}<ul class="social-row" role="list" data-astro-cid-zamss57n>${items.map((s) => renderTemplate`<li data-astro-cid-zamss57n><a${addAttribute(s.href, "href")}${addAttribute(s.label, "aria-label")} rel="me noopener"${addAttribute(s.href.startsWith("http") ? "_blank" : void 0, "target")} data-astro-cid-zamss57n><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zamss57n><path${addAttribute(ICONS[s.icon], "d")} data-astro-cid-zamss57n></path></svg></a></li>`)}</ul>` : renderTemplate`<ul class="social-list" role="list" data-astro-cid-zamss57n>${items.map((s) => renderTemplate`<li data-astro-cid-zamss57n><a${addAttribute(s.href, "href")} class="social-card" rel="me noopener"${addAttribute(s.href.startsWith("http") ? "_blank" : void 0, "target")} data-astro-cid-zamss57n><span class="social-card__icon" aria-hidden="true" data-astro-cid-zamss57n><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zamss57n><path${addAttribute(ICONS[s.icon], "d")} data-astro-cid-zamss57n></path></svg></span><span class="social-card__text" data-astro-cid-zamss57n><span class="social-card__label" data-astro-cid-zamss57n>${s.label}</span><span class="social-card__handle mono" data-astro-cid-zamss57n>${s.handle}</span></span></a></li>`)}</ul>`}`;
}, "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/components/SocialLinks.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer" data-astro-cid-sz7xmlte> <div class="container site-footer__inner" data-astro-cid-sz7xmlte> <div class="site-footer__brand" data-astro-cid-sz7xmlte> <p class="site-footer__name" data-astro-cid-sz7xmlte>${SITE.title}</p> <p class="site-footer__desc" data-astro-cid-sz7xmlte>${SITE.description}</p> ${renderComponent($$result, "SocialLinks", $$SocialLinks, { "variant": "row", "data-astro-cid-sz7xmlte": true })} </div> <nav class="site-footer__nav" aria-label="Footer" data-astro-cid-sz7xmlte> <ul role="list" data-astro-cid-sz7xmlte> ${NAV_ITEMS.map((item) => renderTemplate`<li data-astro-cid-sz7xmlte><a${addAttribute(item.href, "href")} data-astro-cid-sz7xmlte>${item.label}</a></li>`)} </ul> </nav> </div> <div class="container site-footer__legal" data-astro-cid-sz7xmlte> <p class="mono" data-astro-cid-sz7xmlte>© ${year} ${SITE.author}. All rights reserved.</p> </div> </footer> `;
}, "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://irfankurnia.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, image, article } = Astro2.props;
  return renderTemplate`<html${addAttribute(SITE.locale, "lang")}> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "image": image, "article": article })}${renderHead()}</head> <body> <a href="#main" class="skip-link">Skip to content</a> ${renderComponent($$result, "Header", $$Header, {})} <main id="main"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, $$SocialLinks as a };
