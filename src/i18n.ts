import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18Resources } from './i18n-resources';

i18n.use(initReactI18next).init({
  debug: true,
  lng: 'br',
  resources: I18Resources,
});
