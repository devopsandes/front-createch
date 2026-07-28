"use client";

import { useEffect, useState } from "react";

export function ScrollIndicator() {
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const main = document.getElementById("legales-main");
        if (!main) return;

        const update = () => {
            const max = main.scrollHeight - main.clientHeight;
            if (max <= 0) {
                setProgress(0);
                setVisible(false);
                return;
            }
            setVisible(true);
            setProgress(Math.min(1, Math.max(0, main.scrollTop / max)));
        };

        update();
        main.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            main.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    const pct = progress * 100;

    return (
        <div
            aria-hidden="true"
            className={`hidden md:block fixed right-8 top-1/2 -translate-y-1/2 h-[50vh] w-[2px] pointer-events-none z-30 transition-opacity duration-300 ${
                visible ? "opacity-100" : "opacity-0"
            }`}
        >
            <div className="relative w-full h-full bg-white/10 rounded-full overflow-visible">
                <div
                    className="absolute top-0 left-0 w-full rounded-full bg-gradient-to-b from-blue-500 via-purple-500 to-red-500"
                    style={{ height: `${pct}%` }}
                />
                <div
                    className="absolute -left-[5px] w-3 h-3 rounded-full bg-white shadow-[0_0_12px_rgba(168,85,247,0.9)]"
                    style={{ top: `calc(${pct}% - 6px)` }}
                />
            </div>
        </div>
    );
}
