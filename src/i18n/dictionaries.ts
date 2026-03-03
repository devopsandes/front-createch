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
            paragraph: "La cadena de suministro que necesitamos, los efectos especiales que nos sorprenden, los estadios que llenamos, la comida que comemos, la ropa que nos ponemos, los coches que conducimos, las casas donde vivimos, las vacaciones que disfrutamos, los árboles que plantamos: juntos, podemos reinventar cualquier cosa.",
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
            paragraph: "The supply chain we need, the special effects that amaze us, the stadiums we fill, the food we eat, the clothes we wear, the cars we drive, the houses we live in, the vacations we enjoy, the trees we plant: together, we can reinvent anything.",
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
            paragraph: "A cadeia de abastecimento de que necessitamos, os efeitos especiais que nos surpreendem, os estádios que lotamos, a comida que comemos, a roupa que vestimos, os carros que conduzimos, as casas onde vivemos, as férias de que desfrutamos, as árvores que plantamos: juntos, podemos reinventar tudo.",
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
