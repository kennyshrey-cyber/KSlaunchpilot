/**
 * Project information, taken from the Claude Design source (Launchpilot Home + Launchpilot Work).
 *
 * - `caseStudy`: internal case-study path. Only Felon Friendly Jobs Now has one for launch.
 * - `url`: the live project website. Leave null until a verified URL is supplied.
 *   Cards with neither a case study nor a URL are rendered as non-clickable.
 * - `platform`: shown on the homepage cards. The design said "To confirm", so it stays null
 *   (and the row is hidden) until the real platform is supplied.
 */
export interface Project {
  name: string;
  imageId: string;
  /** Work page subtitle. */
  summary: string;
  /** Homepage "Industry" row. */
  industry?: string;
  /** Homepage "Work" row. */
  work?: string;
  platform: string | null;
  caseStudy: string | null;
  url: string | null;
}

export const PROJECTS: Project[] = [
  {
    name: 'Baan Pufa Resort',
    imageId: 'lp-w-baanpufa',
    summary: 'Hospitality · Resort website',
    industry: 'Hospitality',
    work: 'Website design & development',
    platform: null,
    caseStudy: null,
    url: null,
  },
  {
    name: 'Zenida Wellbeing',
    imageId: 'lp-w-zenida',
    summary: 'Wellness · Business website',
    industry: 'Wellness',
    work: 'Website design & development',
    platform: null,
    caseStudy: null,
    url: null,
  },
  {
    name: 'Felon Friendly Jobs Now',
    imageId: 'lp-w-ffjn',
    summary: 'Jobs & services directory · Custom functionality',
    industry: 'Jobs & services directory',
    work: 'Platform design, CMS & custom functionality',
    platform: null,
    caseStudy: '/work/felon-friendly-jobs-now/',
    url: null,
  },
  { name: 'Carmine Realty', imageId: 'lp-w-carmine', summary: 'Real estate · Business website', platform: null, caseStudy: null, url: null },
  { name: 'Hariharalaya', imageId: 'lp-w-harihara', summary: 'Retreat · Hospitality website', platform: null, caseStudy: null, url: null },
  { name: 'Monte Cielo', imageId: 'lp-w-montecielo', summary: 'Website project', platform: null, caseStudy: null, url: null },
  { name: 'Vista Montego Bay', imageId: 'lp-w-vista', summary: 'Website project', platform: null, caseStudy: null, url: null },
  { name: 'Retreat Guru', imageId: 'lp-w-retreatguru', summary: 'Retreats · Website project', platform: null, caseStudy: null, url: null },
  { name: 'Adrenalynx', imageId: 'lp-w-adrenalynx', summary: 'Website project', platform: null, caseStudy: null, url: null },
];

/** The three projects featured on the homepage, in design order. */
export const FEATURED = ['Baan Pufa Resort', 'Zenida Wellbeing', 'Felon Friendly Jobs Now'].map(
  (n) => PROJECTS.find((p) => p.name === n)!,
);
