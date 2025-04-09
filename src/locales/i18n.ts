import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18Resources } from './i18n-resources';

enum AvailableLanguages {
  BrazilianPortuguese = 'br',
  English = 'en',
}

i18n.use(initReactI18next).init({
  debug: true,
  lng: AvailableLanguages.BrazilianPortuguese,
  resources: I18Resources,
});
