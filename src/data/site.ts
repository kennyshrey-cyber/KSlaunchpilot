export const SITE = {
  name: 'KS Launchpilot',
  tagline: 'Website design, development & digital marketing',
  email: 'hello@kslaunchpilot.com',
  lang: 'en',
  /** Shown in the footer. */
  copyrightYear: 2026,
} as const;

export interface NavItem {
  label: string;
  href: string;
  /** Path prefixes that mark this item as the current section. */
  match: (path: string) => boolean;
}

export const NAV: NavItem[] = [
  { label: 'Home', href: '/', match: (p) => p === '/' },
  { label: 'Services', href: '/services/', match: (p) => p.startsWith('/services') },
  { label: 'Work', href: '/work/', match: (p) => p.startsWith('/work') },
  { label: 'About', href: '/about/', match: (p) => p.startsWith('/about') },
  { label: 'Contact', href: '/contact/', match: (p) => p.startsWith('/contact') },
];

/** Page metadata. Titles are from the Claude Design source; descriptions are written from each page's own copy. */
export const PAGES = {
  home: {
    title: 'KS Launchpilot | Website design, development & digital marketing',
    description:
      'KS Launchpilot is a two-person digital studio combining website design, development and digital marketing for businesses ready to launch, rebuild or improve online.',
  },
  services: {
    title: 'Services | KS Launchpilot',
    description:
      'Website strategy, UX and design, development, CMS and custom functionality, and digital marketing. From first structure to final launch, we handle the website from start to finish.',
  },
  work: {
    title: 'Selected work | KS Launchpilot',
    description:
      'Websites KS Launchpilot has designed and built across hospitality, wellness, real estate and platform projects.',
  },
  about: {
    title: 'About | KS Launchpilot',
    description:
      'KS Launchpilot is a two-person digital studio combining marketing strategy with website design and development. Meet Shrey and Kenny.',
  },
  caseStudyFfjn: {
    title: 'Felon Friendly Jobs Now | KS Launchpilot',
    description:
      'How KS Launchpilot planned, designed and developed Felon Friendly Jobs Now, a multi-category jobs and services directory platform.',
  },
  contact: {
    title: 'Start your project | KS Launchpilot',
    description:
      "Tell KS Launchpilot what you need and when you'd like to launch. We'll reply to arrange a short call.",
  },
  contactThanks: {
    title: 'Thank you | KS Launchpilot',
    description: "Thanks. We've got your project details.",
  },
  privacy: {
    title: 'Privacy policy | KS Launchpilot',
    description: 'Privacy policy for the KS Launchpilot website.',
  },
  notFound: {
    title: 'Page not found | KS Launchpilot',
    description: 'The page you were looking for could not be found.',
  },
} as const;
