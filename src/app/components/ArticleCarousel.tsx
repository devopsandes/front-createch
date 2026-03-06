"use client";

import { useState } from "react";

export interface ArticleSlide {
    heading?: string;
    content: string[];
}

export interface FullArticle {
    title: string;
    bajada: React.ReactNode;
    body: React.ReactNode;
}

interface ArticleCarouselProps {
    slides: ArticleSlide[];
    fullArticle?: FullArticle;
}

export function ArticleCarousel({ slides, fullArticle }: ArticleCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const nextSlide = () => {
        if (!isModalOpen) {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }
    };

    // Note: prevSlide is defined but currently not used by the arrow click (which triggers nextSlide)
    // We keep it for future-proofing or potential swipe gestures
    const prevSlide = () => {
        if (!isModalOpen) {
            setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
        }
    };

    if (!slides || slides.length === 0) return null;

    return (
        <div className="relative w-full flex flex-col select-none group/carousel">
            {/* Carousel Container */}
            <div 
                className="w-full min-h-[500px] md:min-h-[400px] relative overflow-hidden cursor-pointer short-h-carousel-min"
                onClick={nextSlide}
            >
                {/* Decorative Gradient Line - Centered */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[3px] bg-gradient-to-r from-blue-600 to-red-600 z-20"></div>

                {/* Static Arrow and Counter - Centered above/beside text */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2 ml-[220px] md:ml-[300px] lg:ml-[360px] hidden sm:flex flex-col items-center gap-1 shrink-0 group/arrow z-30 [@media(max-height:650px)]:top-4">
                    <div className="relative">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-14 md:h-14 transition-transform duration-300 [@media(max-height:650px)]:w-10 [@media(max-height:650px)]:h-10">
                            <defs>
                                <linearGradient id="movingArrowGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#2563eb" />
                                    <stop offset="50%" stopColor="#ef4444" />
                                    <stop offset="100%" stopColor="#2563eb" />
                                    <animateTransform 
                                        attributeName="gradientTransform" 
                                        type="translate" 
                                        from="-12 0" 
                                        to="12 0" 
                                        dur="3s" 
                                        repeatCount="indefinite" 
                                    />
                                </linearGradient>
                            </defs>
                            <path d="M9 18L15 12L9 6" stroke="url(#movingArrowGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-gray-700">
                        {currentIndex + 1} / {slides.length}
                    </span>
                </div>

                {/* Sliding Content Container */}
                <div 
                    className="flex transition-transform duration-700 ease-in-out w-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, idx) => (
                        <div
                            key={idx}
                            className="w-full flex-shrink-0 text-center pt-12 flex flex-col items-center relative short-h-carousel-pt"
                        >
                            {slide.heading && (
                                <div className="flex flex-col items-center gap-2 mb-6 group/title [@media(max-height:650px)]:mb-2">
                                    <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight max-w-2xl px-12 short-h-text-size">
                                        <span className="opacity-90">{slide.heading}</span>
                                    </h2>
                                </div>
                            )}

                            <div className="space-y-6 max-w-2xl px-12 pb-12 short-h-carousel-spacing">
                                {slide.content.map((paragraph, pIdx) => (
                                    <p key={pIdx} className="text-gray-400 text-xl md:text-2xl leading-relaxed font-light opacity-90 short-h-text-size">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            {/* Ver más button in the last slide - only show on the specific slide */}
                            {idx === slides.length - 1 && (
                                <div className={`mt-2 md:mt-4 relative z-40 transition-all duration-700 delay-300 ${currentIndex === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} [@media(max-height:650px)]:mt-0`}>
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsModalOpen(true);
                                        }}
                                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-red-600 rounded-full text-white font-bold text-sm tracking-widest uppercase hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20 active:scale-95 short-h-button-compact"
                                    >
                                        Ver más
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* FULL SCREEN MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[10000] bg-black animate-in fade-in duration-500 overflow-hidden">
                    {/* Background Blur Overlay - Reduced blur for much better performance */}
                    <div className="absolute inset-0 bg-black/98 backdrop-blur-md"></div>

                    {/* ALWAYS VISIBLE Close Button - Outside of scroll container */}
                    <button 
                        onClick={() => setIsModalOpen(false)}
                        className="fixed top-8 right-8 md:top-12 md:right-12 group/close z-[10001] flex flex-col items-center gap-2"
                    >
                        <div className="relative p-5 rounded-full overflow-hidden transition-all duration-500 group-hover/close:rotate-180 group-hover/close:scale-110 shadow-[0_0_30px_rgba(37,99,235,0.4)] border border-white/10 bg-black/50 backdrop-blur-xl">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-red-600/30 opacity-0 group-hover/close:opacity-100 transition-opacity duration-500"></div>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="relative z-10">
                                <defs>
                                    <linearGradient id="closeGradientFinal" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#3b82f6" />
                                        <stop offset="100%" stopColor="#ef4444" />
                                    </linearGradient>
                                </defs>
                                <path d="M18 6L6 18M6 6L18 18" stroke="url(#closeGradientFinal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="text-[10px] font-black tracking-[0.3em] text-white/40 group-hover/close:text-white transition-colors uppercase">
                            Cerrar
                        </span>
                    </button>
                    {/* Scrollable Content Area - Fluid & Hardware Accelerated */}
                    <div 
                        className="absolute inset-0 overflow-y-auto px-6 md:px-12 flex flex-col items-center themed-scrollbar overscroll-contain"
                        style={{ scrollBehavior: 'smooth', paddingTop: '8rem', paddingBottom: '0', willChange: 'scroll-position' }}
                        onClick={() => setIsModalOpen(false)}
                    >
                        <style dangerouslySetInnerHTML={{ __html: `
                            .themed-scrollbar::-webkit-scrollbar { width: 6px; }
                            .themed-scrollbar::-webkit-scrollbar-track { background: transparent; }
                            .themed-scrollbar::-webkit-scrollbar-thumb { 
                                background: linear-gradient(to bottom, #2563eb, #ef4444); 
                                border-radius: 10px; 
                            }
                            .themed-scrollbar { scrollbar-width: thin; scrollbar-color: #2563eb transparent; -webkit-overflow-scrolling: touch; }
                        `}} />
                        
                        <article 
                            className="max-w-3xl w-full animate-in slide-in-from-bottom-12 duration-1000 relative transform-gpu"
                            style={{ willChange: 'transform' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Brand Header */}
                            <div className="flex flex-col items-center mb-16">
                                <div className="h-[4px] w-40 bg-gradient-to-r from-blue-600 to-red-600 mb-12 shadow-lg shadow-blue-500/20"></div>
                                <h1 className="text-4xl md:text-7xl font-black text-white text-center leading-[1.05] tracking-tighter mb-12">
                                    {fullArticle?.title}
                                </h1>
                                
                                {/* Bajada / Intro - More colorful/styled */}
                                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-900/10 via-transparent to-red-900/10 border border-white/5 mb-14 overflow-hidden group/intro">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-600 to-red-600"></div>
                                    <div className="text-xl md:text-2xl text-white font-medium italic opacity-95 leading-relaxed relative z-10">
                                        {fullArticle?.bajada}
                                    </div>
                                </div>
                            </div>

                            {/* Body Text - Compact spacing */}
                            <div className="space-y-10 text-gray-300 text-lg md:text-xl leading-relaxed font-light pb-10 text-justify md:text-left">
                                {fullArticle?.body}

                                {/* Final Brand Touch - Logo with Brightness Glow Animation */}
                                <div className="mt-12 flex flex-col items-center pb-4 overflow-visible">
                                    <style dangerouslySetInnerHTML={{ __html: `
                                        @keyframes finalLogoGlow {
                                            0% { filter: brightness(0.8) drop-shadow(0 0 0px rgba(37, 99, 235, 0)); transform: scale(0.95); opacity: 0; }
                                            100% { filter: brightness(1.3) drop-shadow(0 0 20px rgba(37, 99, 235, 0.6)); transform: scale(1); opacity: 1; }
                                        }
                                        .animate-final-logo {
                                            animation: finalLogoGlow 2.5s ease-out forwards;
                                            animation-delay: 0.5s;
                                        }
                                    `}} />
                                    <img 
                                        src="/logo.png" 
                                        alt="Createch Finish" 
                                        className="h-24 md:h-32 w-auto object-contain animate-final-logo opacity-0"
                                    />
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            )}
        </div>
    );
}
