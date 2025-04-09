import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18Resources } from './i18n-resources';
import { AvailableLanguagesEnum } from './locales';

i18n.use(initReactI18next).init({
  debug: true,
  lng: AvailableLanguagesEnum.BrazilianPortuguese,
  resources: I18Resources,
});
