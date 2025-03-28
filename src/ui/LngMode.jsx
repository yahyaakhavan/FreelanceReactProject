import { useTranslation } from "react-i18next";
import { HiGlobeAlt } from "react-icons/hi";
import i18n from "../i18n";
export default function LngMode() {
  const togglelng = () => {
    const newLanguage = i18n.language === "fa" ? "en" : "fa";
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    console.log(newLanguage);
  };
  return (
    <button
      onClick={() => {
        togglelng();
      }}
    >
      <HiGlobeAlt className="w-5 h-5 text-primary-900" />
    </button>
  );
}
