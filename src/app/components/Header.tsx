"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { TypewriterLogo } from "./TypewriterLogo";
import { useLanguage } from "../../i18n/LanguageContext";

// Flag Components (Original Colors)
const FlagES = () => (
    <svg viewBox="0 0 64 42" className="w-6 h-4 shadow-sm border border-white/10 rounded-[1px]">
        <rect width="64" height="42" fill="#75AADB" />
        <rect width="64" height="14" y="14" fill="#FFFFFF" />
        <circle cx="32" cy="21" r="4" fill="#F6B40E" />
    </svg>
);

const FlagEN = () => (
    <svg viewBox="0 0 64 42" className="w-6 h-4 shadow-sm border border-white/10 rounded-[1px]">
        <rect width="64" height="42" fill="#B22234" />
        <path d="M0 3.23h64M0 9.69h64M0 16.15h64M0 22.61h64M0 29.07h64M0 35.53h64" stroke="#FFF" strokeWidth="3.23" />
        <rect width="25.6" height="22.6" fill="#3C3B6E" />
        <circle cx="4" cy="4" r="1" fill="#FFF" />
        <circle cx="12" cy="4" r="1" fill="#FFF" />
        <circle cx="20" cy="4" r="1" fill="#FFF" />
        <circle cx="8" cy="8" r="1" fill="#FFF" />
        <circle cx="16" cy="8" r="1" fill="#FFF" />
    </svg>
);

const FlagPT = () => (
    <svg viewBox="0 0 64 42" className="w-6 h-4 shadow-sm border border-white/10 rounded-[1px]">
        <rect width="64" height="42" fill="#009739" />
        <path d="M32 4l24 17-24 17-24-17z" fill="#FEDD00" />
        <circle cx="32" cy="21" r="8" fill="#012169" />
    </svg>
);

export function Header() {
    const pathname = usePathname();
    const [isLangOpen, setIsLangOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const getLinkStyle = (path: string) => {
        const isActive = pathname === path;

        return `nav-link-bracket text-lg lg:text-xl font-medium ${isActive ? "text-white active" : "text-gray-300 hover:text-white"
            }`;
    };

    const flagIcons: Record<string, React.ReactNode> = {
        es: <FlagES />,
        en: <FlagEN />,
        pt: <FlagPT />
    };

    return (
        <header className="sticky top-0 z-50 bg-black w-full flex flex-col">
            <nav className="flex items-center justify-between px-4 py-2 lg:px-12 lg:py-4 shrink-0 relative z-20 bg-black">
                <Link href="/" className="flex-shrink-0 flex items-center">
                    <TypewriterLogo isActive={true} />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 justify-center items-center gap-10 w-max">
                    <Link href="/lo-que-hacemos" className={getLinkStyle("/lo-que-hacemos")}>
                        {t.nav.whatWeDo}
                    </Link>
                    <Link href="/contacto" className={getLinkStyle("/contacto")}>
                        {t.nav.contact}
                    </Link>
                    <Link href="/quienes-somos" className={getLinkStyle("/quienes-somos")}>
                        {t.nav.about}
                    </Link>
                    <a
                        href="https://wa.me/5492616540953"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={getLinkStyle("/nuestros-trabajos")}
                    >
                        {t.nav.ourWork}
                    </a>
                </div>

                {/* Right Section: Language & Mobile Menu Toggle */}
                <div className="flex-shrink-0 flex items-center gap-4 lg:gap-6 relative">
                    {/* Language Switcher - Monochrome Flags (Mobile/Tablet Only) */}
                    <div className="flex lg:hidden items-center gap-3 bg-white/5 p-1 rounded-full border border-white/10">
                        <button
                            onClick={() => setLanguage("es")}
                            className={`p-1 rounded-full transition-all ${language === 'es' ? 'bg-white/20 scale-110' : 'opacity-40 hover:opacity-100'}`}
                            title="Argentina (ES)"
                        >
                            <FlagES />
                        </button>
                        <button
                            onClick={() => setLanguage("en")}
                            className={`p-1 rounded-full transition-all ${language === 'en' ? 'bg-white/20 scale-110' : 'opacity-40 hover:opacity-100'}`}
                            title="USA (EN)"
                        >
                            <FlagEN />
                        </button>
                        <button
                            onClick={() => setLanguage("pt")}
                            className={`p-1 rounded-full transition-all ${language === 'pt' ? 'bg-white/20 scale-110' : 'opacity-40 hover:opacity-100'}`}
                            title="Brasil (PT)"
                        >
                            <FlagPT />
                        </button>
                    </div>

                    {/* Desktop Language Switcher (Original style) */}
                    <div className="hidden lg:flex items-center gap-4 relative">
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors pb-1 text-sm font-medium"
                        >
                            <Globe className="w-5 h-5" />
                            {language === 'es' ? "Argentina" : language === 'en' ? "USA" : "Brasil"}
                        </button>

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
                                    USA
                                </button>
                                <button
                                    onClick={() => { setLanguage("pt"); setIsLangOpen(false); }}
                                    className="text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                                >
                                    Brasil
                                </button>
                            </div>
                        )}
                    </div>
                </div>

            </nav>

            {/* Mobile Sub-Navigation Rows (Always visible on mobile) */}
            <div className="lg:hidden flex overflow-x-auto hide-scrollbar px-4 pb-4 gap-6 bg-black border-b border-white/5 scroll-smooth">
                {[
                    { name: t.nav.whatWeDo, href: "/lo-que-hacemos", isExternal: false },
                    { name: t.nav.contact, href: "/contacto", isExternal: false },
                    { name: t.nav.about, href: "/quienes-somos", isExternal: false },
                    { name: t.nav.ourWork, href: "https://wa.me/5492616540953", isExternal: true }
                ].map((item) => (
                    item.isExternal ? (
                        <a
                            key={item.href}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] font-bold uppercase tracking-[0.15em] whitespace-nowrap text-gray-400 hover:text-white transition-colors"
                        >
                            {item.name}
                        </a>
                    ) : (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-[10px] font-bold uppercase tracking-[0.15em] whitespace-nowrap transition-colors ${pathname === item.href ? "text-blue-500" : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {item.name}
                        </Link>
                    )
                ))}
            </div>
        </header>
    );
}
