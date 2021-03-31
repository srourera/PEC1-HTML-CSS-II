import * as i18n from 'vanilla-i18n';
import catalan from '../locales/ca.json';
import spanish from '../locales/es.json';
import english from '../locales/en.json';

i18n.setTranslate(catalan, 'ca');
i18n.setTranslate(spanish, 'es');
i18n.setTranslate(english, 'en');

export default () => {
  const translatedElements = document.querySelectorAll('[data-i18n]');
  translatedElements.forEach((element) => {
    const key = element.dataset.i18n;
    element.innerHTML = key.translate('ca');
  });
};
