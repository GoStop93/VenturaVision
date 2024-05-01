import { use } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

export const i18n = use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru'],
    ns: ['home'],
    defaultNS: 'home',
    backend: {
      loadPath: '/locales/{{ns}}/{{lng}}.json',
    },
  });
