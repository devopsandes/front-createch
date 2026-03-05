"use client";

import { Instagram, Facebook, Linkedin } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="w-full flex flex-col md:flex-row justify-between items-center px-6 lg:px-24 py-4 shrink-0 relative z-20">
            {/* Definición del Gradiente para los íconos (Invisible) */}
            <svg width="0" height="0" className="absolute">
                <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop stopColor="#2563eb" offset="0%" /> {/* blue-600 */}
                    <stop stopColor="#a855f7" offset="50%" /> {/* purple-500 */}
                    <stop stopColor="#ef4444" offset="100%" /> {/* red-500 */}
                </linearGradient>
            </svg>

            <div className="flex items-center gap-4 order-1 md:order-1 mb-2 md:mb-0">
                <a
                    href="https://www.instagram.com/createch.ia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-zinc-900 hover:scale-110 transition-all duration-300"
                    aria-label="Instagram"
                >
                    <Instagram style={{ stroke: "url(#brandGradient)" }} className="w-7 h-7" />
                </a>
                <a
                    href="https://www.facebook.com/share/1QMRf3o6L6/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-zinc-900 hover:scale-110 transition-all duration-300"
                    aria-label="Facebook"
                >
                    <Facebook style={{ stroke: "url(#brandGradient)" }} className="w-7 h-7" />
                </a>
                <a
                    href="https://www.linkedin.com/in/createchsoftware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-zinc-900 hover:scale-110 transition-all duration-300"
                    aria-label="LinkedIn"
                >
                    <Linkedin style={{ stroke: "url(#brandGradient)" }} className="w-7 h-7" />
                </a>
            </div>

            <div className="text-sm text-gray-400 font-medium tracking-wide order-2 md:order-2 mt-4 md:mt-0">
                {t.footer.rights}
            </div>
        </footer>
    );
}
