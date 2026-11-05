/**
 * Contact form: validation, `?need=` preselection, deselectable options and real submission.
 * Success is only shown after the form service confirms receipt (HTTP 2xx).
 */
const root = document.querySelector<HTMLElement>('[data-contact]');
const form = root?.querySelector<HTMLFormElement>('form');

if (root && form) {
  const provider = form.dataset.provider ?? 'none';
  const errorBox = form.querySelector<HTMLElement>('[data-form-error]')!;
  const errorText = form.querySelector<HTMLElement>('[data-form-error-text]')!;
  const success = root.querySelector<HTMLElement>('[data-form-success]')!;
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const submitLabel = submit.textContent ?? 'Start My Project';

  // Custom messages replace the browser's bubbles once JavaScript is running.
  form.noValidate = true;

  /* ?need= preselection (links from Home and Services). */
  const need = new URLSearchParams(window.location.search).get('need');
  if (need) {
    const match = Array.from(form.querySelectorAll<HTMLInputElement>('input[name="need"]')).find(
      (r) => r.value.toLowerCase() === need.trim().toLowerCase(),
    );
    if (match) match.checked = true;
  }

  /* Like the design's toggle buttons, a selected option can be clicked again to clear it. */
  form.querySelectorAll<HTMLInputElement>('input[type="radio"]').forEach((radio) => {
    let wasChecked = false;
    const remember = () => (wasChecked = radio.checked);
    radio.addEventListener('pointerdown', remember);
    radio.closest('label')?.addEventListener('pointerdown', remember);
    radio.addEventListener('click', () => {
      if (wasChecked) radio.checked = false;
      wasChecked = false;
    });
  });

  /* URL field: accept "mybusiness.com" by adding the scheme. */
  const urlInput = form.querySelector<HTMLInputElement>('input[name="url"]');
  urlInput?.addEventListener('blur', () => {
    const v = urlInput.value.trim();
    if (v && !/^[a-z][a-z0-9+.-]*:\/\//i.test(v)) urlInput.value = `https://${v}`;
  });

  const fields = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[aria-describedby^="err-"]'));

  function showFieldState(el: HTMLInputElement | HTMLTextAreaElement): boolean {
    const valid = el.checkValidity();
    const msg = document.getElementById(el.getAttribute('aria-describedby')!);
    el.setAttribute('aria-invalid', String(!valid));
    if (msg) msg.hidden = valid;
    return valid;
  }

  fields.forEach((el) =>
    el.addEventListener('input', () => {
      if (el.getAttribute('aria-invalid') === 'true') showFieldState(el);
    }),
  );
  fields.forEach((el) => el.addEventListener('blur', () => el.value && showFieldState(el)));

  function fail(message: string): void {
    errorText.textContent = message;
    errorBox.hidden = false;
    errorBox.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  async function send(): Promise<boolean> {
    const data = new FormData(form!);
    if (provider === 'netlify') {
      const body = new URLSearchParams();
      data.forEach((v, k) => body.append(k, String(v)));
      const res = await fetch(form!.getAttribute('action') || '/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      return res.ok;
    }
    if (provider === 'formspree') {
      const res = await fetch(form!.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      return res.ok;
    }
    return false;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorBox.hidden = true;

    const invalid = fields.filter((el) => !showFieldState(el));
    if (invalid.length) {
      invalid[0].focus();
      return;
    }

    if (provider === 'none') {
      fail("Our online form isn't connected yet, so your details weren't sent.");
      return;
    }

    submit.disabled = true;
    submit.textContent = 'Sending…';
    submit.setAttribute('aria-busy', 'true');
    try {
      if (!(await send())) throw new Error('Form service rejected the submission');
      form.hidden = true;
      success.hidden = false;
      root.scrollIntoView({ block: 'start' });
      window.scrollTo({ top: 0 });
      success.focus({ preventScroll: true });
    } catch {
      fail("Something went wrong and your details weren't sent.");
    } finally {
      submit.disabled = false;
      submit.textContent = submitLabel;
      submit.removeAttribute('aria-busy');
    }
  });
}
