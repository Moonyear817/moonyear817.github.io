import { translate } from './i18n.js?v=475a0d0fea66';

const root = document.documentElement;
const button = document.querySelector('#theme-toggle');
const system = matchMedia('(prefers-color-scheme: dark)');
let preferred = null;
try {
  const saved = localStorage.getItem('red-sea-theme');
  if (saved === 'dark' || saved === 'light') preferred = saved;
} catch {}

export const isNight = () => root.dataset.theme === 'dark';

function labels() {
  const label = translate(isNight() ? 'themeLight' : 'themeDark');
  button.title = label;
  button.setAttribute('aria-label', label);
  button.setAttribute('aria-pressed', String(isNight()));
}
function apply(theme) {
  root.dataset.theme = theme;
  labels();
  dispatchEvent(new Event('site-theme-change'));
}

apply(preferred || (system.matches ? 'dark' : 'light'));
button.addEventListener('click', () => {
  preferred = isNight() ? 'light' : 'dark';
  try { localStorage.setItem('red-sea-theme', preferred); } catch {}
  apply(preferred);
});
system.addEventListener('change', () => {
  if (!preferred) apply(system.matches ? 'dark' : 'light');
});
addEventListener('site-language-change', labels);
