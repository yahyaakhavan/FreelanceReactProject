import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import fa from "./locales/fa.json";

// Get the saved language from localStorage or default to Persian (fa)
const savedLanguage = localStorage.getItem("language") || "fa";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fa: { translation: fa }
    },
    lng: savedLanguage, // Use saved language or default to fa
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
