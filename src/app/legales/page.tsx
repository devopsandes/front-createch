import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Legales — Createch",
    description: "Documentos legales de Createch: Política de Privacidad y Términos y Condiciones.",
};

const documentos = [
    {
        href: "/legales/privacidad",
        title: "Política de Privacidad",
        description:
            "Cómo recolectamos, utilizamos y protegemos tus datos personales, conforme a la Ley 25.326.",
    },
    {
        href: "/legales/terminos",
        title: "Términos y Condiciones",
        description:
            "Condiciones de uso del sitio web y los canales de contacto de Createch.",
    },
];

export default function LegalesIndex() {
    return (
        <div>
            <header className="mb-10 border-b border-white/10 pb-8">
                <div className="w-full h-[3px] bg-gradient-to-r from-blue-600 via-purple-500 to-red-500 mb-6" />
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-4">
                    Legales
                </h1>
                <p className="text-gray-300 leading-relaxed">
                    Documentos que rigen el uso del sitio y el tratamiento de datos personales por parte de Createch.
                </p>
            </header>

            <ul className="grid gap-4 sm:grid-cols-2">
                {documentos.map((doc) => (
                    <li key={doc.href}>
                        <Link
                            href={doc.href}
                            className="block h-full rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-blue-500/40 transition-colors p-6"
                        >
                            <h2 className="text-xl font-semibold text-white mb-2">{doc.title}</h2>
                            <p className="text-sm text-gray-400 leading-relaxed">{doc.description}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
