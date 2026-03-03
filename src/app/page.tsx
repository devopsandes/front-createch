"use client";

import Link from "next/link";
import { ChevronRight, Play } from "lucide-react";
import { ParticlesBackground } from "./components/ParticlesBackground";
import { HeroTypewriter } from "./components/HeroTypewriter";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useLanguage } from "../i18n/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="h-screen w-full bg-black text-white flex flex-col font-sans overflow-hidden">
      <Header />

      <ParticlesBackground />
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center px-6 lg:px-24 shrink h-[58vh] relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center h-full max-h-[500px]">
          {/* Left Hero Text */}
          <div className="flex flex-col h-full justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-bold leading-[1.1] tracking-tight text-white mb-12 min-h-[160px] lg:min-h-[220px] flex items-center">
              <HeroTypewriter />
            </h1>
          </div>

          {/* Right Text */}
          <div className="flex flex-col space-y-8 lg:pl-16 relative">
            <div className="absolute left-0 lg:left-16 top-0 w-full lg:w-[calc(100%-4rem)] h-[3px] bg-gradient-to-r from-blue-600 to-red-600"></div>
            <p className="text-gray-300 text-[1.05rem] leading-relaxed pt-8 font-serif sm:font-sans">
              {t.hero.paragraph}
            </p>
            <div className="pt-4">
              <Link href="/lo-que-hacemos" className="flex items-center w-max text-[13px] font-bold uppercase tracking-wide hover:opacity-80 transition-opacity">
                <span className="mr-4">{t.hero.btn}</span>
                <span className="bg-gradient-to-br from-blue-600 to-red-600 w-8 h-8 flex items-center justify-center">
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
