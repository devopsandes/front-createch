import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            { source: "/politica-de-privacidad", destination: "/legales/privacidad", permanent: true },
            { source: "/privacidad", destination: "/legales/privacidad", permanent: true },
            { source: "/privacy", destination: "/legales/privacidad", permanent: true },
            { source: "/privacy-policy", destination: "/legales/privacidad", permanent: true },
            { source: "/terminos", destination: "/legales/terminos", permanent: true },
            { source: "/terminos-y-condiciones", destination: "/legales/terminos", permanent: true },
            { source: "/terms", destination: "/legales/terminos", permanent: true },
        ];
    },
};

export default nextConfig;
