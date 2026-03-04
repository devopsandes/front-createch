"use client";

import { useEffect, useState } from "react";

export function PainPointsCarousel({ points }: { points: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % points.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [points.length]);

    return (
        <div className="h-[56px] overflow-hidden relative w-full mb-0 md:mb-1">
            <div
                className="transition-transform duration-700 ease-in-out flex w-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {points.map((point, idx) => (
                    <div key={idx} className="h-[56px] flex items-center pr-2 shrink-0 w-full">
                        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-blue-500 to-red-500 mr-4 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
                        <span className="leading-tight text-base md:text-[1.1rem] text-blue-100/90 font-medium">
                            {point}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
