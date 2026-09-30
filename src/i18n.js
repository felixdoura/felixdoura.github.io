import React, { createContext, useContext, useEffect, useState } from "react";
import { ui } from "./data/ui";

export const LANGS = ["en", "es"];
const STORAGE_KEY = "lang";

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch {}
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  }, [lang]);

  // Picks the current language from a { en, es } value; plain strings pass through.
  const tr = (value) =>
    value && typeof value === "object" && !Array.isArray(value) ? value[lang] ?? value.en : value;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: ui[lang], tr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
