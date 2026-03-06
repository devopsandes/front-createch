"use client";

import { Header } from "../components/Header";
import { ParticlesBackground } from "../components/ParticlesBackground";
import { Footer } from "../components/Footer";
import { ArticleCarousel, FullArticle } from "../components/ArticleCarousel";
import { useLanguage } from "../../i18n/LanguageContext";

export default function PrimerosPasos() {
    const { t } = useLanguage();
    const content = t.primerosPasos;

    const fullArticleData: FullArticle = {
        title: content.fullArticle.title,
        bajada: (
            <>
                {content.fullArticle.bajada}
            </>
        ),
        body: (
            <>
                {content.fullArticle.body.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                ))}
                
                <div className="p-1 w-full bg-gradient-to-r from-blue-600/10 via-red-600/20 to-blue-600/10 rounded-full my-8"></div>
                
                <div className="mt-10 p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-red-600 flex flex-col items-center">
                    <p className="text-2xl md:text-3xl text-white font-black text-center leading-tight">
                        {content.fullArticle.closing}
                    </p>
                </div>
            </>
        )
    };

    return (
        <div className="min-h-screen md:h-screen w-full bg-black text-white flex flex-col font-sans overflow-y-auto md:overflow-hidden scroll-smooth">
            <Header />
            <ParticlesBackground />

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col pt-24 md:pt-32 lg:pt-40 px-6 md:px-12 lg:px-24 shrink relative z-10 pb-12 mt-10 md:mt-0">
                <article className="w-full flex flex-col items-center">
                    <div className="w-full text-center mb-8 md:mb-12 relative z-20">
                        <div className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">Nota</div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1.1]">
                            {content.pageTitle}
                        </h1>
                    </div>

                    <ArticleCarousel slides={content.slides} fullArticle={fullArticleData} />
                </article>
            </main>

            <Footer />
        </div>
    );
}
