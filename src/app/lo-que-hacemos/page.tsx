"use client";

import { Header } from "../components/Header";
import { ParticlesBackground } from "../components/ParticlesBackground";
import { Footer } from "../components/Footer";
import Image from "next/image";
import { useLanguage } from "../../i18n/LanguageContext";

export default function LoQueHacemos() {
    const { t } = useLanguage();

    return (
        <div className="w-full bg-black text-white flex flex-col font-sans min-h-screen md:h-screen overflow-y-auto md:overflow-hidden scroll-smooth">
            <Header />
            <ParticlesBackground />

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col justify-start md:justify-center px-6 md:px-12 lg:px-24 shrink relative z-10 py-0 md:py-2 lg:py-0 mt-4 md:mt-0 short-h-page-main">
                <div className="w-full max-w-[1300px] mx-auto">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-4 lg:gap-10">
                        {/* Text Content (Right) */}
                        <div className="flex-1 text-left w-full">
                            <div className="w-full h-[2px] bg-gradient-to-r from-blue-600 to-red-600 mb-2 block"></div>
                            <div className="text-xs md:text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-1">{t.loQueHacemos.tag}</div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-[1.1] short-h-title-size text-white">
                                {t.loQueHacemos.title}
                            </h1>
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light mb-4 text-balance short-h-text-size">
                                {t.loQueHacemos.p1}
                            </p>
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light mb-6 short-h-text-size">
                                {t.loQueHacemos.p2}
                            </p>
                            <ul className="text-sm md:text-base text-gray-300 space-y-4 md:space-y-4">
                                {t.loQueHacemos.bullets.map((bullet: string, idx: number) => (
                                    <li key={idx} className="flex items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-4 mt-2 shrink-0 opacity-90 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
                                        <span className="leading-snug">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Image Content (Left) - Hidden on Mobile */}
                        <div className="hidden md:block flex-1 w-full max-w-sm mx-auto relative h-[180px] md:h-[350px] lg:h-[450px] short-h-img-container">
                            <div className="w-full h-full relative overflow-hidden flex items-center justify-center p-4">
                                <Image
                                    src="/image-robot.jpg"
                                    alt="Ilustración IA"
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
