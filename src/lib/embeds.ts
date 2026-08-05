// Resolves plain share links into embeddable iframe descriptors at build time.
// Most platforms only need a URL rewrite. SoundCloud *sets* (playlists) are the
// exception: the widget can't load them from a public /sets/ URL — it needs the
// numeric api.soundcloud.com/playlists/ID, which we resolve via SoundCloud's
// oEmbed endpoint and cache for the duration of the build.

export interface ResolvedEmbed {
  src: string;
  /** Fixed pixel height for audio players; 0 means a 16:9 video frame. */
  height: number;
}

const SC_TRACK_PARAMS =
  "&color=%23ff5500&auto_play=false&hide_related=true" +
  "&show_comments=false&show_user=true&show_reposts=false&show_teaser=false";

const scSetCache = new Map<string, ResolvedEmbed>();

async function resolveSoundCloudSet(pageUrl: string): Promise<ResolvedEmbed> {
  const cached = scSetCache.get(pageUrl);
  if (cached) return cached;

  // Fallback keeps the build working (and shows the set's metadata) if the
  // oEmbed request fails, e.g. building offline.
  let resolved: ResolvedEmbed = {
    src: `https://w.soundcloud.com/player/?url=${encodeURIComponent(pageUrl)}${SC_TRACK_PARAMS}&visual=true`,
    height: 450,
  };

  try {
    const res = await fetch(
      `https://soundcloud.com/oembed?format=json&url=${encodeURIComponent(pageUrl)}`,
    );
    if (res.ok) {
      const data = (await res.json()) as { html?: string };
      // The oEmbed iframe src carries url=https%3A%2F%2Fapi.soundcloud.com%2Fplaylists%2FID
      const apiUrl = data.html?.match(/[?&]url=([^&"]+)/)?.[1];
      if (apiUrl) {
        resolved = {
          src: `https://w.soundcloud.com/player/?url=${apiUrl}${SC_TRACK_PARAMS}&visual=true&show_artwork=true`,
          height: 450,
        };
      }
    }
  } catch {
    // keep the fallback
  }

  scSetCache.set(pageUrl, resolved);
  return resolved;
}

function toEmbed(raw: string): ResolvedEmbed | Promise<ResolvedEmbed> {
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return { src: raw, height: 0 };
  }
  const host = url.hostname.replace(/^www\./, "");

  // SoundCloud: single tracks use the compact waveform bar; sets need oEmbed.
  if (host === "soundcloud.com" || host === "m.soundcloud.com") {
    const pageUrl = `https://soundcloud.com${url.pathname}`;
    if (url.pathname.includes("/sets/")) return resolveSoundCloudSet(pageUrl);
    return {
      src: `https://w.soundcloud.com/player/?url=${encodeURIComponent(pageUrl)}${SC_TRACK_PARAMS}&visual=false`,
      height: 166,
    };
  }

  // Spotify: open.spotify.com/track/ID → open.spotify.com/embed/track/ID.
  if (host === "open.spotify.com" && !url.pathname.startsWith("/embed/")) {
    const isTrack = url.pathname.startsWith("/track/");
    return {
      src: `https://open.spotify.com/embed${url.pathname}${url.search}`,
      height: isTrack ? 152 : 352,
    };
  }
  if (host === "open.spotify.com") {
    return { src: raw, height: url.pathname.startsWith("/embed/track/") ? 152 : 352 };
  }

  // YouTube: watch?v=ID and youtu.be/ID → youtube.com/embed/ID (16:9 video).
  if (host === "youtube.com" && url.pathname === "/watch") {
    const id = url.searchParams.get("v");
    if (id) return { src: `https://www.youtube.com/embed/${id}`, height: 0 };
  }
  if (host === "youtu.be") {
    return { src: `https://www.youtube.com/embed${url.pathname}`, height: 0 };
  }

  return { src: raw, height: 0 };
}

/** Resolve a list of raw URLs into embeddable iframe descriptors. */
export function resolveEmbeds(raws: string[]): Promise<ResolvedEmbed[]> {
  return Promise.all(raws.filter(Boolean).map((raw) => toEmbed(raw)));
}
