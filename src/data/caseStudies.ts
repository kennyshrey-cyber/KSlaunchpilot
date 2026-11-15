/**
 * Case studies, rendered by src/pages/work/[slug].astro.
 * Each one belongs to a site edition, so the launch edition never builds a page that names a client.
 */
import { EDITION, type Edition } from './edition';

export interface CaseStudy {
  edition: Edition;
  slug: string;
  /** Page <title>. */
  title: string;
  description: string;
  /** Page heading. */
  heading: string;
  facts: { label: string; value: string }[];
  images: { main: string; wide: string; tall: string };
  /** Shown under the images when they are illustrative rather than real screenshots. */
  imageNote?: string;
  sections: { heading: string; body: string }[];
  next: { label: string; href: string };
}

const FACTS = [
  { label: 'Industry', value: 'Jobs & services directory' },
  { label: 'Project', value: 'Multi-category directory platform' },
  { label: 'Scope', value: 'Strategy, UX, design, development' },
];

const SECTIONS = [
  {
    heading: 'The Challenge',
    body: 'Bring job listings and service providers across several categories into one searchable platform that is easy to browse and easy to manage.',
  },
  {
    heading: 'The Approach',
    body: 'We mapped each type of user and listing before designing anything, then defined the categories, fields and journeys the platform needed to support.',
  },
  {
    heading: 'Design',
    body: 'A consistent listing layout across categories, with search and filters that stay simple as the directory grows.',
  },
  {
    heading: 'Development',
    body: 'Dynamic listings, search and filtering, with CMS and backend functionality for adding and managing entries.',
  },
  {
    heading: 'Outcome',
    body: 'A launched directory platform, structured so new categories can be added without a redesign.',
  },
];

const ALL: CaseStudy[] = [
  {
    edition: 'launch',
    slug: 'jobs-services-directory',
    title: 'Jobs & services directory | KS LaunchPilot',
    description:
      'How KS LaunchPilot planned, designed and developed a multi-category jobs and services directory platform.',
    heading: 'Jobs & services directory',
    facts: FACTS,
    images: { main: 'lp-l-cs-main', wide: 'lp-l-cs-search', tall: 'lp-l-cs-mobile' },
    imageNote:
      'The client and brand are kept private. The screens above are illustrative and show the structure we designed, not the live site.',
    sections: SECTIONS,
    next: { label: 'All work', href: '/work/' },
  },
  {
    edition: 'full',
    slug: 'felon-friendly-jobs-now',
    title: 'Felon Friendly Jobs Now | KS LaunchPilot',
    description:
      'How KS LaunchPilot planned, designed and developed Felon Friendly Jobs Now, a multi-category jobs and services directory platform.',
    heading: 'Felon Friendly Jobs Now',
    facts: FACTS,
    images: { main: 'lp-cs-main', wide: 'lp-cs-2', tall: 'lp-cs-3' },
    sections: SECTIONS,
    next: { label: 'Baan Pufa Resort', href: '/work/' },
  },
];

export const CASE_STUDIES: CaseStudy[] = ALL.filter((c) => c.edition === EDITION);
