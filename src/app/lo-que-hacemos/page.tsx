import { Header } from "../components/Header";
import { ParticlesBackground } from "../components/ParticlesBackground";
import { Footer } from "../components/Footer";
import Image from "next/image";

export default function LoQueHacemos() {
    return (
        <div className="min-h-screen w-full bg-black text-white flex flex-col font-sans">
            <Header />
            <ParticlesBackground />

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col justify-center px-6 lg:px-24 shrink relative z-10 py-16 md:py-24">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
                        {/* Text Content (Right) */}
                        <div className="flex-1 text-left">
                            <div className="w-24 h-[3px] bg-gradient-to-r from-blue-600 to-red-600 mb-8 inline-block"></div>
                            <div className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">Punto de vista</div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
                                Lo que hacemos
                            </h1>
                            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                                En los últimos 30 años, ninguna tecnología ha prometido cambiarlo todo en una empresa, hasta que llegó la IA generativa. Hoy en día, la IA es el motor número uno de reinvención empresarial. Y la disponibilidad de los datos es uno de los factores más importantes para el éxito de la IA.
                            </p>
                        </div>

                        {/* Image Content (Left) */}
                        <div className="flex-1 w-full max-w-md mx-auto relative h-[350px] md:h-[450px]">
                            <div className="w-full h-full relative bg-white rounded-2xl overflow-hidden border-2 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center justify-center p-6">
                                <Image
                                    src="/image-robot.jpg"
                                    alt="Ilustración IA"
                                    fill
                                    className="object-contain p-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
