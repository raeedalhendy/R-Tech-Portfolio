import { useContext } from "react";
import { LangContext } from "../i18n/LangContext";

export default function LanguageToggle() {
  const { lang, setLang } = useContext(LangContext);
  const isAr = lang === "ar";

  return (
    <button
      onClick={() => setLang(isAr ? "en" : "ar")}
      className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white/80 hover:bg-white/10"
      aria-label="Toggle language"
    >
      {isAr ? "English" : "العربية"}
    </button>
  );
}
