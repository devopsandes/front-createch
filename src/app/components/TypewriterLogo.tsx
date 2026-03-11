"use client";

import { useEffect, useState } from "react";

export function TypewriterLogo({ isActive }: { isActive?: boolean }) {
    const [text, setText] = useState("");
    const [phase, setPhase] = useState<"typing" | "underlining" | "pulsing">("typing");
    const fullText = "createch";

    useEffect(() => {
        if (phase === "typing") {
            setText("");
            let i = 0;
            const typingInterval = setInterval(() => {
                i++;
                setText(fullText.slice(0, i));
                if (i === fullText.length) {
                    clearInterval(typingInterval);
                    setTimeout(() => setPhase("underlining"), 200);
                }
            }, 150);
            return () => clearInterval(typingInterval);
        } else if (phase === "underlining") {
            const timeout = setTimeout(() => {
                setPhase("pulsing");
            }, 600); // 400ms for draw + small pause
            return () => clearTimeout(timeout);
        } else if (phase === "pulsing") {
            const timeout = setTimeout(() => {
                setPhase("typing");
            }, 5200); // 5s pulse + pause
            return () => clearTimeout(timeout);
        }
    }, [phase]);

    const pulseClass = phase === "pulsing" ? "animate-createch-pulse" : "";
    const showUnderline = phase === "underlining" || phase === "pulsing";

    return (
        <div className="flex items-center gap-2 md:gap-4 w-auto shrink-0">
            <img src="/logo.png" alt="Createch Logo" className="h-8 md:h-24 w-auto object-contain shrink-0" />
            <div className={`relative text-white font-black text-[14px] xs:text-lg md:text-3xl lg:text-4xl tracking-tighter flex flex-col justify-center min-w-max shrink-0 ${pulseClass}`}>
                <span className="whitespace-nowrap">{text}</span>
                {/* Underline with draw-in animation */}
                {isActive && showUnderline && (
                    <div className="absolute -bottom-1 left-0 w-full h-[4px]">
                        <div className="w-full h-full bg-gradient-to-r from-blue-600 via-purple-500 to-red-500 rounded-full opacity-90 animate-underline-draw" />
                    </div>
                )}
            </div>
        </div>
    );
}
