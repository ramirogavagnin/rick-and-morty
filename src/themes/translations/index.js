import I18n from 'i18n-js';
import en from './en';
import es_AR from './es_AR';

I18n.fallbacks = true;

I18n.translations = {
  en,
  'es-AR': es_AR,
};

export default I18n;
