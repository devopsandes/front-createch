"use client";

import { Header } from "../components/Header";
import { ParticlesBackground } from "../components/ParticlesBackground";
import { Footer } from "../components/Footer";
import Image from "next/image";
import { useLanguage } from "../../i18n/LanguageContext";

export default function QuienesSomos() {
    const { t } = useLanguage();

    return (
        <div className="w-full bg-black text-white flex flex-col font-sans min-h-screen flex-grow">
            <Header />
            <ParticlesBackground />

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col justify-center px-6 lg:px-24 shrink relative z-10 py-12 md:py-16 mt-16 md:mt-20">
                <div className="w-full max-w-[1300px] mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* Image Content (Left) */}
                        <div className="flex-1 w-full max-w-md mx-auto relative h-[350px] md:h-[450px]">
                            <div className="w-full h-full relative bg-white rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                <Image
                                    src="/image-robot.jpg"
                                    alt="Ilustración"
                                    fill
                                    className="object-contain p-6"
                                />
                            </div>
                        </div>

                        {/* Text Content (Right) */}
                        <div className="flex-1 text-left w-full">
                            <div className="w-full h-[3px] bg-gradient-to-r from-blue-600 to-red-600 mb-6 lg:mb-8 block"></div>
                            <div className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
                                {t.quienesSomos.tag}
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
                                {t.quienesSomos.title}
                            </h1>
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light mb-4">
                                {t.quienesSomos.p1}
                            </p>
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light mb-4">
                                {t.quienesSomos.p2}
                            </p>
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                                {t.quienesSomos.p3}
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
