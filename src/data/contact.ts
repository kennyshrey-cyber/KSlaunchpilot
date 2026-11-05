/** Contact form options, exactly as in the Claude Design contact page. */
export const NEEDS = [
  'New Website',
  'Website Redesign',
  'Website Development',
  'CMS / Custom Functionality',
  'Website + Marketing',
  'Digital Marketing',
  'Other',
] as const;

export const TIMINGS = ['ASAP', 'Within 2–4 weeks', 'Within 1–2 months', 'Flexible', 'Not sure yet'] as const;

export const BUDGETS = ['Under $2,000', '$2,000–5,000', '$5,000–10,000', '$10,000+', 'Not sure yet'] as const;

/**
 * Form delivery.
 * - "netlify": Netlify Forms (default on Netlify via netlify.toml). Submissions appear in the Netlify
 *   dashboard and can be emailed to you from there.
 * - "formspree": set PUBLIC_FORM_ENDPOINT to your Formspree form URL.
 * With no provider configured the form never pretends to succeed: it shows an error with the email address.
 */
export const FORM_PROVIDER = (import.meta.env.PUBLIC_FORM_PROVIDER ?? '').trim().toLowerCase();
export const FORM_ENDPOINT = (import.meta.env.PUBLIC_FORM_ENDPOINT ?? '').trim();
export const FORM_NAME = 'project-enquiry';
export const THANKS_PATH = '/contact/thanks/';
