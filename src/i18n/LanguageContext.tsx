"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { dictionaries, Language, Dictionary } from './dictionaries';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>('es');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Load saved language from local storage on mount
        const saved = localStorage.getItem('site_language') as Language;
        if (saved && ['es', 'en', 'pt'].includes(saved)) {
            setLanguageState(saved);
        }
        setMounted(true);
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('site_language', lang);
    };

    const t = dictionaries[language];

    // Prevent hydration mismatch by initially rendering without localized content if necessary
    // or just render it; since we default to 'es', it's fine for statically exported sites.
    if (!mounted) {
        return <LanguageContext.Provider value={{ language: 'es', setLanguage, t: dictionaries['es'] }}>
            <div style={{ visibility: 'hidden' }}>{children}</div>
        </LanguageContext.Provider>
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
