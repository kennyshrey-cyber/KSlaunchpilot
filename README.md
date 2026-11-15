# KS LaunchPilot website

The production website for KS LaunchPilot, built with [Astro](https://astro.build) as a fully static site.
It started as a faithful conversion of the approved Claude Design pages (Group A) in `design-source/`.

## Editions

The site builds in one of two editions, set by `PUBLIC_SITE_EDITION` (see `src/data/edition.ts`):

| Edition | What it shows | When to use |
|---|---|---|
| `launch` (default, set in `netlify.toml`) | Anonymised project types with illustrative website visuals. No client names, no real client screenshots, no team photos. | Live now. |
| `full` | The named client projects, real screenshots, the named case study and team photos. | Only after clients have given permission and the real images are added (`docs/ASSET-INVENTORY.md`). |

Any value other than `full` builds the launch edition, so a missing or mistyped setting can never publish client names.
Both editions share every page, component and style. Only `src/data/projects.ts` and `src/data/caseStudies.ts` differ.
Team photos appear automatically in either edition once their files are registered in `src/data/images.ts`.

## Pages

| Route | Source design file |
|---|---|
| `/` | `Launchpilot Home.dc.html` |
| `/services/` | `Launchpilot Services.dc.html` |
| `/work/` | `Launchpilot Work.dc.html` |
| `/work/jobs-services-directory/` | `Launchpilot Case Study.dc.html` (launch edition: anonymised). The full edition builds `/work/felon-friendly-jobs-now/` instead. |
| `/apps/` | New page: Code Canvas and CollectionGrid on the Wix App Market |
| `/about/` | `Launchpilot About.dc.html` |
| `/contact/` | `Launchpilot Contact.dc.html` |
| `/contact/thanks/` | Form confirmation (used when JavaScript is off; not indexed) |
| `/privacy/` | Plain-language privacy notice describing what the site collects |
| `/404` | Custom not-found page |

## Commands

Requires Node.js 22.23.4 or newer (see `.nvmrc`).

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server at http://localhost:4321 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run check` | Type and template checks |

## Project structure

```
design-source/            Original Claude Design export (reference only, never edited)
docs/                     Asset inventory and launch checklist
mockups/                  Sources for the illustrative website visuals (see mockups/README.md)
public/                   Favicons, share image, web manifest
src/
  assets/images/          Every image used by the site (optimised at build time)
  components/             SiteHeader, SiteFooter, StickyCta, ContactForm, ImageSlot,
                          AppsShowcase, VideoEmbed, SocialIcon
  data/                   edition.ts (launch or full)
                          site.ts (name, email, social links, nav, page titles and descriptions)
                          apps.ts (Code Canvas and CollectionGrid: copy, links, screenshots)
                          projects.ts (Work and Home project cards, one list per edition)
                          caseStudies.ts (case studies, one per edition)
                          images.ts (every image slot and its file and alt text)
                          contact.ts (form options and delivery settings)
  layouts/BaseLayout.astro  <head>, SEO and Open Graph tags, header, footer, scripts
  pages/                  One file per route
  scripts/                site.ts (mobile menu, sticky CTA, scroll reveal), contact-form.ts
  styles/                 global.css, hover.css (hover states from the design)
```

The page markup keeps the design's inline styles, so spacing, type and colour match the approved design exactly.
The React and Babel runtime that Claude Design loaded from unpkg.com is gone: the site ships plain HTML and CSS
plus under 4 KB of inline JavaScript (about 1.6 KB on every page, 2.4 KB more on Contact), and self-hosts its fonts (Cormorant Garamond 400/500 and Inter 400/500, Latin subset).

## Configuration

Set these as environment variables (locally in `.env`, see `.env.example`; on Netlify under
Site configuration → Environment variables).

| Variable | Purpose |
|---|---|
| `SITE_URL` | Final domain, e.g. `https://kslaunchpilot.com`. Enables canonical URLs, `og:url`/`og:image`, and `sitemap-index.xml` (referenced from `robots.txt`). On Netlify the platform's own `URL` is used if this is unset. |
| `PUBLIC_FORM_PROVIDER` | `netlify` (default in `netlify.toml`) or `formspree`. |
| `PUBLIC_FORM_ENDPOINT` | Formspree only: your form URL, e.g. `https://formspree.io/f/xxxxxxx`. |

If no form provider is configured, the form never shows a false success. It tells the visitor the message
wasn't sent and gives them the email address instead.

## Contact form

- Fields and options match the design. The option buttons are accessible radio groups, so the selected need,
  timing and budget are submitted with the form.
- `/contact/?need=New%20Website` (and the other values in `src/data/contact.ts`) preselects "What do you need?".
- Validation: name, email and project brief are required, and the email format is checked. Errors appear
  inline and focus moves to the first problem.
- The success panel appears only after the form service returns a 2xx response. On failure an error appears,
  with the email address, and the visitor's input is kept.
- Spam: honeypot field (`bot-field` for Netlify, `_gotcha` for Formspree).

## Deploying on Netlify (recommended)

1. In Netlify: **Add new site → Import an existing project → GitHub → `KSlaunchpilot`**. The build settings come from `netlify.toml`.
2. **Forms → Enable form detection**, then redeploy. The form appears as `project-enquiry`.
3. **Forms → Form notifications → Email notification**: send submissions to the address you choose.
4. Set `SITE_URL` once the domain is confirmed, then connect the domain under **Domain management**. HTTPS is automatic.
5. Submit one real test enquiry on the live URL and confirm it arrives.

## Images

Every image in the original design was an empty placeholder, and the homepage hero and "What we can build"
cards were wireframes. The homepage now shows illustrative website visuals in both places, and the launch
edition fills its project and case-study slots the same way, all rendered from `mockups/`. The launch edition
leaves out the homepage "Selected experience" row, because it would repeat those visuals. It also uses the real Wix App Market
listing images for the two apps. See [`docs/ASSET-INVENTORY.md`](docs/ASSET-INVENTORY.md) for the slots the full
edition still needs. Images are optimised to responsive WebP at build time.

## Apps

`src/data/apps.ts` drives the homepage apps band and the `/apps/` page. Copy follows each app's approved
App Market listing. If an app has no `marketUrl`, its buttons are replaced by a "search the Wix App Market"
line, so the site never links to a guessed address. Set `marketUrl` to turn the buttons on.

## Projects

`src/data/projects.ts` controls the Work and Home cards (one list per edition). A card links to its case study (`caseStudy`), or to the
live website if a verified `url` is set (opens in a new tab). With neither, it is not clickable. The homepage
"Platform" row is hidden until `platform` is filled in (the design said "To confirm").

See [`docs/LAUNCH-CHECKLIST.md`](docs/LAUNCH-CHECKLIST.md) for open items before going live.
