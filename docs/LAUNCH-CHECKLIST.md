# Launch checklist

Status as of the first implementation pass on branch `claude/sleepy-ritchie-l3rsi0`.

## Blockers: need information from you

| # | Item | Why it blocks launch | Where it goes |
|---|---|---|---|
| 1 | **Hosting and form delivery.** Confirm Netlify (or supply a Formspree endpoint). | Without a configured provider the form deliberately reports that nothing was sent. | `netlify.toml` (already set for Netlify Forms) or `PUBLIC_FORM_PROVIDER`/`PUBLIC_FORM_ENDPOINT` |
| 2 | **Submission email address.** Where should enquiries be delivered? | Netlify stores submissions; email delivery is configured in its dashboard. | Netlify → Forms → Form notifications |
| 3 | **Domain.** Confirm the domain (the design uses `hello@kslaunchpilot.com`) and DNS access. | Canonical URLs, Open Graph URLs and the sitemap need the final domain. | `SITE_URL` env var, Netlify domain settings |
| 4 | **Mailbox.** Confirm `hello@kslaunchpilot.com` exists and receives mail. | It is the fallback contact on every page and in the form's error message. | `src/data/site.ts` |
| 5 | **Privacy policy text** (approved legal content). | The contact form collects personal data. `/privacy/` is a holding page (noindex). | `src/pages/privacy.astro` |
| 6 | **Images.** 14 essential images (project screenshots, case-study screenshots, About headshots). | The Work, case-study and About pages show empty placeholder blocks. | `docs/ASSET-INVENTORY.md` |

## Decisions for you (not blocking a soft launch)

| # | Item | Current state |
|---|---|---|
| 7 | **Colour contrast (WCAG 2.1 AA).** Sand Beige `#D9C7B8` text on Ocean Deep `#355C63` (small uppercase labels, eyebrows, process numbers), and Ocean Deep text on Sand Beige (the "Shrey" labels on Home), are **4.47:1** (needs 4.5:1). The brown `#7A5C49` on the Sand Beige section was 3.7:1 and has already been darkened to `#6B4F3E` (4.55:1). | Brand colours kept exactly as designed. A near-invisible fix: use `#DDCCBE` for small labels on Ocean Deep. One-line change if approved. |
| 8 | **Project destinations.** 8 of 9 Work cards have no case study or verified URL. | Rendered as non-clickable cards, with no "Case study →" label. Add `url` (verified) or `caseStudy` per project in `src/data/projects.ts`. |
| 9 | **Homepage "Platform" row.** The design said "To confirm". | Hidden until a value is set in `src/data/projects.ts`. |
| 10 | **Work page intro** says "Select a project to see what we did." | Kept as designed; only Felon Friendly Jobs Now is currently selectable. |
| 11 | **Case study "Next project: Baan Pufa Resort →"** links to `/work/` (as in the design) because there is no Baan Pufa case study. | Kept as designed. |
| 12 | **Analytics.** None installed. | Supply a GA4 ID (or similar) if wanted. A cookie notice may then be required. |
| 13 | **Share image and favicon** are built from the design's "KS" mark and homepage headline. | Replace `public/og-image.png` and the icons if official brand files exist. |

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
