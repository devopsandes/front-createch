"use client";

import { useEffect, useRef } from "react";

export function ParticlesBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;


        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Particle class
        class Particle {
            x!: number;
            y!: number;
            z!: number;
            prevZ!: number;
            size!: number;
            color!: string;
            speed!: number;

            constructor() {
                this.reset();
            }

            reset() {
                // Random position in 3D space (-canvas.width to canvas.width)
                this.x = (Math.random() - 0.5) * canvas!.width * 2;
                this.y = (Math.random() - 0.5) * canvas!.height * 2;
                this.z = Math.random() * canvas!.width;
                this.prevZ = this.z;
                this.size = 0.5;

                // Brand colors: Blue: rgb(59, 130, 246) [brighter], Red: rgb(220, 38, 38)
                const isBlue = Math.random() > 0.5;
                this.color = isBlue ? "59, 130, 246" : "220, 38, 38";
                this.speed = Math.random() * 1.5 + 0.5;
            }

            update() {
                this.prevZ = this.z;
                this.z -= this.speed;
                if (this.z <= 0) {
                    this.reset();
                    this.z = canvas!.width;
                    this.prevZ = this.z;
                }
            }

            draw() {
                if (!ctx) return;
                
                // Perspective projection
                const sx = (this.x / this.z) * (canvas!.width / 2) + canvas!.width / 2;
                const sy = (this.y / this.z) * (canvas!.height / 2) + canvas!.height / 2;
                
                const px = (this.x / this.prevZ) * (canvas!.width / 2) + canvas!.width / 2;
                const py = (this.y / this.prevZ) * (canvas!.height / 2) + canvas!.height / 2;

                // Make radius even larger as it gets closer
                const radius = (1 - this.z / canvas!.width) * 8;
                const opacity = (1 - this.z / canvas!.width) * 0.9;

                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(sx, sy);
                ctx.strokeStyle = `rgba(${this.color}, ${opacity})`;
                ctx.lineWidth = radius;
                ctx.lineCap = "round";
                ctx.stroke();
            }
        }

        const redParticles: Particle[] = [];
        const blueParticles: Particle[] = [];
        const particleCount = Math.min(Math.floor(window.innerWidth / 4), 400);

        for (let i = 0; i < particleCount; i++) {
            const p = new Particle();
            if (p.color === "59, 130, 246") blueParticles.push(p);
            else redParticles.push(p);
        }

        let animationFrameId: number;
        let lastTime = 0;
        const fpsLimit = 60;
        const fpsInterval = 1000 / fpsLimit;

        const drawBatch = (batch: Particle[]) => {
            if (batch.length === 0) return;
            
            // Optimization: Set strokeStyle once per batch
            const color = batch[0].color;
            ctx.lineCap = "round";

            for (const p of batch) {
                const zFactor = 1 - p.z / canvas!.width;
                const radius = zFactor * 8;
                const opacity = zFactor * 0.9;

                const sx = (p.x / p.z) * (canvas!.width / 2) + canvas!.width / 2;
                const sy = (p.y / p.z) * (canvas!.height / 2) + canvas!.height / 2;
                const px = (p.x / p.prevZ) * (canvas!.width / 2) + canvas!.width / 2;
                const py = (p.y / p.prevZ) * (canvas!.height / 2) + canvas!.height / 2;

                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(sx, sy);
                ctx.strokeStyle = `rgba(${color}, ${opacity})`;
                ctx.lineWidth = radius;
                ctx.stroke();
            }
        };

        const animate = (timestamp: number) => {
            animationFrameId = requestAnimationFrame(animate);

            // Throttle FPS to save GPU
            const elapsed = timestamp - lastTime;
            if (elapsed < fpsInterval) return;
            lastTime = timestamp - (elapsed % fpsInterval);

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Update all
            for (const p of blueParticles) p.update();
            for (const p of redParticles) p.update();

            // Draw in batches to minimize state changes
            drawBatch(blueParticles);
            drawBatch(redParticles);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-100 mix-blend-screen"
        />
    );
}
