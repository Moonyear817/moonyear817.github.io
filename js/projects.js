import { projects } from './project-data.js';
import { currentLanguage, translate } from './i18n.js';

const list = document.querySelector('.project-list');
const reader = document.querySelector('#project-reader');
const content = reader.querySelector('.project-content');
const close = document.querySelector('#project-close');
let active = null;
let returnScroll = 0;

// Project notes are authored in Chinese and English.
const contentLanguage = () => currentLanguage() === 'zh' ? 'zh' : 'en';

function renderList() {
  const language = contentLanguage();
  const rows = projects.map(project => {
    const row = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#project/' + project.slug;
    link.lang = language;
    link.dir = 'ltr';
    if (project.thumb) {
      const image = document.createElement('img');
      image.src = project.thumb;
      image.alt = '';
      image.width = 104;
      image.height = 72;
      image.loading = 'lazy';
      link.append(image);
    } else link.classList.add('text-project');
    const title = document.createElement('span');
    title.textContent = project.title[language];
    link.append(title);
    row.append(link);
    return row;
  });
  list.replaceChildren(...rows);
}

function createFigure(image, language, loading = 'lazy') {
  const figure = document.createElement('figure');
  const link = document.createElement('a');
  link.href = image.src;
  link.target = '_blank';
  link.rel = 'noopener';
  const picture = document.createElement('img');
  picture.src = image.src;
  picture.alt = image.caption[language];
  picture.loading = loading;
  picture.decoding = 'async';
  const caption = document.createElement('figcaption');
  caption.textContent = image.caption[language];
  link.append(picture);
  figure.append(link, caption);
  return figure;
}

function renderProject(project) {
  const language = contentLanguage();
  content.lang = language;
  content.dir = 'ltr';
  close.setAttribute('aria-label', translate('back'));
  document.querySelector('#project-title').textContent = project.title[language];
  reader.querySelector('.project-description').textContent = project.description[language];

  let repository = content.querySelector('.project-repository');
  if (!repository) {
    repository = document.createElement('a');
    repository.className = 'project-repository';
    repository.target = '_blank';
    repository.rel = 'noopener noreferrer';
    content.querySelector('.project-description').after(repository);
  }
  repository.hidden = !project.repository;
  if (project.repository) {
    repository.href = project.repository;
    repository.textContent = language === 'zh' ? '在 GitHub 查看源码 ↗' : 'View source on GitHub ↗';
  }

  const sections = content.querySelector('.project-sections');
  sections.setAttribute('aria-label', language === 'zh' ? '项目内容' : 'Project content');
  sections.querySelector('[data-project-scroll=".project-gallery"]').hidden = !project.gallery.length;
  sections.querySelector('[data-project-scroll=".project-gallery"]').textContent =
    language === 'zh' ? '成品展示' : 'Gallery';
  sections.querySelector('[data-project-scroll=".project-process"]').textContent =
    language === 'zh' ? '制作过程' : 'Making of';

  const gallery = reader.querySelector('.project-gallery');
  gallery.hidden = !project.gallery.length;
  gallery.dataset.layout = 'landscape';
  gallery.replaceChildren(...project.gallery.map((image, index) =>
    createFigure(image, language, index === 0 ? 'eager' : 'lazy')
  ));

  content.querySelector('#project-process-title').textContent =
    language === 'zh' ? '制作过程' : 'Making of';
  content.querySelector('.project-tools').textContent = project.process.tools;
  content.querySelector('.project-process-steps').replaceChildren(
    ...project.process.steps.map(step => {
      const section = document.createElement('section');
      section.className = 'process-step';
      const heading = document.createElement('h3');
      heading.textContent = step.title[language];
      const body = document.createElement('p');
      body.textContent = step.body[language];
      section.append(heading, body);
      if (step.image) section.append(createFigure(step.image, language));
      return section;
    })
  );

  const credit = reader.querySelector('.project-credit');
  credit.replaceChildren(project.credit[language]);
  for (const source of project.sources || []) {
    const link = document.createElement('a');
    link.href = source.url;
    link.textContent = source.label;
    link.target = '_blank';
    link.rel = 'noopener';
    credit.append(' ', link);
  }
  credit.hidden = !credit.textContent;
}

content.querySelector('.project-sections').addEventListener('click', event => {
  const button = event.target.closest('[data-project-scroll]');
  if (!button) return;
  content.querySelector(button.dataset.projectScroll).scrollIntoView({ block: 'start' });
});

function route() {
  const slug = location.hash.startsWith('#project/') ? location.hash.slice(9) : null;
  const project = projects.find(item => item.slug === slug);
  if (project) {
    if (reader.hidden) returnScroll = scrollY;
    if (active !== project) {
      renderProject(project);
      reader.scrollTop = 0;
      active = project;
    }
    reader.hidden = false;
    document.documentElement.classList.add('viewing-project');
    close.focus({ preventScroll: true });
  } else if (!reader.hidden) {
    reader.hidden = true;
    document.documentElement.classList.remove('viewing-project');
    const link = list.querySelector('a[href="#project/' + active.slug + '"]');
    active = null;
    if (returnScroll > 0) scrollTo(0, returnScroll);
    else document.querySelector('#projects').scrollIntoView();
    link?.focus({ preventScroll: true });
  }
}

list.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  history.pushState({ fromProjects: true }, '', link.hash);
  route();
});
close.addEventListener('click', event => {
  event.preventDefault();
  if (history.state?.fromProjects) history.back();
  else {
    history.replaceState(null, '', '#projects');
    route();
  }
});
addEventListener('keydown', event => {
  if (event.key === 'Escape' && !reader.hidden && !document.querySelector('dialog[open]')) close.click();
});
addEventListener('popstate', route);
addEventListener('hashchange', route);
addEventListener('site-language-change', () => {
  renderList();
  close.setAttribute('aria-label', translate('back'));
  if (active) {
    const progress = reader.scrollTop / Math.max(1, reader.scrollHeight - reader.clientHeight);
    renderProject(active);
    reader.scrollTop = progress * Math.max(0, reader.scrollHeight - reader.clientHeight);
  }
});

renderList();
route();
