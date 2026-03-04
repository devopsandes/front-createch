export const dictionaries = {
    es: {
        nav: {
            whatWeDo: "Lo que hacemos",
            contact: "Contacto",
            about: "Quiénes somos",
            ourWork: "Nuestros trabajos"
        },
        hero: {
            juntos: "Juntos, ",
            nos: "nos",
            description: {
                intro: "Juntos impulsamos tu crecimiento.",
                painPoints: [
                    "Ventas que se pierden por procesos manuales.",
                    "Atención al cliente saturada.",
                    "Cobranzas desordenadas.",
                    "Gestión interna fragmentada."
                ],
                p1: "En Createch trabajamos donde realmente importa: en el corazón operativo de tu negocio. Analizamos, desarrollamos e implementamos soluciones tecnológicas que automatizan procesos, integran sistemas y aceleran resultados.",
                p2: "Automatizamos tareas repetitivas, centralizamos información y transformamos la estructura interna de tu empresa en un sistema ágil, eficiente y listo para escalar."
            },
            btn: "Descubrí lo qué hacemos",
            phrases: [
                { prefix: "Createch impulsa tu ", word: "evolución" },
                { prefix: "Automatizá con ", word: "CreaSales" },
                { prefix: "CreaSales transforma tu ", word: "gestión" },
                { prefix: "Gestión inteligente, resultados ", word: "reales" },
                { prefix: "Tu empresa, más ", word: "inteligente" },
                { prefix: "Juntos impulsamos tu ", word: "crecimiento" },
                { prefix: "Escalá con inteligencia ", word: "artificial" }
            ]
        },
        cards: {
            tag: {
                estudio: "Estudio",
                puntoDeVista: "Punto de vista"
            },
            c1: "Reinvención en la era de la IA generativa",
            c2: "Technology Vision 2025",
            c3: "Accenture Life Trends 2025",
            c4: "IA para todos"
        },
        quienesSomos: {
            tag: "NUESTRA ESENCIA",
            title: "Quiénes somos",
            description: "En Createch, somos un equipo apasionado por la tecnología y la innovación. Nos especializamos en transformar la manera en que las empresas operan, utilizando inteligencia artificial y soluciones de software a medida para escalar resultados y lograr una gestión inteligente."
        },
        footer: {
            rights: "© 2026 Createch. Todos los derechos reservados."
        }
    },
    en: {
        nav: {
            whatWeDo: "What we do",
            contact: "Contact",
            about: "About us",
            ourWork: "Our work"
        },
        hero: {
            juntos: "Together, ",
            nos: "we",
            description: {
                intro: "Together we drive your growth.",
                painPoints: [
                    "Sales lost due to manual processes.",
                    "Saturated customer service.",
                    "Disorganized collections.",
                    "Fragmented internal management."
                ],
                p1: "At Createch we work where it really matters: in the operational heart of your business. We analyze, develop, and implement technological solutions that automate processes, integrate systems, and accelerate results.",
                p2: "We automate repetitive tasks, centralize information, and transform your company's internal structure into an agile, efficient system ready to scale."
            },
            btn: "Discover what we do",
            phrases: [
                { prefix: "Createch drives your ", word: "evolution" },
                { prefix: "Automate with ", word: "CreaSales" },
                { prefix: "CreaSales transforms your ", word: "management" },
                { prefix: "Smart management, real ", word: "results" },
                { prefix: "Your company, ", word: "smarter" },
                { prefix: "Together we boost your ", word: "growth" },
                { prefix: "Scale with artificial ", word: "intelligence" }
            ]
        },
        cards: {
            tag: {
                estudio: "Study",
                puntoDeVista: "Point of view"
            },
            c1: "Reinvention in the era of generative AI",
            c2: "Technology Vision 2025",
            c3: "Accenture Life Trends 2025",
            c4: "AI for everyone"
        },
        quienesSomos: {
            tag: "OUR ESSENCE",
            title: "About us",
            description: "At Createch, we are a passionate team driven by technology and innovation. We specialize in transforming how businesses operate, leveraging artificial intelligence and custom software solutions to scale results and achieve smart management."
        },
        footer: {
            rights: "© 2026 Createch. All rights reserved."
        }
    },
    pt: {
        nav: {
            whatWeDo: "O que fazemos",
            contact: "Contato",
            about: "Quem somos",
            ourWork: "Nosso trabalho"
        },
        hero: {
            juntos: "Juntos, ",
            nos: "nos",
            description: {
                intro: "Juntos impulsionamos seu crescimento.",
                painPoints: [
                    "Vendas perdidas devido a processos manuais.",
                    "Atendimento ao cliente saturado.",
                    "Cobranças desorganizadas.",
                    "Gestão interna fragmentada."
                ],
                p1: "Na Createch, trabalhamos onde realmente importa: no coração operacional do seu negócio. Analisamos, desenvolvemos e implementamos soluções tecnológicas que automatizam processos, integram sistemas e aceleram resultados.",
                p2: "Automatizamos tarefas repetitivas, centralizamos informações e transformamos a estrutura interna da sua empresa em um sistema ágil, eficiente e pronto para escalar."
            },
            btn: "Descubra o que fazemos",
            phrases: [
                { prefix: "Createch impulsiona sua ", word: "evolução" },
                { prefix: "Automatize com ", word: "CreaSales" },
                { prefix: "CreaSales transforma sua ", word: "gestão" },
                { prefix: "Gestão inteligente, resultados ", word: "reais" },
                { prefix: "Sua empresa, mais ", word: "inteligente" },
                { prefix: "Juntos impulsionamos seu ", word: "crescimento" },
                { prefix: "Escale com inteligência ", word: "artificial" }
            ]
        },
        cards: {
            tag: {
                estudio: "Estudo",
                puntoDeVista: "Ponto de vista"
            },
            c1: "Reinvenção na era da IA generativa",
            c2: "Technology Vision 2025",
            c3: "Accenture Life Trends 2025",
            c4: "IA para todos"
        },
        quienesSomos: {
            tag: "NOSSA ESSÊNCIA",
            title: "Quem somos",
            description: "Na Createch, somos uma equipe apaixonada pela tecnologia e inovação. Somos especializados em transformar a maneira como as empresas operam, utilizando inteligência artificial e soluções de software sob medida para escalar resultados e alcançar uma gestão inteligente."
        },
        footer: {
            rights: "© 2026 Createch. Todos os direitos reservados."
        }
    }
};

export type Language = 'es' | 'en' | 'pt';
export type Dictionary = typeof dictionaries['es'];
