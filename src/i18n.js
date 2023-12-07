import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import lang_ua from './localisation/ua/ua.json';
import lang_en from './localisation/en/en.json';

const resources = {
   en: {
      translation: lang_en,
   },
   ua: {
      translation: lang_ua,
   }
};


const localStoreLanuage = localStorage.getItem('lang');

i18n
   .use(initReactI18next)
   .init({
      resources,
      lng: localStoreLanuage,

      interpolation: {
         escapeValue: false
      }
   });

export default i18n;