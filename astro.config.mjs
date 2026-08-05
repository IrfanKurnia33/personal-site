// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

import { SITE } from "./src/consts.ts";

// https://astro.build/config
export default defineConfig({
  // Canonical site URL — used for sitemap, RSS, and canonical <link> tags.
  // Update this to the final production domain before deploying.
  site: SITE.url,

  // Server output with Vercel adapter enables static pages plus a serverless
  // contact API route.
  output: "server",
  build: {
    format: "directory",
  },

  adapter: vercel(),
  integrations: [mdx(), sitemap()],

  // Prefer inlined small stylesheets to cut requests on serverless deployments.
  vite: {
    build: {
      assetsInlineLimit: 1024,
    },
  },
});
