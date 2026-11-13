import { locales } from './locales.js';

const root = document.documentElement;
const reader = document.querySelector('#reader');
const text = reader.querySelector('.text');
const trigger = document.querySelector('#language-toggle');
const list = document.querySelector('#language-list');
const storageKey = 'red-sea-language';
let language = 'zh';
try {
  const saved = localStorage.getItem(storageKey);
  if (locales[saved]) language = saved;
} catch {}

export const translate = key => locales[language][key];
export const currentLanguage = () => language;

for (const [code, item] of Object.entries(locales)) {
  const button = document.createElement('button');
  button.type = 'button';
  button.dataset.language = code;
  button.lang = item.locale;
  button.dir = code === 'he' ? 'rtl' : 'ltr';
  button.textContent = item.name;
  const row = document.createElement('li');
  row.append(button);
  list.append(row);
}

function menu(open, focus = false) {
  list.hidden = !open;
  trigger.setAttribute('aria-expanded', String(open));
  if (open) list.querySelector('[aria-current]')?.focus();
  else if (focus) trigger.focus();
}

function applyLanguage() {
  const item = locales[language];
  root.lang = item.locale;
  // Keep the window positions; each content area follows its script's direction.
  document.querySelector('#desk').dir = language === 'he' ? 'rtl' : 'ltr';
  text.lang = item.locale;
  text.dir = language === 'he' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(node => {
    node.textContent = node.dataset.i18n === 'articleTitle'
      ? (language === 'zh' ? '启示录 · 新天新地' : item.title)
      : item[node.dataset.i18n];
  });
  trigger.title = item.language;
  trigger.setAttribute('aria-label', item.language);
  list.setAttribute('aria-label', item.language);
  for (const button of list.querySelectorAll('button')) {
    if (button.dataset.language === language) button.setAttribute('aria-current', 'true');
    else button.removeAttribute('aria-current');
  }
  document.querySelector('#close').setAttribute('aria-label', item.back);
  const progress = reader.scrollTop / Math.max(1, reader.scrollHeight - reader.clientHeight);
  const title = document.createElement('h1');
  title.id = 'r-title';
  title.textContent = item.title;
  const edition = document.createElement('p');
  edition.className = 'src';
  edition.textContent = item.edition;
  const nodes = [title, edition];
  let index = 0;
  for (const [chapter, verses] of [[21, [1, 2]], [22, [1, 2, 5]]]) {
    const heading = document.createElement('h2');
    heading.textContent = item.chapter.replace('{n}', chapter);
    const section = document.createElement('section');
    for (const verse of verses) {
      const paragraph = document.createElement('p');
      const reference = document.createElement('b');
      reference.dir = 'ltr';
      reference.textContent = chapter + ':' + verse;
      paragraph.append(reference, '　' + item.verses[index++]);
      section.append(paragraph);
    }
    nodes.push(heading, section);
  }
  text.replaceChildren(...nodes);
  reader.scrollTop = progress * Math.max(0, reader.scrollHeight - reader.clientHeight);
  dispatchEvent(new Event('site-language-change'));
}

trigger.addEventListener('click', () => menu(list.hidden));
list.addEventListener('click', event => {
  const button = event.target.closest('button[data-language]');
  if (!button) return;
  language = button.dataset.language;
  try { localStorage.setItem(storageKey, language); } catch {}
  applyLanguage();
  menu(false, true);
});
list.addEventListener('keydown', event => {
  const buttons = [...list.querySelectorAll('button')];
  const index = buttons.indexOf(document.activeElement);
  let next;
  if (event.key === 'ArrowDown') next = (index + 1) % buttons.length;
  if (event.key === 'ArrowUp') next = (index + buttons.length - 1) % buttons.length;
  if (event.key === 'Home') next = 0;
  if (event.key === 'End') next = buttons.length - 1;
  if (next !== undefined) {
    event.preventDefault();
    buttons[next].focus();
  }
});
document.addEventListener('pointerdown', event => {
  if (!event.target.closest('.language-picker')) menu(false);
});
addEventListener('keydown', event => {
  if (event.key === 'Escape' && !list.hidden) {
    event.stopImmediatePropagation();
    menu(false, true);
  }
}, { capture: true });

export function initLanguage() { applyLanguage(); }
