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
};
