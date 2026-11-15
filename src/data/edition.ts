/**
 * Site edition.
 *
 * - "launch" (default): no client names, no real client screenshots and no team photos. Work is shown as
 *   anonymised project types with illustrative visuals (built in /mockups).
 * - "full": the original version with named client projects, real screenshots and team photos. Switch to it
 *   only once client permission and the real images are in place (see docs/LAUNCH-CHECKLIST.md).
 *
 * Set PUBLIC_SITE_EDITION=full to build the full edition. Anything else builds the launch edition, so a
 * missing or mistyped value can never publish client names by accident.
 */
export type Edition = 'launch' | 'full';

export const EDITION: Edition =
  (import.meta.env.PUBLIC_SITE_EDITION ?? '').trim().toLowerCase() === 'full' ? 'full' : 'launch';

export const IS_LAUNCH = EDITION === 'launch';
