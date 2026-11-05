// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Production domain. Set SITE_URL (e.g. https://kslaunchpilot.com) once the domain is confirmed.
 * On Netlify, the platform's own URL variable is used as a fallback.
 * When no URL is known, canonical/Open Graph URLs and the sitemap are omitted rather than guessed.
 */
const site = process.env.SITE_URL || process.env.URL || undefined;

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: { format: 'directory' },
  compressHTML: true,
  integrations: site
    ? [
        sitemap({
          // Pages that must not be indexed are excluded.
          filter: (page) => !/\/(privacy|contact\/thanks)\/$/.test(page),
        }),
      ]
    : [],
});
