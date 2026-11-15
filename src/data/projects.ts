/**
 * Project information for the Work page and the homepage.
 *
 * Two lists, chosen by the site edition (src/data/edition.ts):
 * - LAUNCH_PROJECTS: anonymised project types with illustrative visuals. No client names.
 * - FULL_PROJECTS: the named client projects from the Claude Design source. Only built when
 *   PUBLIC_SITE_EDITION=full, once client permission and real screenshots are in place.
 *
 * - `caseStudy`: internal case-study path (see src/data/caseStudies.ts).
 * - `url`: the live project website. Leave null until a verified URL is supplied.
 *   Cards with neither a case study nor a URL are rendered as non-clickable.
 * - `platform`: shown on the homepage cards. Hidden until a real value is supplied.
 */
import { IS_LAUNCH } from './edition';

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

const LAUNCH_PROJECTS: Project[] = [
  {
    name: 'Boutique resort website',
    imageId: 'lp-l-resort',
    summary: 'Hospitality · Resort website',
    industry: 'Hospitality',
    work: 'Website design & development',
    platform: null,
    caseStudy: null,
    url: null,
  },
  {
    name: 'Wellness studio website',
    imageId: 'lp-l-wellness',
    summary: 'Wellness · Business website',
    industry: 'Wellness',
    work: 'Website design & development',
    platform: null,
    caseStudy: null,
    url: null,
  },
  {
    name: 'Jobs & services directory',
    imageId: 'lp-l-directory',
    summary: 'Directory platform · Custom functionality',
    industry: 'Jobs & services directory',
    work: 'Platform design, CMS & custom functionality',
    platform: null,
    caseStudy: '/work/jobs-services-directory/',
    url: null,
  },
  {
    name: 'Real estate agency website',
    imageId: 'lp-l-realty',
    summary: 'Real estate · Business website',
    platform: null,
    caseStudy: null,
    url: null,
  },
  {
    name: 'Retreat centre website',
    imageId: 'lp-l-retreat',
    summary: 'Retreat · Hospitality website',
    platform: null,
    caseStudy: null,
    url: null,
  },
];

const FULL_PROJECTS: Project[] = [
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

export const PROJECTS: Project[] = IS_LAUNCH ? LAUNCH_PROJECTS : FULL_PROJECTS;

/** The three projects featured on the homepage: the first three of the active list, in design order. */
export const FEATURED: Project[] = PROJECTS.slice(0, 3);
