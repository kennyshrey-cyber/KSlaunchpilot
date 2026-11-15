# Launch checklist

Status as of the launch edition on branch `claude/hopeful-dijkstra-3d08g8`. The sections from "Changes made to the design" down describe the first implementation pass.

## Launch edition (current release)

The site now builds the **launch edition** by default: no client names, no real client screenshots and no
team photos. See "Editions" in the README.

### Before or right after going live

| # | Item | State |
|---|---|---|
| 1 | **Publish.** Netlify builds the repository's production branch. The launch edition is on `claude/hopeful-dijkstra-3d08g8`. | Merge it into the production branch (or point Netlify at it). |
| 2 | **Form delivery.** Netlify → Forms → enable form detection, then add an email notification. | Check one real enquiry arrives. |
| 3 | **Contact email.** The site uses `kslaunchpilot@gmail.com` (the public support address on the App Market listing). The original design used `hello@kslaunchpilot.com`, which was never confirmed to exist. | Change `email` in `src/data/site.ts` if a domain mailbox is set up. |
| 4 | **CollectionGrid App Market link.** Not supplied yet, so the CollectionGrid buttons say "Search CollectionGrid on the Wix App Market". | Add the listing address as `marketUrl` in `src/data/apps.ts`. |
| 5 | **Domain.** Still on `kslaunchpilot.netlify.app`. | Set `SITE_URL` and connect the domain when ready. |
| 6 | **Privacy page.** A plain-language notice that describes what the site does. It has not been reviewed by a lawyer. | Review the wording in `src/pages/privacy.astro`. |
| 7 | **Client names in the repository.** The website no longer shows them, but this repository is public and the names remain in `src/data/projects.ts`, `docs/` and `design-source/`. | Make the repository private, or remove the names, if that matters. |

### To switch to the full edition later

1. Get each client's permission to show their name and website.
2. Add the real screenshots and team photos (`docs/ASSET-INVENTORY.md`).
3. Set `PUBLIC_SITE_EDITION = "full"` in `netlify.toml` and redeploy.

## Decisions for you (not blocking)

| # | Item | Current state |
|---|---|---|
| 8 | **Colour contrast (WCAG 2.1 AA).** Sand Beige `#D9C7B8` text on Ocean Deep `#355C63` (small uppercase labels, eyebrows, process numbers), and Ocean Deep text on Sand Beige (the "Shrey" labels on Home), are **4.47:1** (needs 4.5:1). | Brand colours kept exactly as designed. A near-invisible fix: use `#DDCCBE` for small labels on Ocean Deep. |
| 9 | **Analytics.** None installed. | Supply a GA4 ID (or similar) if wanted. The privacy page must then be updated, and a cookie notice may be required. |
| 10 | **Restaurant or other project types.** The Work page lists the five project types that match delivered projects. | Tell us if more types should be added. |

## Changes made to the design (functional or accessibility only)

- Mobile navigation menu added (the design hid the nav below 860px with no menu). It uses the design's typography and colours.
- Header "Start Your Project" button: slightly smaller below 400px and hidden below 360px, so the header fits on one line. The button is still in the menu, the hero and the sticky bar.
- Services list rows restack below 720px. The design's four-column row overlapped text on phones.
- Horizontal overflow on phones (also present in the original) fixed on Home (hero mock-up), Contact (form column) and the case study (wide screenshot and detail text).
- Contact option buttons are now accessible radio groups (keyboard operable, selection announced, included in the submitted data). A selected option can still be clicked again to clear it, as in the design.
- Visible keyboard focus everywhere (the design removed input outlines), a skip link, a `<main>` landmark and labelled navigation.
- Scroll reveal is disabled for visitors who prefer reduced motion. Content is always visible without JavaScript.
- Footer gains a "Privacy" link.

## Verified in this pass

- `npm run build` and `npm run check`: pass (0 errors, 0 warnings).
- Pixel-level layout comparison against the original Claude Design pages (rendered with its own runtime) at
  1440, 768 and 390px: every section's height matches, except where a fix above changed it intentionally.
- No horizontal scrolling on any page at widths from 320 to 1920px.
- 20 internal links resolve; the only external link is `mailto:hello@kslaunchpilot.com`. Anchors (`#services`) exist.
- Mobile menu: open, close, Escape, focus return, current page marked, navigation. Sticky CTA: hidden at the
  top, shown after scrolling on mobile, never on desktop or the Contact page.
- Contact form (with mocked responses): `?need=` preselection; option select and clear; required and email
  validation; auto `https://` on the URL; complete payload; success only on 2xx; error shown with input kept on
  4xx and on network failure.
- No console errors or failed requests on any page (desktop and mobile).
- SEO: unique titles and descriptions, `lang="en"`, one `<h1>` per page, no heading-level skips, Open Graph and
  Twitter tags, canonical URLs and sitemap when `SITE_URL` is set; noindex on thanks, privacy and 404.
- axe-core WCAG 2.1 AA: all pages pass except the colour-contrast items in decision 7.
- Lighthouse (local, no images yet): Performance 99–100, Accessibility 100, Best Practices 100, SEO 100 on all
  six pages, mobile and desktop. Lighthouse's accessibility score doesn't catch decision 7, because those
  elements are faded out by the scroll reveal while it measures.

## Still to verify after deploy

- One real form submission arrives at the chosen email address (Netlify form detection must be enabled).
- `SITE_URL` is set and `/sitemap-index.xml` lists the six pages on the live domain.
- Re-run Lighthouse once real images are added.
