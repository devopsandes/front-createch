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
    <div className="h-screen w-full bg-black text-white flex flex-col font-sans overflow-hidden">
      <Header />

      <ParticlesBackground />
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center px-6 lg:px-24 relative z-20 py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center w-full max-w-[1400px] mx-auto h-full">
          {/* Left Hero Text */}
          <div className="flex flex-col h-full justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] xl:text-[5rem] font-bold leading-[1.05] tracking-tight text-white min-h-[160px] lg:min-h-[220px] mb-8 lg:mb-16 flex items-center">
              <HeroTypewriter />
            </h1>
          </div>

          {/* Right Text */}
          <div className="flex flex-col space-y-5 lg:pl-10 relative w-full pt-4 lg:pt-0">
            <div className="absolute left-0 lg:left-10 top-0 w-[60%] lg:w-[75%] h-[3px] bg-gradient-to-r from-blue-600 to-red-600"></div>

            <div className="pt-6 text-gray-300 flex flex-col gap-3 font-sans w-full">
              <p className="text-xl md:text-2xl font-bold text-white tracking-wide leading-snug">
                {t.hero.description.intro}
              </p>

              <div className="my-2">
                <PainPointsCarousel key={t.hero.description.intro} points={t.hero.description.painPoints} />
              </div>

              <div className="flex flex-col space-y-3 border-l-2 border-blue-600/50 pl-4 md:pl-5 mt-2">
                <p className="text-base md:text-[1.05rem] leading-relaxed text-gray-300">
                  {t.hero.description.p1}
                </p>
                <p className="text-base md:text-[1.05rem] leading-relaxed text-gray-400">
                  {t.hero.description.p2}
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/lo-que-hacemos" className="flex items-center w-max text-[13px] font-bold uppercase tracking-wide hover:opacity-80 transition-opacity">
                <span className="mr-4">{t.hero.btn}</span>
                <span className="bg-gradient-to-br from-blue-600 to-red-600 w-8 h-8 flex items-center justify-center shadow-lg shadow-red-500/20">
                  <ChevronRight className="w-5 h-5 text-white" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Cards Area */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 lg:gap-4 px-0 lg:px-24 mt-auto h-[18vh] min-h-[140px] relative z-20">
        {/* Card 1 (Red) */}
        <Link href="/reinvencion" className="bg-gradient-to-br from-[#380e0e] to-black text-white p-5 flex flex-col justify-between group cursor-pointer border-t-[3px] border-transparent hover:border-red-600 transition-all relative overflow-hidden h-full rounded-sm block">
          <div className="text-[10px] font-bold tracking-[0.2em] text-gray-300 uppercase">{t.cards.tag.estudio}</div>
          <h3 className="text-base md:text-lg font-bold leading-snug group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
            {t.cards.c1}
          </h3>
        </Link>

        {/* Card 2 (Blue) */}
        <Link href="/vision2025" className="bg-gradient-to-br from-[#0e1c38] to-black text-white p-5 flex flex-col justify-between group cursor-pointer border-t-[3px] border-transparent hover:border-blue-600 transition-all relative overflow-hidden h-full rounded-sm block">
          <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">{t.cards.tag.estudio}</div>
          <h3 className="text-base md:text-lg font-bold leading-snug group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 relative z-10">
            {t.cards.c2}
          </h3>
        </Link>

        {/* Card 3 (Red) */}
        <Link href="/life-trends" className="bg-gradient-to-br from-[#380e0e] to-black text-white p-5 flex flex-col justify-between group cursor-pointer border-t-[3px] border-transparent hover:border-red-600 transition-all relative overflow-hidden h-full rounded-sm block">
          <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">{t.cards.tag.estudio}</div>
          <h3 className="text-base md:text-lg font-bold leading-snug group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
            {t.cards.c3}
          </h3>
        </Link>

        {/* Card 4 (Blue) */}
        <Link href="/quienes-somos" className="bg-gradient-to-br from-[#0e1c38] to-black text-white p-5 flex flex-col justify-between group cursor-pointer border-t-[3px] border-transparent hover:border-blue-600 transition-all relative overflow-hidden h-full rounded-sm block">
          <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">{t.cards.tag.puntoDeVista}</div>
          <h3 className="text-base md:text-lg font-bold leading-snug group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
            {t.cards.c4}
          </h3>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
