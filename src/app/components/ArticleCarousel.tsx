"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface ArticleSlide {
    heading?: string;
    content: string[];
}

interface ArticleCarouselProps {
    slides: ArticleSlide[];
}

export function ArticleCarousel({ slides }: ArticleCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    if (!slides || slides.length === 0) return null;

    const currentSlide = slides[currentIndex];

    return (
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center select-none">
            {/* Carousel Content */}
            <div className="w-full min-h-[350px] md:min-h-[300px] flex items-center p-8 bg-gradient-to-br from-[#120718] to-black border border-white/10 rounded-sm shadow-2xl relative overflow-hidden group">
                {/* Decorative Gradient Line */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-600 to-red-600"></div>

                <div
                    key={currentIndex}
                    className="w-full text-left animate-in fade-in slide-in-from-right-8 duration-500 ease-out"
                >
                    {currentSlide.heading && (
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            {currentSlide.heading}
                        </h2>
                    )}

                    <div className="space-y-6">
                        {currentSlide.content.map((paragraph, idx) => (
                            <p key={idx} className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between w-full mt-6 px-4">
                <button
                    onClick={prevSlide}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group cursor-pointer"
                >
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors border border-white/10">
                        <ChevronLeft className="w-5 h-5" />
                    </div>
                    <span className="hidden sm:inline uppercase text-sm tracking-wider font-bold">Anterior</span>
                </button>

                <div className="flex gap-3">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                                    ? "w-8 bg-gradient-to-r from-blue-500 to-purple-500"
                                    : "w-2 bg-gray-600 hover:bg-gray-400"
                                }`}
                            aria-label={`Ir a la diapositiva ${idx + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group cursor-pointer"
                >
                    <span className="hidden sm:inline uppercase text-sm tracking-wider font-bold">Siguiente</span>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors border border-white/10">
                        <ChevronRight className="w-5 h-5" />
                    </div>
                </button>
            </div>
        </div>
    );
}
