/**
 * Image inventory. Every image slot from the Claude Design source is listed here by its original id.
 *
 * To add a real image:
 *   1. Put the file in src/assets/images/ (JPG, PNG, WebP or AVIF; at least the recommended size).
 *   2. Set `file` to its file name and write `alt` text that describes what the image shows.
 * The site then builds responsive WebP versions automatically. Until then the slot keeps its size
 * and renders as a neutral placeholder block, so layouts stay intact.
 *
 * docs/ASSET-INVENTORY.md is the human-readable version of this list.
 */
export interface ImageEntry {
  /** Brief from the design's image placeholder. */
  description: string;
  pages: string[];
  aspect: string;
  recommendedSize: string;
  essential: boolean;
  /** Responsive `sizes` hint for the browser. */
  sizes: string;
  file: string | null;
  alt: string;
}

const PROJECT_SIZES = '(min-width: 1360px) 420px, (min-width: 760px) 45vw, 100vw';

const project = (name: string, kind = 'homepage screenshot'): ImageEntry => ({
  description: `${name}, ${kind}`,
  pages: ['Home (16:10 crop)', 'Work (4:3 crop)'],
  aspect: '4:3 (also cropped to 16:10 on Home)',
  recommendedSize: '1600 × 1200 px, key content centred',
  essential: true,
  sizes: PROJECT_SIZES,
  file: null,
  alt: '',
});

