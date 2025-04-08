import LOCALES_JSON from './locales.json';

export const getLocales = (lng: 'pt' | 'en') => {
  const locales = LOCALES_JSON as { [key: string]: { pt: string; en: string } };

  return {
    translation: Object.keys(locales).reduce((acc, val) => {
      return Object.assign(acc, {
        [val]: locales[val][lng],
      });
    }, {}),
  };
};
