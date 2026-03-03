"use client";

import { useEffect, useRef } from "react";

export function ParticlesBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas to full window size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Particle class
        class Particle {
            x: number;
            y: number;
            size: number;
            color: string;

            constructor() {
                this.x = Math.random() * canvas!.width;
                // Start mainly in the hero section height (top 75vh)
                this.y = Math.random() * (canvas!.height * 0.75);
                // Smaller background particles
                this.size = Math.random() * 2.5 + 0.5;

                // Randomly choose between blue and red (the logo colors)
                const isBlue = Math.random() > 0.5;
                // Blue: rgb(37, 99, 235), Red: rgb(220, 38, 38)
                // Lower opacity to keep them subtle
                this.color = isBlue
                    ? `rgba(37, 99, 235, ${Math.random() * 0.4 + 0.1})`
                    : `rgba(220, 38, 38, ${Math.random() * 0.4 + 0.1})`;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.closePath();
            }
        }

        // Create particles array, using a fixed number of static particles
        const particlesArray: Particle[] = [];
        // Adjust number of particles back to a moderate-high density
        const numberOfParticles = Math.min(Math.floor(window.innerWidth / 3), 350);

        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }

        // Draw particles once (static, no animation)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].draw();
        }

        // Redraw on resize to reposition them appropriately
        const handleResize = () => {
            resizeCanvas();
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // We recreate them so they spread across the new screen size properly
            particlesArray.length = 0;
            const newParticleCount = Math.min(Math.floor(window.innerWidth / 3), 350);
            for (let i = 0; i < newParticleCount; i++) {
                particlesArray.push(new Particle());
            }

            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].draw();
            }
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40 mix-blend-screen"
        />
    );
}
