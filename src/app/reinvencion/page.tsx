import { Header } from "../components/Header";
import { ParticlesBackground } from "../components/ParticlesBackground";
import { Footer } from "../components/Footer";
import { ArticleCarousel, ArticleSlide } from "../components/ArticleCarousel";

const articleSlides: ArticleSlide[] = [
    {
        heading: "Reinventando el panorama",
        content: [
            "Muchas organizaciones están dispuestas a reinventarse; pero algunas están más avanzadas que otras.",
            "Un pequeño número de \"Reinventores\" (9%) ya ha alcanzado el objetivo de desarrollar la capacidad de reinvención continua. Están avanzando rápidamente en la ejecución de su estrategia y se proponen definir una nueva frontera de rendimiento con la tecnología como eje central de su viaje de reinvención."
        ]
    },
    {
        content: [
            "Entre las empresas más grandes, especialmente aquellas con ingresos superiores a los 50 000 millones de dólares, el número de reinventores se cuadruplicó en el último año. Los gigantes de la industria no se quedan quietos. A diferencia de la revolución digital, las empresas más grandes están tomando la delantera desde el principio, aprovechando su importante inversión en la creación de sus núcleos y recursos digitales. Dos sectores registraron aumentos de dos dígitos en el número de reinventores: en el caso del software y las plataformas, la cifra ha subido 34 puntos porcentuales, hasta el 43%, y en las ciencias de la vida, 13 puntos porcentuales, hasta el 20%."
        ]
    },
    {
        content: [
            "La mayoría de las organizaciones aún se encuentran al principio de su viaje de reinvención, y pocas organizaciones se están reinventando a gran escala en la actualidad. Al igual que el año pasado, la mayoría (el 81%) son «transformadores». Los transformadores deberían seguir funcionando. Están tomando muchas de las medidas adecuadas para reinventarse; sin embargo, es menos probable que desarrollen capacidades sostenibles para reinventarse de forma continua y es posible que estén perdiendo la velocidad y la rentabilidad de una estrategia conectada de reinvención. Además, observamos una diferencia en el rendimiento financiero, ya que Reinventors sigue adelante. El 10% restante de los «optimizadores» son organizaciones en las que la reinvención no es actualmente una prioridad.",
            "Los reinventores están creando un imperativo para que otros actúen."
        ]
    },
    {
        heading: "La reinvención es la estrategia del éxito",
        content: [
            "Prevemos que en los próximos 12 a 24 meses habrá un aumento significativo en el número de empresas que adopten la IA generativa como catalizador de la reinvención.",
            "¿Por qué la IA generativa es diferente de otras innovaciones tecnológicas que hemos visto en los últimos años? Esta tecnología tiene el poder de reinventar todas las facetas de una organización. Esto es nuevo. A través de nuestro trabajo, vemos evidencia empírica de que esta tendencia ya está en marcha, sobre todo porque la IA generativa revoluciona rápidamente todos los sectores."
        ]
    },
    {
        heading: "La disrupción encuentra a su igual",
        content: [
            "Las organizaciones siguen operando en un panorama inestable. El índice anual Pulse of Change de Accenture reveló que la tasa de cambio que afecta a las empresas ha aumentado de manera constante desde 2019: un 183% en los últimos cuatro años. En respuesta, el 83% de las organizaciones ha acelerado la ejecución de su transformación desde el año pasado."
        ]
    }
];

export default function Reinvencion() {
    return (
        <div className="min-h-screen w-full bg-black text-white flex flex-col font-sans overflow-hidden">
            <Header />
            <ParticlesBackground />

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col justify-center px-6 lg:px-24 shrink relative z-10 py-12">
                <article className="w-full max-w-4xl mx-auto flex flex-col items-center">
                    <div className="w-full text-center mb-8 relative z-20">
                        <div className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">Estudio</div>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white px-4">
                            Reinvención en la era de la IA generativa
                        </h1>
                    </div>

                    <ArticleCarousel slides={articleSlides} />
                </article>
            </main>

            <Footer />
        </div>
    );
}
