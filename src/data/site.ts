import { IS_LAUNCH } from './edition';

export const SITE = {
  name: 'KS LaunchPilot',
  tagline: 'Website design, development, digital marketing and apps for Wix sites',
  email: 'kslaunchpilot@gmail.com',
  lang: 'en',
  /** Shown in the footer. */
  copyrightYear: 2026,
} as const;

/** Official KS LaunchPilot profiles. */
export const SOCIALS = [
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@KSLaunchPilot' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/kslaunchpilot/' },
  { id: 'x', label: 'X', href: 'https://x.com/KSLaunchPilot' },
  { id: 'reddit', label: 'Reddit', href: 'https://www.reddit.com/user/KSLaunchPilot/' },
] as const;

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
  { label: 'Apps', href: '/apps/', match: (p) => p.startsWith('/apps') },
  { label: 'About', href: '/about/', match: (p) => p.startsWith('/about') },
  { label: 'Contact', href: '/contact/', match: (p) => p.startsWith('/contact') },
];

/** Page metadata. Titles follow the Claude Design source; descriptions are written from each page's own copy. */
export const PAGES = {
  home: {
    title: 'KS LaunchPilot | Website design, development, marketing & Wix apps',
    description:
      'KS LaunchPilot is a two-person digital studio combining website design, development and digital marketing. We also build apps for Wix sites: Code Canvas and CollectionGrid.',
  },
  services: {
    title: 'Services | KS LaunchPilot',
    description:
      'Website strategy, UX and design, development, CMS and custom functionality, and digital marketing. From first structure to final launch, we handle the website from start to finish.',
  },
  work: {
    title: 'Selected work | KS LaunchPilot',
    description: IS_LAUNCH
      ? 'The kinds of websites KS LaunchPilot has designed and built across hospitality, wellness, real estate and platform projects.'
      : 'Websites KS LaunchPilot has designed and built across hospitality, wellness, real estate and platform projects.',
  },
  apps: {
    title: 'Apps for Wix sites | KS LaunchPilot',
    description:
      'Code Canvas turns HTML and CSS into editable sections. CollectionGrid edits CMS collections like a spreadsheet. Both are available on the Wix App Market.',
  },
  about: {
    title: 'About | KS LaunchPilot',
    description:
      'KS LaunchPilot is a two-person digital studio combining marketing strategy with website design and development. Meet Shrey and Kenny.',
  },
  contact: {
    title: 'Start your project | KS LaunchPilot',
    description:
      "Tell KS LaunchPilot what you need and when you'd like to launch. We'll reply to arrange a short call.",
  },
  contactThanks: {
    title: 'Thank you | KS LaunchPilot',
    description: "Thanks. We've got your project details.",
  },
  privacy: {
    title: 'Privacy | KS LaunchPilot',
    description: 'How the KS LaunchPilot website handles the information you send us.',
  },
  notFound: {
    title: 'Page not found | KS LaunchPilot',
    description: 'The page you were looking for could not be found.',
  },
} as const;
