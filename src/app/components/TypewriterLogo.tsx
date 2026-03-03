"use client";

import { useEffect, useState } from "react";

export function TypewriterLogo({ isActive }: { isActive?: boolean }) {
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const fullText = "createch";

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                setText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
                setIsTyping(false);
            }
        }, 150);

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <div className="flex items-center gap-4 w-[280px] md:w-[350px]">
            <img src="/logo.png" alt="Createch Logo" className="h-14 md:h-24 w-auto object-contain shrink-0" />
            <div className="relative text-white font-black text-3xl md:text-4xl tracking-tighter flex flex-col justify-center h-[36px] md:h-[48px] shrink-0">
                <span>{text}</span>
                {/* Estela de Partículas (Particle Trail Underline) */}
                {isActive && !isTyping && (
                    <div className="absolute -bottom-1 left-0 w-full h-[8px] flex">
                        {/* Brillo disimulado de fondo */}
                        <div className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 bg-gradient-to-r from-blue-600 via-purple-500 to-red-500 blur-[3px] opacity-60"></div>

                        {/* Partículas esparcidas para dar efecto de estela */}
                        <div className="absolute inset-0 w-full h-full">
                            <div className="absolute left-[5%] top-[10%] w-[3px] h-[3px] bg-blue-500 rounded-full blur-[0.5px] animate-pulse" style={{ animationDelay: '0s' }}></div>
                            <div className="absolute left-[15%] bottom-[10%] w-[3px] h-[3px] bg-blue-400 rounded-full animate-pulse blur-[0.5px]" style={{ animationDelay: '0.8s' }}></div>

                            <div className="absolute left-[30%] top-[40%] w-[4px] h-[4px] bg-indigo-500 rounded-full blur-[1px] animate-[pulse_2s_infinite]" style={{ animationDelay: '0.4s' }}></div>
                            <div className="absolute left-[45%] bottom-[0%] w-[2px] h-[2px] bg-purple-400 rounded-full animate-[pulse_1.5s_infinite]" style={{ animationDelay: '0.2s' }}></div>

                            <div className="absolute left-[60%] top-[20%] w-[4px] h-[4px] bg-purple-500 rounded-full blur-[1px] animate-[pulse_2.5s_infinite]" style={{ animationDelay: '1s' }}></div>

                            <div className="absolute left-[75%] bottom-[20%] w-[3px] h-[3px] bg-pink-500 rounded-full blur-[0.5px] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                            <div className="absolute left-[85%] top-[0%] w-[2px] h-[2px] bg-red-400 rounded-full animate-[pulse_1s_infinite]" style={{ animationDelay: '0.9s' }}></div>
                            <div className="absolute left-[95%] bottom-[10%] w-[4px] h-[4px] bg-red-500 rounded-full blur-[1px] animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
