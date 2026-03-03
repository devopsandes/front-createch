"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { TypewriterLogo } from "./TypewriterLogo";
import { useLanguage } from "../../i18n/LanguageContext";

export function Header() {
    const pathname = usePathname();
    const [isLangOpen, setIsLangOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const getLinkStyle = (path: string) => {
        // If the current path matches the parameter, it's active.
        const isActive = pathname === path;

        return `relative flex items-center gap-1 transition-colors pb-1 ${isActive
            ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-blue-600 after:via-purple-500 after:to-red-500 after:rounded-full"
            : "text-gray-300 hover:text-white border-b-2 border-transparent"
            }`;
    };

    const displaySelectedLang: Record<string, string> = {
        es: "Argentina",
        en: "English",
        pt: "Português"
    };

    return (
        <nav className="flex items-center justify-between px-10 py-5 lg:px-12 lg:py-8 shrink-0 h-[12vh] relative z-20 bg-black">
            <Link href="/" className="flex-shrink-0 flex items-center">
                <TypewriterLogo isActive={pathname === "/"} />
            </Link>

            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 justify-center items-center gap-8 text-lg lg:text-xl font-medium w-max mt-4">
                <button className={getLinkStyle("/lo-que-hacemos")}>
                    {t.nav.whatWeDo}
                </button>
                <Link href="/contacto" className={getLinkStyle("/contacto")}>
                    {t.nav.contact}
                </Link>
                <button className={getLinkStyle("/quienes-somos")}>
                    {t.nav.about}
                </button>
                <button className={getLinkStyle("/nuestros-trabajos")}>
                    {t.nav.ourWork}
                </button>
            </div>

            {/* Right Section: Actions */}
            <div className="flex-shrink-0 flex items-center gap-4 lg:gap-6 text-sm font-medium relative">
                <button
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors pb-1"
                >
                    <Globe className="w-5 h-5" />
                    {displaySelectedLang[language]}
                </button>

                {/* Dropdown de Idiomas */}
                {isLangOpen && (
                    <div className="absolute top-full right-0 mt-2 py-2 w-32 bg-[#0e1c38] border border-blue-900/50 rounded-sm shadow-xl flex flex-col z-50">
                        <button
                            onClick={() => { setLanguage("es"); setIsLangOpen(false); }}
                            className="text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                        >
                            Argentina
                        </button>
                        <button
                            onClick={() => { setLanguage("en"); setIsLangOpen(false); }}
                            className="text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                        >
                            English
                        </button>
                        <button
                            onClick={() => { setLanguage("pt"); setIsLangOpen(false); }}
                            className="text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                        >
                            Português
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}
