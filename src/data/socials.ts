// Single source of truth for social links — used by the Socials page and the
// footer. `icon` maps to an inline SVG key in SocialLinks.astro. Edit freely.

export interface Social {
  label: string;
  handle: string;
  href: string;
  icon: string;
  /** Set false to keep it in the data file but hide it from the UI. */
  show?: boolean;
}

export const SOCIALS: Social[] = [
  {
    label: "Email",
    handle: "hello@irfankurnia.com",
    href: "mailto:hello@irfankurnia.com",
    icon: "mail",
  },
  {
    label: "GitHub",
    handle: "@irfankurnia33",
    href: "https://github.com/irfankurnia33",
    icon: "github",
  },
  {
    label: "LinkedIn",
    handle: "Irfan Kurnia",
    href: "https://www.linkedin.com/in/irfankurnia33/",
    icon: "linkedin",
  },
  {
    label: "X",
    handle: "@irfankurnia33",
    href: "https://x.com/irfankurnia33",
    icon: "x",
  },
  {
    label: "Instagram",
    handle: "@irfankurnia33",
    href: "https://instagram.com/irfankurnia33",
    icon: "instagram",
  },
];
