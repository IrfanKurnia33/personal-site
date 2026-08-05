// Podcast entries for the /podcast page — episodes you host or appear on.

export interface PodcastItem {
  title: string;
  show?: string;
  date?: string; // ISO date string, e.g. "2026-03-01"
  /** Embed URL (iframe src) for the episode player. Optional. */
  embed?: string;
  href?: string;
  note?: string;
}

export const PODCASTS: PodcastItem[] = [
  {
    title: "Berawal dari Kegalauan Saat Kuliah, Orang Ini Putar Haluan Jadi UI/UX Designer",
    show: "Nodis Media",
    date: "2023-10-09",
    note: "A talk with a good friend of mine Ian about my journey into the world of UX design.",
    href: "https://www.youtube.com/watch?v=edFGT4gGVZE",
  },
  {
    title: "Wandering around: thoughts on being a generalist",
    show: "Erratic Thoughts and More",
    date: "2021-01-08",
    note: "As Kahlil Gibran said: 'We live only to discover beauty. All else is a form of waiting.'",
    href: "https://open.spotify.com/episode/07FeroqjGkhKwjmixUWdUv",
  },
];
