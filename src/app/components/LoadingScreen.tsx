"use client";

import { useEffect, useState } from "react";
import { ParticlesBackground } from "./ParticlesBackground";

export function LoadingScreen() {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center overflow-hidden transition-opacity duration-500">
            {/* Reuse Particles Background */}
            <div className="absolute inset-0 opacity-20">
                <ParticlesBackground />
            </div>

            {/* Planet Loading Animation */}
            <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-4">
                    {/* The Planet - Pulsing Zoom Animation */}
                    <div className="relative mb-6">
                        {/* Multiple Layer Glow for "Notorious" effect */}
                        <div className="absolute inset-[-20px] rounded-full bg-blue-600/20 blur-[60px] animate-pulse" />
                        <div className="absolute inset-[-40px] rounded-full bg-red-600/10 blur-[100px] animate-pulse delay-700" />
                        
                        <img 
                            src="/logo.png" 
                            alt="Loading..." 
                            className="w-32 h-32 md:w-52 md:h-52 object-contain filter drop-shadow-[0_0_30px_rgba(37,99,235,0.6)] animate-[loading-pulse-zoom_2s_ease-in-out_infinite] relative z-10"
                        />
                    </div>
                    
                    {/* Brand Name */}
                    <span className="text-white font-black text-5xl md:text-7xl tracking-tighter drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                        createch
                    </span>
                </div>

                {/* Loading bar at the bottom */}
                <div className="flex flex-col items-center gap-2 mt-4">
                    <div className="h-[3px] w-48 md:w-64 bg-white/5 rounded-full overflow-hidden relative border border-white/5">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-white to-red-600 animate-[loading-bar_2s_ease-in-out_infinite]" />
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes loading-pulse-zoom {
                    0%, 100% { transform: scale(1); filter: brightness(1) drop-shadow(0 0 20px rgba(37,99,235,0.4)); }
                    50% { transform: scale(1.15); filter: brightness(1.4) drop-shadow(0 0 35px rgba(220,38,38,0.5)); }
                }
                @keyframes loading-bar {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </div>
    );
}
