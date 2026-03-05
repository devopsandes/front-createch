"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Menu, X } from "lucide-react";
import { TypewriterLogo } from "./TypewriterLogo";
import { useLanguage } from "../../i18n/LanguageContext";

// Flag Components (Original Colors)
const FlagES = () => (
    <svg viewBox="0 0 64 42" className="w-6 h-4 shadow-sm border border-white/10 rounded-[1px]">
        <rect width="64" height="42" fill="#AA151B" />
        <rect width="64" height="21" y="10.5" fill="#F1BF00" />
    </svg>
);

const FlagEN = () => (
    <svg viewBox="0 0 64 42" className="w-6 h-4 shadow-sm border border-white/10 rounded-[1px]">
        <rect width="64" height="42" fill="#012169" />
        <path d="M0 0l64 42M64 0L0 42" stroke="#FFF" strokeWidth="6" />
        <path d="M0 0l64 42M64 0L0 42" stroke="#C8102E" strokeWidth="4" />
        <path d="M32 0v42M0 21h64" stroke="#FFF" strokeWidth="10" />
        <path d="M32 0v42M0 21h64" stroke="#C8102E" strokeWidth="6" />
    </svg>
);

const FlagPT = () => (
    <svg viewBox="0 0 64 42" className="w-6 h-4 shadow-sm border border-white/10 rounded-[1px]">
        <rect width="25.6" height="42" fill="#006600" />
        <rect width="38.4" height="42" x="25.6" fill="#FF0000" />
        <circle cx="25.6" cy="21" r="7" fill="#FFFF00" stroke="#000" strokeWidth="0.5" />
    </svg>
);

export function Header() {
    const pathname = usePathname();
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

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
                    <Link href="/nuestros-trabajos" className={getLinkStyle("/nuestros-trabajos")}>
                        {t.nav.ourWork}
                    </Link>
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
                            title="English (EN)"
                        >
                            <FlagEN />
                        </button>
                        <button
                            onClick={() => setLanguage("pt")}
                            className={`p-1 rounded-full transition-all ${language === 'pt' ? 'bg-white/20 scale-110' : 'opacity-40 hover:opacity-100'}`}
                            title="Português (PT)"
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
                            {language === 'es' ? "Argentina" : language === 'en' ? "English" : "Português"}
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

                    {/* Mobile Menu Toggle - Keeping it for full overlay option */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-white p-2"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-8 right-8 text-white"
                        >
                            <X size={32} />
                        </button>

                        <div className="flex flex-col items-center gap-8 text-2xl font-bold">
                            <Link href="/lo-que-hacemos" onClick={() => setIsMenuOpen(false)}>
                                {t.nav.whatWeDo}
                            </Link>
                            <Link href="/contacto" onClick={() => setIsMenuOpen(false)}>
                                {t.nav.contact}
                            </Link>
                            <Link href="/quienes-somos" onClick={() => setIsMenuOpen(false)}>
                                {t.nav.about}
                            </Link>
                            <Link href="/nuestros-trabajos" onClick={() => setIsMenuOpen(false)}>
                                {t.nav.ourWork}
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* Mobile Sub-Navigation Rows (Always visible on mobile) */}
            <div className="lg:hidden flex overflow-x-auto hide-scrollbar px-4 pb-4 gap-6 bg-black border-b border-white/5 scroll-smooth">
                {[
                    { name: t.nav.whatWeDo, href: "/lo-que-hacemos" },
                    { name: t.nav.contact, href: "/contacto" },
                    { name: t.nav.about, href: "/quienes-somos" },
                    { name: t.nav.ourWork, href: "/nuestros-trabajos" }
                ].map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`text-[10px] font-bold uppercase tracking-[0.15em] whitespace-nowrap transition-colors ${pathname === item.href ? "text-blue-500" : "text-gray-400 hover:text-white"
                            }`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </header>
    );
}
