import { IS_LAUNCH } from './edition';

export const SITE = {
  name: 'KS LaunchPilot',
  tagline: 'Website design, development, digital marketing and apps for Wix sites',
  email: 'kslaunchpilot@gmail.com',
  lang: 'en',
  /** Shown in the footer. */
  copyrightYear: 2026,
  /** Used in structured data only (no street address published). */
  locality: 'Manila',
  region: 'Metro Manila',
  country: 'PH',
  /** Markets served, for structured data. */
  areaServed: ['Philippines', 'Singapore', 'Malaysia', 'Indonesia', 'Thailand', 'Vietnam', 'Southeast Asia', 'United States'],
  xHandle: '@KSLaunchPilot',
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

/**
 * Page metadata (SEO). Targets: Wix web design and development, Wix app/developer audience,
 * WordPress and Wix SEO, digital marketing and conversion work for e-commerce and small businesses.
 * Based in Manila, serving Southeast Asia and the US.
 */
export const PAGES = {
  home: {
    title: 'Wix & WordPress Web Design, SEO and Digital Marketing | KS LaunchPilot',
    description:
      'Manila-based studio building Wix and WordPress websites, SEO and conversion-focused digital marketing for small businesses and e-commerce brands in Southeast Asia and the US. Makers of Wix apps Code Canvas and CollectionGrid.',
  },
  services: {
    title: 'Wix Web Development, WordPress SEO & Digital Marketing Services | KS LaunchPilot',
    description:
      'Website strategy, UX and design, Wix and WordPress development, CMS and custom functionality, SEO and digital marketing that lifts conversion rates for e-commerce stores and small businesses.',
  },
  work: {
    title: 'Website Design & Development Work | KS LaunchPilot',
    description: IS_LAUNCH
      ? 'Websites KS LaunchPilot has designed and built for small businesses, hospitality, wellness, real estate and platform projects across the US and Southeast Asia.'
      : 'Websites KS LaunchPilot has designed and built across hospitality, wellness, real estate and platform projects.',
  },
  apps: {
    title: 'Wix Apps for Developers & Site Owners: Code Canvas, CollectionGrid | KS LaunchPilot',
    description:
      'Wix apps built for Wix developers and site owners. Code Canvas turns HTML and CSS into editable Wix sections. CollectionGrid edits Wix CMS collections like a spreadsheet. On the Wix App Market.',
  },
  about: {
    title: 'About Our Manila Web Design & Digital Marketing Studio | KS LaunchPilot',
    description:
      'KS LaunchPilot is a two-person studio in Manila, Philippines, combining marketing strategy with Wix and WordPress design and development for clients in Southeast Asia and the US. Meet Shrey and Kenny.',
  },
  contact: {
    title: 'Start Your Website or SEO Project | KS LaunchPilot',
    description:
      "Tell KS LaunchPilot what you need: a Wix or WordPress website, SEO or digital marketing. We'll get back to you in a jiffy.",
  },
  contactThanks: {
    title: 'Thank you | KS LaunchPilot',
    description: "Got it. We'll get back to you in a jiffy.",
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
