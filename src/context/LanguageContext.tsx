"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations } from "../translations";

type Language = "pt" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations.pt;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<Language>("pt");

    // Load language from localStorage if available
    useEffect(() => {
        const savedLang = localStorage.getItem("nexus_lang") as Language;
        if (savedLang && ["pt", "en"].includes(savedLang)) {
            setLanguageState(savedLang);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("nexus_lang", lang);
    };

    const value = {
        language,
        setLanguage,
        t: translations[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
