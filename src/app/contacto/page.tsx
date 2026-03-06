"use client";

import { useState } from "react";
import { Header } from "../components/Header";
import { ParticlesBackground } from "../components/ParticlesBackground";
import { Footer } from "../components/Footer";
import { User, Phone, Mail, MessageSquare, Send } from "lucide-react";

export default function Contacto() {
    const [formData, setFormData] = useState({
        nombre: "",
        celular: "",
        email: "",
        consulta: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage({ type: "", text: "" });

        try {
            const response = await fetch(
                `https://bootcamp.createch.com.ar/api/contacto`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (response.ok) {
                setMessage({ type: "success", text: "¡Mensaje enviado con éxito! Te contactaremos pronto." });
                setFormData({ nombre: "", celular: "", email: "", consulta: "" }); // Clear form
            } else {
                setMessage({ type: "error", text: data.error || "Error al enviar el mensaje. Inténtalo de nuevo." });
            }
        } catch (error) {
            console.error(error);
            setMessage({ type: "error", text: "No se pudo conectar al servidor. Asegúrate de que el backend esté corriendo." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen md:h-screen w-full bg-black text-white flex flex-col font-sans overflow-y-auto md:overflow-hidden scroll-smooth">
            <Header />
            <ParticlesBackground />

            {/* Main Content Area */}
            <main className="flex-1 flex items-center justify-center px-6 md:px-12 lg:px-24 shrink relative z-10 py-16 md:py-6 lg:py-0 mt-20 md:mt-0">
                <div className="w-full max-w-2xl bg-black/40 backdrop-blur-2xl border border-white/5 p-6 md:p-10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group animate-in fade-in slide-in-from-bottom-12 duration-1000 ease-out flex flex-col items-center">
                    
                    {/* Top Accent Gradient Line */}
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 shadow-[0_4px_20px_rgba(37,99,235,0.4)]"></div>

                    <div className="text-center mb-10">
                        <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase mb-4">
                            Hablemos
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight">
                            Dejanos tu consulta
                        </h1>
                        <p className="text-gray-400 mt-4 text-sm md:text-base font-light">
                            Estamos listos para impulsar tu próximo gran paso.
                        </p>
                    </div>

                    <form className="w-full space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Nombre */}
                            <div className="space-y-2 group/field">
                                <label htmlFor="nombre" className="text-[11px] font-black uppercase tracking-widest text-gray-500 group-focus-within/field:text-blue-500 transition-colors flex items-center gap-2 ml-1">
                                    <User className="w-3 h-3" /> Nombre
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600 text-sm"
                                        placeholder="Tu nombre completo"
                                    />
                                </div>
                            </div>
                            
                            {/* Celular */}
                            <div className="space-y-2 group/field">
                                <label htmlFor="celular" className="text-[11px] font-black uppercase tracking-widest text-gray-500 group-focus-within/field:text-red-500 transition-colors flex items-center gap-2 ml-1">
                                    <Phone className="w-3 h-3" /> Celular
                                </label>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        id="celular"
                                        value={formData.celular}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600 text-sm"
                                        placeholder="Tu número de contacto"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-2 group/field">
                            <label htmlFor="email" className="text-[11px] font-black uppercase tracking-widest text-gray-500 group-focus-within/field:text-blue-500 transition-colors flex items-center gap-2 ml-1">
                                <Mail className="w-3 h-3" /> Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600 text-sm"
                                placeholder="tu@email.com"
                            />
                        </div>

                        {/* Consulta */}
                        <div className="space-y-2 group/field">
                            <label htmlFor="consulta" className="text-[11px] font-black uppercase tracking-widest text-gray-500 group-focus-within/field:text-red-500 transition-colors flex items-center gap-2 ml-1">
                                <MessageSquare className="w-3 h-3" /> Tu consulta
                            </label>
                            <textarea
                                id="consulta"
                                rows={4}
                                value={formData.consulta}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600 text-sm resize-none"
                                placeholder="¿En qué podemos ayudarte hoy?"
                            ></textarea>
                        </div>

                        {/* Status Messages */}
                        {message.text && (
                            <div className={`p-4 rounded-xl text-sm animate-in fade-in slide-in-from-top-4 duration-500 ${
                                message.type === 'success' 
                                ? 'bg-green-900/20 text-green-400 border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.1)]' 
                                : 'bg-red-900/20 text-red-400 border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.1)]'
                            }`}>
                                <p className="flex items-center gap-2 font-medium">
                                    {message.type === 'success' ? '✓' : '⚠'} {message.text}
                                </p>
                            </div>
                        )}

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full group/btn md:w-auto relative px-10 py-4 font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 ${
                                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-95'
                                }`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-red-600 to-blue-600 bg-[length:200%_100%] animate-gradient-fast rounded-full"></div>
                                <div className="absolute inset-[2px] bg-black rounded-full group-hover/btn:opacity-0 transition-opacity duration-500"></div>
                                <span className="relative z-10 flex items-center justify-center gap-3 text-white group-hover/btn:text-white transition-colors">
                                    {isSubmitting ? (
                                        <>Cargando...</>
                                    ) : (
                                        <>
                                            Enviar Mensaje
                                            <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </main>

            <Footer />

            <style jsx global>{`
                @keyframes gradient-fast {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient-fast {
                    animation: gradient-fast 3s ease infinite;
                }
            `}</style>
        </div>
    );
}
