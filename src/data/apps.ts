/**
 * KS LaunchPilot apps on the Wix App Market.
 * Copy follows each app's approved App Market listing. Do not add claims the listing does not make.
 *
 * `marketUrl`: the app's live App Market page. When null, the buttons are replaced by a short
 * "search the Wix App Market" line, so the site never links to a guessed address.
 */
export interface AppInfo {
  slug: string;
  name: string;
  tagline: string;
  /** One line on which sites the app is for. */
  platform: string;
  summary: string;
  /** Shortest selling points, used on the homepage card. */
  highlights: string[];
  /** Full feature list, used on the Apps page. */
  features: string[];
  pricing: string | null;
  iconId: string;
  /** Main screenshot (4:3). */
  heroImageId: string;
  /** Extra screenshots for the Apps page (4:3). */
  gallery: { imageId: string; caption: string }[];
  marketUrl: string | null;
  helpUrl: string | null;
  /** A guide on this site, linked from the app's section on the Apps page. */
  guide: { href: string; label: string } | null;
  video: { youtubeId: string; title: string; posterId: string } | null;
  /** Brand colours, used for the app's section on the Apps page. */
  theme: { background: string; accent: string; text: string; muted: string; line: string };
}

export const APPS: AppInfo[] = [
  {
    slug: 'code-canvas',
    name: 'Code Canvas',
    tagline: 'Turn HTML and CSS into editable sections',
    platform: 'For Wix Studio and the Wix Classic Editor',
    summary:
      'Paste HTML and CSS from an AI tool or your own editor and get a real, responsive section on your site, with no iframe. Edit it visually, connect CMS cards and hand it over to clients with Client mode.',
    highlights: [
      'Paste AI-generated or hand-written HTML and CSS',
      'Edit text, images and links visually',
      'Hand over safely with Client mode',
    ],
    features: [
      'Embed responsive sections from AI-generated or hand-written HTML and CSS, with no iframe',
      'Edit text, images and links visually, with desktop, tablet and mobile previews',
      'Client mode: clients change content while the layout and locked elements stay protected',
      'Connect a card to a CMS collection to repeat it for each item',
      'Version history, so you can restore an earlier saved version',
    ],
    pricing:
      'Free plan with developer editing and one published design per site. Pro adds unlimited published designs, Client mode, CMS connections and version history.',
    iconId: 'app-cc-icon',
    heroImageId: 'app-cc-editor',
    gallery: [
      { imageId: 'app-cc-live', caption: 'Your section, live and responsive' },
      { imageId: 'app-cc-client', caption: 'Client mode for safe handover' },
      { imageId: 'app-cc-cms', caption: 'Cards connected to the CMS' },
    ],
    marketUrl: 'https://www.wix.com/app-market/e9d03aaf-9878-455e-9388-4347c192f5cc',
    helpUrl: 'https://sites.google.com/view/ks-launchpilot-code-canvas',
    guide: { href: '/guides/add-html-css-to-wix/', label: 'Guide: add your own HTML and CSS to Wix' },
    video: {
      youtubeId: 'tYd537GUe40',
      title: 'Code Canvas demo: paste AI HTML and CSS into Wix, with no iframe',
      posterId: 'app-cc-video',
    },
    theme: { background: '#151C32', accent: '#A79BFF', text: '#FFFFFF', muted: '#C9CEDD', line: 'rgba(201,206,221,0.24)' },
  },
  {
    slug: 'collectiongrid',
    name: 'CollectionGrid',
    tagline: 'Edit your CMS collections like a spreadsheet',
    platform: 'For Wix sites that use the CMS',
    summary:
      'CollectionGrid opens any CMS collection on your site as a fast spreadsheet in your dashboard, so you can fix hundreds of items in minutes. Preview every change, and undo any save.',
    highlights: [
      'Spreadsheet editing for any CMS collection',
      'Find and replace with a live preview',
      'Bulk slug fixer, undo and saved-change history',
    ],
    features: [
      'Spreadsheet editing for any CMS collection: click a cell and type',
      'Copy and paste blocks of cells to and from Google Sheets and Excel',
      'Find and replace across the whole collection, with a preview of each change',
      'Bulk slug fixer for the URL slugs that break dynamic pages',
      'Reference and multi-reference pickers with search',
      'Undo for every edit, plus a saved-change history you can revert',
      'Sort, filter, show or hide columns, and export to CSV',
    ],
    pricing: null,
    iconId: 'app-cg-icon',
    heroImageId: 'app-cg-listing',
    gallery: [],
    marketUrl: null,
    helpUrl: null,
    guide: null,
    video: null,
    theme: { background: '#102D30', accent: '#A8DD63', text: '#F5F7F1', muted: '#C3D2CC', line: 'rgba(195,210,204,0.24)' },
  },
];
