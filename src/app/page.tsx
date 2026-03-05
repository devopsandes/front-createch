"use client";

import Link from "next/link";
import { ChevronRight, Play } from "lucide-react";
import { ParticlesBackground } from "./components/ParticlesBackground";
import { HeroTypewriter } from "./components/HeroTypewriter";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PainPointsCarousel } from "./components/PainPointsCarousel";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { useLanguage } from "../i18n/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen lg:h-screen w-full bg-black text-white flex flex-col font-sans overflow-y-auto lg:overflow-hidden scroll-smooth">
      <Header />

      <ParticlesBackground />
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center px-6 lg:px-24 relative z-20 py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center w-full max-w-[1400px] mx-auto">
          {/* Left Hero Text */}
          <div className="flex flex-col justify-center text-left md:pt-0">
            <h1 className="text-3xl md:text-5xl lg:text-[4.5rem] xl:text-[5rem] font-bold leading-[1.1] md:leading-[1.05] tracking-tight text-white min-h-[70px] md:min-h-[160px] lg:min-h-[220px] mt-20 md:mt-0 mb-0 lg:mb-16">
              <HeroTypewriter />
            </h1>
          </div>

          {/* Right Text */}
          <div className="flex flex-col space-y-6 lg:pl-10 relative w-full">
            <div className="absolute left-0 lg:left-10 top-0 w-[60%] lg:w-[75%] h-[3px] bg-gradient-to-r from-blue-600 to-red-600"></div>

            <div className="pt-8 text-gray-300 flex flex-col gap-4 font-sans w-full">
              <p className="text-base md:text-2xl font-bold text-white tracking-wide leading-snug">
                {t.hero.description.intro}
              </p>

              <div className="mb-2">
                <PainPointsCarousel key={t.hero.description.intro} points={t.hero.description.painPoints} />
              </div>

              <div className="flex flex-col space-y-4">
                <p className="text-base md:text-[1.05rem] leading-relaxed text-gray-300">
                  {t.hero.description.p1}
                </p>
                <p className="text-base md:text-[1.05rem] leading-relaxed text-gray-400">
                  {t.hero.description.p2}
                </p>
              </div>
            </div>

            <div className="pt-6">
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
      <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-4 px-6 lg:px-24 mt-4 lg:mt-auto py-4 lg:py-0 relative z-20 hide-scrollbar scroll-smooth">
        {/* Card 1 (Red) */}
        <Link href="/reinvencion" className="bg-gradient-to-br from-[#380e0e] to-black text-white p-6 flex flex-col justify-between group cursor-pointer border-t-[3px] border-transparent hover:border-red-600 transition-all relative overflow-hidden h-[18vh] min-h-[140px] rounded-sm block min-w-[80%] sm:min-w-[45%] lg:min-w-0 shrink-0 lg:shrink">
          <div className="text-[10px] font-bold tracking-[0.2em] text-gray-300 uppercase">{t.cards.tag.estudio}</div>
          <h3 className="text-base md:text-lg font-bold leading-snug group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
            {t.cards.c1}
          </h3>
        </Link>

        {/* Card 2 (Blue) */}
        <Link href="/vision2025" className="bg-gradient-to-br from-[#0e1c38] to-black text-white p-6 flex flex-col justify-between group cursor-pointer border-t-[3px] border-transparent hover:border-blue-600 transition-all relative overflow-hidden h-[18vh] min-h-[140px] rounded-sm block min-w-[80%] sm:min-w-[45%] lg:min-w-0 shrink-0 lg:shrink">
          <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">{t.cards.tag.estudio}</div>
          <h3 className="text-base md:text-lg font-bold leading-snug group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 relative z-10">
            {t.cards.c2}
          </h3>
        </Link>

        {/* Card 3 (Red) */}
        <Link href="/contacto" className="bg-gradient-to-br from-[#380e0e] to-black text-white p-6 flex flex-col justify-between group cursor-pointer border-t-[3px] border-transparent hover:border-red-600 transition-all relative overflow-hidden h-[18vh] min-h-[140px] rounded-sm block min-w-[80%] sm:min-w-[45%] lg:min-w-0 shrink-0 lg:shrink">
          <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">{t.cards.tag.contacto}</div>
          <h3 className="text-base md:text-lg font-bold leading-snug group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
            {t.cards.c3}
          </h3>
        </Link>

        {/* Card 4 (Blue) */}
        <Link href="/lo-que-hacemos" className="bg-gradient-to-br from-[#0e1c38] to-black text-white p-6 flex flex-col justify-between group cursor-pointer border-t-[3px] border-transparent hover:border-blue-600 transition-all relative overflow-hidden h-[18vh] min-h-[140px] rounded-sm block min-w-[80%] sm:min-w-[45%] lg:min-w-0 shrink-0 lg:shrink mr-6 lg:mr-0">
          <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">{t.cards.tag.puntoDeVista}</div>
          <h3 className="text-base md:text-lg font-bold leading-snug group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-2">
            {t.cards.viewWork} <span className="group-hover:translate-x-1 transition-transform">→</span>
          </h3>
        </Link>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
