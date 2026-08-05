const SITE = {
  title: "Irfan Kurnia",
  // Short tagline used in <meta> descriptions and the site header.
  description: "This is everything I am and everything I do, in one place (at least what I chose to share publicly).",
  author: "Irfan Kurnia",
  locale: "en"
};
const NAV_ITEMS = [
  { href: "/about/", label: "About" },
  { href: "/now/", label: "Now" },
  { href: "/blog/", label: "Blog" },
  { href: "/projects/", label: "Projects" },
  { href: "/music/", label: "Music" },
  { href: "/podcast/", label: "Podcast" },
  { href: "/socials/", label: "Socials" },
  { href: "/contact/", label: "Contact" }
];
const HEADER_NAV_ITEMS = [
  { href: "/now/", label: "Now" },
  { href: "/blog/", label: "Articles" },
  { href: "/projects/", label: "Projects" },
  { href: "/music/", label: "Music" }
];

export { HEADER_NAV_ITEMS as H, NAV_ITEMS as N, SITE as S };
