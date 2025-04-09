import brazilFlag from '@/assets/flags/brazil.svg';
import usaFlag from '@/assets/flags/united-states.svg';
import LOCALES_JSON from './locales.json';

export const getLocales = (lng: 'br' | 'en') => {
  const locales = LOCALES_JSON as { [key: string]: { br: string; en: string } };

  return {
    translation: Object.keys(locales).reduce((acc, val) => {
      return Object.assign(acc, {
        [val]: locales[val][lng],
      });
    }, {}),
  };
};

export enum AvailableLanguagesEnum {
  BrazilianPortuguese = 'br',
  English = 'en',
}

export const availableLanguagesInfo = [
  {
    code: AvailableLanguagesEnum.BrazilianPortuguese,
    flag: brazilFlag,
    country: 'Brazil',
    description: 'Brazilian-Portuguese',
    nativeDescription: 'Português do Brasil',
  },
  {
    code: AvailableLanguagesEnum.English,
    flag: usaFlag,
    country: 'United States',
    description: 'English',
    nativeDescription: 'English',
  },
];
