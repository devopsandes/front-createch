"use client";

import Link from "next/link";
import { ChevronRight, Play } from "lucide-react";
import { ParticlesBackground } from "./components/ParticlesBackground";
import { HeroTypewriter } from "./components/HeroTypewriter";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PainPointsCarousel } from "./components/PainPointsCarousel";
import { useLanguage } from "../i18n/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen md:h-screen w-full bg-black text-white flex flex-col font-sans overflow-y-auto md:overflow-hidden scroll-smooth">
      <Header />

      <ParticlesBackground />
      {/* Main Content Area */}
      {/* Main Content Area */}
      {/* Main Content Area */}
      <main className="px-6 md:px-12 lg:px-24 relative z-20 md:py-1 lg:py-2 short-h-reduce-main">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-2 md:gap-8 lg:gap-16 items-center w-full max-w-[1400px] mx-auto">
          {/* Left Hero Text */}
          <div className="flex flex-col justify-center text-left">
            <h1 className="text-lg sm:text-xl md:text-3xl lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.1] md:leading-[1.1] lg:leading-[1.05] tracking-tight text-white mt-12 md:mt-0 mb-1 md:mb-4 lg:mb-8 short-h-reduce-font">
              <HeroTypewriter />
            </h1>
          </div>

          {/* Right Text */}
          <div className="flex flex-col md:pl-6 lg:pl-10 relative w-full short-h-reduce-spacing">
            <div className="absolute left-0 md:left-6 lg:left-10 top-0 w-[60%] lg:w-[75%] h-[2px] md:h-[3px] bg-gradient-to-r from-blue-600 to-red-600"></div>

            <div className="pt-2 md:pt-4 text-gray-300 flex flex-col gap-1 md:gap-4 font-sans w-full">
              <p className="text-base md:text-xl lg:text-2xl font-bold text-white tracking-wide leading-snug">
                {t.hero.description.intro}
              </p>

              <div className="mb-1 short-h-reduce-carousel">
                <PainPointsCarousel key={t.hero.description.intro} points={t.hero.description.painPoints} />
              </div>

              <div className="flex flex-col space-y-1 md:space-y-4">
                <p className="text-sm md:text-[0.95rem] lg:text-[1.05rem] leading-relaxed text-gray-300">
                  {t.hero.description.p1}
                </p>
                <p className="text-sm md:text-[0.95rem] lg:text-[1.05rem] leading-relaxed text-gray-400 v-short-hide">
                  {t.hero.description.p2}
                </p>
              </div>
            </div>

            <div className="pt-1 md:pt-2">
              <Link href="/lo-que-hacemos" className="flex items-center w-max text-[11px] md:text-[13px] font-bold uppercase tracking-wide hover:opacity-80 transition-opacity">
                <span className="mr-3 md:mr-4">{t.hero.btn}</span>
                <span className="bg-gradient-to-br from-blue-600 to-red-600 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center shadow-lg shadow-red-500/20">
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Cards Area */}
      <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-4 px-6 md:px-12 mt-4 md:mt-auto py-2 md:py-2 relative z-20 hide-scrollbar shrink-0 short-h-mt-auto">
        {/* Mobile Swipe Indicator Overlay */}
        <div className="lg:hidden absolute right-12 top-1/2 -translate-y-1/2 z-30 animate-[pulse-swipe_2s_infinite] opacity-80 pointer-events-none">
            <div className="flex flex-col items-center gap-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                </svg>
                <span className="text-[9px] font-black uppercase tracking-widest text-white drop-shadow-[0_0_4px_rgba(0,0,0,0.5)]">Slide</span>
            </div>
        </div>
        {/* Card 1 (Red) */}
        <Link href="/primerospasos" className="bg-gradient-to-br from-[#380e0e] to-black text-white p-4 md:p-6 flex flex-col justify-between group cursor-pointer border-t-[3px] border-transparent hover:border-red-600 transition-all relative overflow-hidden h-[18vh] min-h-[140px] rounded-sm block min-w-[80%] sm:min-w-[45%] md:min-w-0 short-h-reduce-cards shrink-0">
          <div className="text-[10px] font-bold tracking-[0.2em] text-gray-300 uppercase shrink-0">{t.cards.tag.estudio}</div>
          <h3 className="text-sm md:text-lg font-bold leading-snug group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
            {t.cards.c1}
          </h3>
        </Link>

        {/* Card 2 (Blue) */}
        <Link href="/ventajas" className="bg-gradient-to-br from-[#0e1c38] to-black text-white p-4 md:p-6 flex flex-col justify-between group cursor-pointer border-t-[3px] border-transparent hover:border-blue-600 transition-all relative overflow-hidden h-[18vh] min-h-[140px] rounded-sm block min-w-[80%] sm:min-w-[45%] md:min-w-0 short-h-reduce-cards shrink-0">
          <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase shrink-0">{t.cards.tag.estudio}</div>
          <h3 className="text-sm md:text-lg font-bold leading-snug group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 relative z-10">
            {t.cards.c2}
          </h3>
        </Link>

        {/* Card 3 (Red) */}
        <Link href="/contacto" className="bg-gradient-to-br from-[#380e0e] to-black text-white p-4 md:p-6 flex flex-col justify-between group cursor-pointer border-t-[3px] border-transparent hover:border-red-600 transition-all relative overflow-hidden h-[18vh] min-h-[140px] rounded-sm block min-w-[80%] sm:min-w-[45%] md:min-w-0 short-h-reduce-cards shrink-0">
          <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase shrink-0">{t.cards.tag.contacto}</div>
          <h3 className="text-sm md:text-lg font-bold leading-snug group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
            {t.cards.c3}
          </h3>
        </Link>

        {/* Card 4 (Blue) */}
        <Link href="https://wa.me/5492616540953" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-[#0e1c38] to-black text-white p-4 md:p-6 flex flex-col justify-between group cursor-pointer border-t-[3px] border-transparent hover:border-blue-600 transition-all relative overflow-hidden h-[18vh] min-h-[140px] rounded-sm block min-w-[80%] sm:min-w-[45%] md:min-w-0 mr-6 md:mr-0 short-h-reduce-cards shrink-0">
          <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase shrink-0">{t.cards.tag.puntoDeVista}</div>
          <h3 className="text-sm md:text-lg font-bold leading-snug group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-2">
            {t.cards.viewWork} <span className="group-hover:translate-x-1 transition-transform">→</span>
          </h3>
        </Link>
      </div>
      <div className="shrink-0 md:mt-0 [@media(min-width:768px)_and_(max-height:650px)]:footer-normal-short">
        <Footer />
      </div>
      <style jsx global>{`
        @keyframes pulse-swipe {
            0%, 100% { opacity: 0.3; transform: translate(0, -50%); }
            50% { opacity: 0.8; transform: translate(8px, -50%); }
        }
      `}</style>
    </div>
  );
}
