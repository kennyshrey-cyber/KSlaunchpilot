/**
 * Site-wide behaviour, replacing the Claude Design runtime (React + Babel from unpkg):
 * mobile menu, sticky mobile call to action and scroll reveal.
 * Content is fully visible without JavaScript; these are progressive enhancements.
 */
const MOBILE = window.matchMedia('(max-width: 859.98px)');
const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)');

/* ---------- Mobile menu ---------- */
const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
const menu = document.getElementById('mobile-menu');
const menuLabel = toggle?.querySelector<HTMLElement>('[data-menu-label]');

function setMenu(open: boolean, returnFocus = false): void {
  if (!toggle || !menu) return;
  toggle.setAttribute('aria-expanded', String(open));
  menu.hidden = !open;
  if (menuLabel) menuLabel.textContent = open ? 'Close menu' : 'Open menu';
  document.documentElement.style.overflow = open ? 'hidden' : '';
  if (!open && returnFocus) toggle.focus();
  updateSticky();
}

function menuOpen(): boolean {
  return toggle?.getAttribute('aria-expanded') === 'true';
}

toggle?.addEventListener('click', () => setMenu(!menuOpen()));
menu?.addEventListener('click', (e) => {
  if ((e.target as HTMLElement).closest('a')) setMenu(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuOpen()) setMenu(false, true);
});
document.addEventListener('click', (e) => {
  if (!menuOpen()) return;
  const t = e.target as Node;
  if (!menu?.contains(t) && !toggle?.contains(t)) setMenu(false);
});
MOBILE.addEventListener('change', (e) => {
  if (!e.matches && menuOpen()) setMenu(false);
  updateSticky();
});

/* ---------- Sticky mobile CTA (design: below 860px, after 520px of scroll) ---------- */
const sticky = document.querySelector<HTMLElement>('[data-sticky-cta]');

function updateSticky(): void {
  if (!sticky) return;
  sticky.hidden = !(MOBILE.matches && window.scrollY > 520 && !menuOpen());
}
window.addEventListener('scroll', updateSticky, { passive: true });
updateSticky();

/* ---------- Scroll reveal (design: fade up 14px, 0.6s) ---------- */
const revealEls = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

function show(el: HTMLElement): void {
  el.style.opacity = '1';
  el.style.transform = 'none';
}

if (!REDUCED_MOTION.matches && 'IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          show(entry.target as HTMLElement);
          io.unobserve(entry.target);
        }
      }),
    { threshold: 0.08 },
  );
  revealEls.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    io.observe(el);
    // Keyboard users tabbing into a hidden block must see it immediately.
    el.addEventListener('focusin', () => {
      show(el);
      io.unobserve(el);
    });
  });
}
