"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations, type Lang } from "@/data/translations";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof translations)["en"];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    const initial: Lang =
      stored === "es" || stored === "en"
        ? stored
        : navigator.language.toLowerCase().startsWith("es")
          ? "es"
          : "en";
    // Reading the persisted preference here is required to avoid hydration mismatches
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLang(initial);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
