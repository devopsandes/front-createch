import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://createch.com.ar'

    const routes = [
        '',
        '/contacto',
        '/lo-que-hacemos',
        '/quienes-somos',
        '/primerospasos',
        '/ventajas',
        '/life-trends',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return routes
}
