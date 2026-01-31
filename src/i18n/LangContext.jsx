import { createContext, useEffect, useMemo, useState } from "react";
import { i18n } from "./content";

export const LangContext = createContext({
  lang: "en",
  setLang: () => {},
  isAr: false,
  t: i18n.en,
});

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("lang");
    return saved === "ar" ? "ar" : "en";
  });

  const isAr = lang === "ar";
  const t = useMemo(() => i18n[lang] || i18n.en, [lang]);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? "rtl" : "ltr";
  }, [lang, isAr]);

  const value = useMemo(() => ({ lang, setLang, isAr, t }), [lang, isAr, t]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
