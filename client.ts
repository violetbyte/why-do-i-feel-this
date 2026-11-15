// Small shared browser helpers. Everything stays on the visitor's device.

const KEY = 'wdft-saved'; // same key as the first version, so old saves carry over

export function getSaved(): string[] {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; }
}
export function setSaved(list: string[]) {
  try { localStorage.setItem(KEY, JSON.stringify(list)); } catch {}
  updateSavedCount();
  document.dispatchEvent(new CustomEvent('saved-change'));
}
export function toggleSaved(id: string): boolean {
  const s = getSaved();
  const on = !s.includes(id);
  setSaved(on ? [...s, id] : s.filter((x) => x !== id));
  return on;
}
function updateSavedCount() {
  const el = document.getElementById('savedCount');
  if (el) el.textContent = String(getSaved().length);
}

let toastTimer: number | undefined;
export function toast(msg: string) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('on');
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => t.classList.remove('on'), 2000);
}

export const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Run a DOM update inside a same-page view transition when the browser supports it. */
export function softly(update: () => void) {
  const d = document as Document & { startViewTransition?: (cb: () => void) => unknown };
  if (d.startViewTransition && !reducedMotion()) d.startViewTransition(update);
  else update();
}

export function initChrome() {
  const root = document.documentElement;
  const mode = document.getElementById('mode');
  const tc = document.getElementById('tc') as HTMLMetaElement | null;
  mode?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    if (tc) tc.content = next === 'dark' ? '#0f1122' : '#faf6f0';
    try { localStorage.setItem('wdft-mode', next); } catch {}
  });

  updateSavedCount();

  const header = document.querySelector('.site-header');
  const onScroll = () => header?.classList.toggle('scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
}
