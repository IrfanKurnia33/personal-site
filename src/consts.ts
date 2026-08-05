// Central site configuration — edit these values in one place.

export const SITE = {
  // Update to the final production domain before deploying (no trailing slash).
  url: "https://irfankurnia.com",
  title: "Irfan Kurnia",
  // Short tagline used in <meta> descriptions and the site header.
  description:
    "This is everything I am and everything I do, in one place (at least what I chose to share publicly).",
  author: "Irfan Kurnia",
  // Recipient for the contact form. Also referenced by the serverless contact route.
  email: "hello@irfankurnia.com",
  locale: "en",
} as const;

// Primary navigation. `href` values use directory-style clean URLs.
// Full navigation — shown in the footer.
export const NAV_ITEMS = [
  { href: "/about/", label: "About" },
  { href: "/now/", label: "Now" },
  { href: "/blog/", label: "Blog" },
  { href: "/projects/", label: "Projects" },
  { href: "/music/", label: "Music" },
  { href: "/podcast/", label: "Podcast" },
  { href: "/socials/", label: "Socials" },
  { href: "/contact/", label: "Contact" },
] as const;

// Leaner navigation — shown in the header.
export const HEADER_NAV_ITEMS = [
  { href: "/now/", label: "Now" },
  { href: "/blog/", label: "Articles" },
  { href: "/projects/", label: "Projects" },
  { href: "/music/", label: "Music" },
] as const;
