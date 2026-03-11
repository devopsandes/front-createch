"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { dictionaries, Language, Dictionary } from './dictionaries';
import { LoadingScreen } from '../app/components/LoadingScreen';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Dictionary;
    isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>('es');
    const [mounted, setMounted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Load saved language from local storage on mount
        const saved = localStorage.getItem('site_language') as Language;
        if (saved && ['es', 'en', 'pt'].includes(saved)) {
            setLanguageState(saved);
        }
        setMounted(true);
    }, []);

    const setLanguage = (lang: Language) => {
        if (lang === language) return;
        
        setIsLoading(true);
        // Delay the actual language switch slightly to ensure the loading screen is visible
        setTimeout(() => {
            setLanguageState(lang);
            localStorage.setItem('site_language', lang);
            
            // Keep loading for a bit more to show the animation
            setTimeout(() => {
                setIsLoading(false);
            }, 1200);
        }, 300);
    };

    const t = dictionaries[language];

    // Prevent hydration mismatch
    if (!mounted) {
        return <LanguageContext.Provider value={{ language: 'es', setLanguage, t: dictionaries['es'], isLoading: false }}>
            <div style={{ visibility: 'hidden' }}>{children}</div>
        </LanguageContext.Provider>
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, isLoading }}>
            {isLoading && <LoadingScreen />}
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
