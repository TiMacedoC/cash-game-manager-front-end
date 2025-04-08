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
