import { translate } from './i18n.js?v=993dbe185d8b';

const dialog = document.querySelector('#wechat-dialog');
const openButton = document.querySelector('#wechat-open');
const emailLink = document.querySelector('#email-link');

function labels() {
  openButton.title = translate('wechat');
  openButton.setAttribute('aria-label', translate('wechat'));
  const emailLabel = translate('email') + ': ' + emailLink.getAttribute('href').slice(7);
  emailLink.title = emailLabel;
  emailLink.setAttribute('aria-label', emailLabel);
  document.querySelector('.keys').setAttribute('aria-label', translate('contact'));
  document.querySelector('#wechat-close').setAttribute('aria-label', translate('closeContact'));
  document.querySelector('#wechat-qr').alt = translate('wechat') + ' QR';
  dialog.dir = document.documentElement.lang === 'he' ? 'rtl' : 'ltr';
}
labels();
addEventListener('site-language-change', labels);

openButton.addEventListener('click', () => {
  dialog.showModal();
  document.documentElement.classList.add('contact-open');
});
dialog.addEventListener('close', () => {
  document.documentElement.classList.remove('contact-open');
});
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right ||
      event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
