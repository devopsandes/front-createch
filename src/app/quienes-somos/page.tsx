"use client";

import { Header } from "../components/Header";
import { ParticlesBackground } from "../components/ParticlesBackground";
import { Footer } from "../components/Footer";
import Image from "next/image";
import { useLanguage } from "../../i18n/LanguageContext";

export default function QuienesSomos() {
    const { t } = useLanguage();

    return (
        <div className="w-full bg-black text-white flex flex-col font-sans min-h-screen md:h-screen overflow-y-auto md:overflow-hidden scroll-smooth">
            <Header />
            <ParticlesBackground />

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 shrink relative z-10 py-16 md:py-8 lg:py-0 mt-20 md:mt-0 short-h-page-main">
                <div className="w-full max-w-[1300px] mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-20">

                        {/* Image Content (Left) */}
                        <div className="flex-1 w-full max-w-sm mx-auto relative h-[200px] md:h-[350px] lg:h-[450px] short-h-img-container">
                            <div className="w-full h-full relative bg-white rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                <Image
                                    src="/image-robot.jpg"
                                    alt="Ilustración"
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                        </div>

                        {/* Text Content (Right) */}
                        <div className="flex-1 text-left w-full">
                            <div className="w-full h-[3px] bg-gradient-to-r from-blue-600 to-red-600 mb-4 block [@media(max-height:650px)]:mb-2"></div>
                            <div className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-2 [@media(max-height:650px)]:mb-1">
                                {t.quienesSomos.tag}
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight leading-[1.1] short-h-title-size">
                                {t.quienesSomos.title}
                            </h1>
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light mb-2 short-h-text-size">
                                {t.quienesSomos.description}
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
