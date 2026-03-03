"use client";

import { Instagram, Facebook, Linkedin } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="w-full flex flex-col md:flex-row justify-between items-center px-6 lg:px-24 py-8 shrink-0 relative z-20">
            {/* Definición del Gradiente para los íconos (Invisible) */}
            <svg width="0" height="0" className="absolute">
                <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop stopColor="#2563eb" offset="0%" /> {/* blue-600 */}
                    <stop stopColor="#a855f7" offset="50%" /> {/* purple-500 */}
                    <stop stopColor="#ef4444" offset="100%" /> {/* red-500 */}
                </linearGradient>
            </svg>

            <div className="flex items-center gap-6 order-1 md:order-1 mb-2 md:mb-0">
                <a href="#" className="hover:scale-110 transition-transform" aria-label="Instagram">
                    <Instagram style={{ stroke: "url(#brandGradient)" }} className="w-7 h-7" />
                </a>
                <a href="#" className="hover:scale-110 transition-transform" aria-label="Facebook">
                    <Facebook style={{ stroke: "url(#brandGradient)" }} className="w-7 h-7" />
                </a>
                <a href="#" className="hover:scale-110 transition-transform" aria-label="LinkedIn">
                    <Linkedin style={{ stroke: "url(#brandGradient)" }} className="w-7 h-7" />
                </a>
            </div>

            <div className="text-sm text-gray-400 font-medium tracking-wide order-2 md:order-2 mt-4 md:mt-0">
                {t.footer.rights}
            </div>
        </footer>
    );
}
