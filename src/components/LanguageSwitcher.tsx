import i18n from "i18next";
import { useEffect } from "react";

export default function LanguageSwitcher() {
  const currentLanguage = i18n.language;

  useEffect(() => {
    if (currentLanguage === "en") {
      document.documentElement.lang = "en";
    } else if (currentLanguage === "fr") {
      document.documentElement.lang = "fr";
    }
  }, [currentLanguage]);

  return (
    <div className="flex items-center gap-x-2">
      {currentLanguage === "en" && (
        <button
          className="flex items-center gap-x-1"
          onClick={() => i18n.changeLanguage("fr")}
        >
          <span>FR</span>
        </button>
      )}
      {currentLanguage === "fr" && (
        <button
          className="flex items-center gap-x-1"
          onClick={() => i18n.changeLanguage("en")}
        >
          <span>EN</span>
        </button>
      )}
    </div>
  );
}