export const IMAGES: Record<string, ImageEntry> = {
  'lp-shrey': {
    description: 'Shrey headshot',
    pages: ['Home: The studio'],
    aspect: '1:1',
    recommendedSize: '400 × 400 px',
    essential: false,
    sizes: '88px',
    file: null,
    alt: '',
  },
  'lp-kenny': {
    description: 'Kenny headshot',
    pages: ['Home: The studio'],
    aspect: '1:1',
    recommendedSize: '400 × 400 px',
    essential: false,
    sizes: '88px',
    file: null,
    alt: '',
  },
  'lp-about-shrey': {
    description: 'Shrey, professional headshot, natural light',
    pages: ['About: Founders'],
    aspect: '4:5',
    recommendedSize: '1040 × 1300 px',
    essential: true,
    sizes: '(min-width: 1100px) 520px, 100vw',
    file: null,
    alt: '',
  },
  'lp-about-kenny': {
    description: 'Kenny, professional headshot, natural light',
    pages: ['About: Founders'],
    aspect: '4:5',
    recommendedSize: '1040 × 1300 px',
    essential: true,
    sizes: '(min-width: 1100px) 520px, 100vw',
    file: null,
    alt: '',
  },
  'lp-w-baanpufa': { ...project('Baan Pufa Resort') },
  'lp-w-zenida': { ...project('Zenida Wellbeing') },
  'lp-w-ffjn': {
    ...project('Felon Friendly Jobs Now', 'directory / homepage screenshot'),
  },
  'lp-w-carmine': { ...project('Carmine Realty'), pages: ['Work'], aspect: '4:3' },
  'lp-w-harihara': { ...project('Hariharalaya'), pages: ['Work'], aspect: '4:3' },
  'lp-w-montecielo': { ...project('Monte Cielo'), pages: ['Work'], aspect: '4:3' },
  'lp-w-vista': { ...project('Vista Montego Bay'), pages: ['Work'], aspect: '4:3' },
  'lp-w-retreatguru': { ...project('Retreat Guru'), pages: ['Work'], aspect: '4:3' },
  'lp-w-adrenalynx': { ...project('Adrenalynx'), pages: ['Work'], aspect: '4:3' },
  'lp-cs-main': {
    description: 'Full-width desktop screenshot: homepage (Felon Friendly Jobs Now)',
    pages: ['Case study: Felon Friendly Jobs Now'],
    aspect: '3:2',
    recommendedSize: '2400 × 1600 px',
    essential: true,
    sizes: '(min-width: 1360px) 1264px, 100vw',
    file: null,
    alt: '',
  },
  'lp-cs-2': {
    description: 'Search results with category filters (Felon Friendly Jobs Now)',
    pages: ['Case study: Felon Friendly Jobs Now'],
    aspect: '16:10',
    recommendedSize: '1600 × 1000 px',
    essential: true,
    sizes: '(min-width: 1360px) 840px, 100vw',
    file: null,
    alt: '',
  },
  'lp-cs-3': {
    description: 'Listing page, mobile (Felon Friendly Jobs Now)',
    pages: ['Case study: Felon Friendly Jobs Now'],
    aspect: '9:16',
    recommendedSize: '750 × 1334 px (phone screenshot)',
    essential: true,
    sizes: '(min-width: 1360px) 300px, 50vw',
    file: null,
    alt: '',
  },

  /* ---------- Launch edition: illustrative visuals rendered from /mockups (no client names) ---------- */
  'lp-l-resort': launch('launch-resort.jpg', 'Homepage design for a boutique resort website: a pool villa hero photo, a booking bar and villa, dining and spa cards'),
  'lp-l-wellness': launch('launch-wellness.jpg', "Homepage design for a wellness studio website: a headline, today's class schedule and a sunlit yoga studio photo"),
  'lp-l-directory': launch('launch-directory.jpg', 'Homepage design for a jobs and services directory: a search bar, category tiles and the latest listings'),
  'lp-l-realty': { ...launch('launch-realty.jpg', 'Homepage design for a real estate agency website: a property search panel over a house photo and featured listings'), pages: ['Work'] },
  'lp-l-retreat': { ...launch('launch-retreat.jpg', 'Homepage design for a retreat centre website: an open-air yoga shala above rice terraces and a list of upcoming retreats'), pages: ['Work'] },
  'lp-l-cs-main': {
    description: 'Directory homepage, desktop (illustrative)',
    pages: ['Case study: Jobs & services directory'],
    aspect: '3:2',
    recommendedSize: '2400 × 1600 px',
    essential: true,
    sizes: '(min-width: 1360px) 1264px, 100vw',
    file: 'launch-cs-main.jpg',
    alt: 'Directory homepage with a search bar, category tiles and the latest job and service listings',
  },
  'lp-l-cs-search': {
    description: 'Search results with category filters (illustrative)',
    pages: ['Case study: Jobs & services directory'],
    aspect: '16:10 on phones, taller beside the phone screenshot (cropped from the top)',
    recommendedSize: '1600 × 1367 px',
    essential: true,
    sizes: '(min-width: 1360px) 840px, 100vw',
    file: 'launch-cs-search.jpg',
    alt: 'Search results page with category and job type filters beside a list of matching listings',
  },
  'lp-l-cs-mobile': {
    description: 'Listing page, mobile (illustrative)',
    pages: ['Case study: Jobs & services directory'],
    aspect: '9:16',
    recommendedSize: '750 × 1334 px',
    essential: true,
    sizes: '(min-width: 1360px) 300px, 50vw',
    file: 'launch-cs-mobile.jpg',
    alt: 'A single job listing on a phone, with pay, schedule and an Apply now button',
  },

  /* ---------- Brand and apps ---------- */
  'brand-logo': {
    description: 'KS LaunchPilot logo icon',
    pages: ['Header'],
    aspect: '1:1',
    recommendedSize: '136 × 136 px',
    essential: true,
    sizes: '34px',
    file: 'brand-logo.png',
    alt: 'KS LaunchPilot logo',
  },
  'app-cc-icon': icon('app-code-canvas-icon.png', 'Code Canvas app icon'),
  'app-cg-icon': icon('app-collectiongrid-icon.png', 'CollectionGrid app icon'),
  'app-cc-editor': app('app-code-canvas-editor.jpg', 'Code Canvas visual editor: an imported HTML section being edited inside the Wix dashboard'),
  'app-cc-live': app('app-code-canvas-live.jpg', 'A Code Canvas section shown live on a site, on desktop and on a phone'),
  'app-cc-client': app('app-code-canvas-client.jpg', 'Code Canvas Client mode: the developer locks an element while the client edits text, images and links'),
  'app-cc-cms': app('app-code-canvas-cms.jpg', 'Code Canvas CMS panel: choosing a card, mapping it to a collection and previewing the content'),
  'app-cc-video': {
    ...app('app-code-canvas-video.jpg', 'Code Canvas demo video: AI HTML into Wix, no iframe'),
    aspect: '16:9',
    recommendedSize: '1280 × 720 px',
  },
  'app-cg-listing': app('app-collectiongrid-listing.jpg', 'CollectionGrid: a CMS collection opened as a spreadsheet, with one edited cell highlighted before saving'),
};

function launch(file: string, alt: string): ImageEntry {
  return {
    description: 'Illustrative website design (launch edition)',
    pages: ['Home (16:10 crop)', 'Work (4:3 crop)'],
    aspect: '4:3 (also cropped to 16:10 on Home)',
    recommendedSize: '1600 × 1200 px',
    essential: true,
    sizes: PROJECT_SIZES,
    file,
    alt,
  };
}

function icon(file: string, alt: string): ImageEntry {
  return { description: alt, pages: ['Home', 'Apps'], aspect: '1:1', recommendedSize: '256 × 256 px', essential: true, sizes: '64px', file, alt };
}

function app(file: string, alt: string): ImageEntry {
  return {
    description: 'App screenshot',
    pages: ['Home', 'Apps'],
    aspect: '4:3',
    recommendedSize: '1600 × 1200 px',
    essential: true,
    sizes: '(min-width: 1360px) 640px, (min-width: 760px) 50vw, 100vw',
    file,
    alt,
  };
}

/** True when a real image file is registered for this slot. Used to leave out optional photos entirely. */
export function hasImage(id: string): boolean {
  return Boolean(IMAGES[id]?.file);
}
