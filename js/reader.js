import { createGlyphRain } from './glyph-rain.js?v=f6b85e31c01d';
import { initLanguage, renderArticle, translate } from './i18n.js?v=f6b85e31c01d';
import { articles } from './article-data.js?v=f6b85e31c01d';

const reader = document.querySelector('#reader');
const closeLink = document.querySelector('#close');
const pauseButton = document.querySelector('#rain-toggle');
const articleLinks = [...document.querySelectorAll('#articles a[href^="#read/"]')];
const rain = createGlyphRain(
  document.querySelector('#glyph-rain'), reader, reader.querySelector('.text'),
  playing => {
    const label = translate(playing ? 'pause' : 'play');
    pauseButton.dataset.playing = String(playing);
    pauseButton.setAttribute('aria-label', label);
    pauseButton.title = label;
  }
);

// Same aspect-ratio interpolation as yesterday's reader.
function setReaderWidth() {
  const ratio = Math.min(1, Math.max(0, (innerWidth / innerHeight - .8) / .7));
  const eased = ratio * ratio * (3 - 2 * ratio);
  reader.style.setProperty('--reader-width', (1 - eased / 4).toFixed(4));
}
setReaderWidth();
addEventListener('resize', setReaderWidth, { passive: true });

addEventListener('site-language-change', () => {
  const playing = pauseButton.dataset.playing === 'true';
  if (!reader.hidden) {
    rain.close();
    rain.open(playing);
  } else {
    const label = translate('pause');
    pauseButton.title = label;
    pauseButton.setAttribute('aria-label', label);
  }
});
initLanguage();

let returnScroll = 0;
let activeSlug = null;
function route() {
  const slug = location.hash.startsWith('#read/') ? location.hash.slice(6) : null;
  const open = slug === 'revelation' || Object.hasOwn(articles, slug);
  if (open && activeSlug === slug && !reader.hidden) return;
  if (!open && reader.hidden) return;
  if (open) {
    if (reader.hidden) returnScroll = window.scrollY;
    rain.close();
    renderArticle(false);
    activeSlug = slug;
    reader.hidden = false;
    reader.scrollTop = 0;
    document.documentElement.classList.add('reading');
    closeLink.focus({ preventScroll: true });
    rain.open();
  } else {
    const articleLink = articleLinks.find(link => link.hash === '#read/' + activeSlug);
    activeSlug = null;
    rain.close();
    reader.hidden = true;
    document.documentElement.classList.remove('reading');
    window.scrollTo(0, returnScroll);
    if (returnScroll > 0) articleLink?.focus({ preventScroll: true });
  }
}

pauseButton.addEventListener('click', () => rain.toggle());
for (const articleLink of articleLinks) articleLink.addEventListener('click', event => {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  history.pushState({ fromDesk: true }, '', articleLink.hash);
  route();
});
closeLink.addEventListener('click', event => {
  event.preventDefault();
  if (history.state?.fromDesk) {
    history.back();
  } else {
    history.replaceState(null, '', location.pathname + location.search);
    route();
  }
});
addEventListener('popstate', route);
addEventListener('hashchange', route);
addEventListener('keydown', event => {
  if (event.key === 'Escape' && !reader.hidden) closeLink.click();
});
route();
