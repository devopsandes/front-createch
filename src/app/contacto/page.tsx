"use client";

import { useState } from "react";
import { Header } from "../components/Header";
import { ParticlesBackground } from "../components/ParticlesBackground";
import { Footer } from "../components/Footer";

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
        <div className="h-screen w-full bg-black text-white flex flex-col font-sans overflow-hidden">
            <Header />
            <ParticlesBackground />

            {/* Main Content Area */}
            <main className="flex-1 flex items-center justify-center px-6 lg:px-24 shrink relative z-10 py-24 lg:py-12">
                <div className="w-full max-w-2xl bg-gradient-to-br from-[#120718] to-black border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden group">

                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-600 to-red-600"></div>

                    <h1 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
                        Dejanos tu consulta
                    </h1>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="nombre" className="text-sm font-medium text-gray-400">Nombre</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Tu nombre completo"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="celular" className="text-sm font-medium text-gray-400">Celular</label>
                                <input
                                    type="tel"
                                    id="celular"
                                    value={formData.celular}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                                    placeholder="Tu número"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                placeholder="tu@email.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="consulta" className="text-sm font-medium text-gray-400">Consulta</label>
                            <textarea
                                id="consulta"
                                rows={4}
                                value={formData.consulta}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
                                placeholder="¿En qué te podemos ayudar?"
                            ></textarea>
                        </div>

                        {message.text && (
                            <div className={`p-4 rounded-sm text-sm ${message.type === 'success' ? 'bg-green-900/30 text-green-400 border border-green-800' : 'bg-red-900/30 text-red-400 border border-red-800'}`}>
                                {message.text}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`mt-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white font-bold uppercase tracking-wider text-sm rounded-sm transition-opacity w-full sm:w-auto ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}
