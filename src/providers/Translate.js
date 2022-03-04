import trTranslation from '../assets/i18n/tr.json';
import enTranslation from '../assets/i18n/en.json';

const has = Object.prototype.hasOwnProperty;

let localization = trTranslation;

export const setLocalization = (localizationName) => {
  switch (localizationName) {
    case 'tr':
      localization = trTranslation;
      return;

    case 'en':
      localization = enTranslation;
      return;

    default:
      console.log(`ERROR - ${localizationName} not found translate library`);
  }
};

const translate = (value) => {
  if (has.call(localization, value)) {
    return localization[value];
  }

  return value;
};

export default translate;
