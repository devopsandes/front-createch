import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Términos y Condiciones — Createch",
    description:
        "Términos y Condiciones de uso del sitio web y canales de contacto de Createch, conforme a la legislación argentina.",
};

export default function TerminosCondiciones() {
    return (
        <article className="text-gray-300 leading-relaxed">
            <header className="mb-10 border-b border-white/10 pb-8">
                <div className="w-full h-[3px] bg-gradient-to-r from-blue-600 via-purple-500 to-red-500 mb-6" />
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-4">
                    Términos y Condiciones de Uso
                </h1>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-400 font-semibold mb-4">
                    Createch — Deep Connection
                </p>
                <p className="text-sm text-gray-400">
                    <span className="text-white font-semibold">Última actualización:</span> 28 de julio de 2026
                </p>
                <p className="mt-6 text-xs text-gray-500 italic border-l-2 border-white/10 pl-4">
                    Documento oficial en español. Traducciones no oficiales bajo pedido a{" "}
                    <a href="mailto:contact@creasales.com" className="text-blue-400 hover:text-blue-300 underline">
                        contact@creasales.com
                    </a>
                    .
                </p>
            </header>

            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4">1. Aceptación</h2>
                <p className="mb-4">
                    El acceso y uso del sitio web <strong className="text-white">https://www.creasales.com</strong> y de los canales
                    de contacto de <strong className="text-white">Crea Tech S.A.S.</strong>, CUIT{" "}
                    <strong className="text-white">30-71918562-9</strong>, con domicilio en{" "}
                    <strong className="text-white">Avenida San Martín 779, Ciudad de Mendoza, Argentina</strong> (en adelante,
                    &quot;Createch&quot;), implica la aceptación plena de estos Términos y Condiciones y de la{" "}
                    <Link href="/legales/privacidad" className="text-blue-400 hover:text-blue-300 underline">
                        Política de Privacidad
                    </Link>
                    .
                </p>
                <p>Si usted no acepta estos términos, debe abstenerse de utilizar el sitio y sus servicios.</p>
            </section>

            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4">2. Objeto</h2>
                <p className="mb-4">
                    Createch es una empresa de tecnología dedicada al desarrollo e implementación de soluciones de automatización de
                    procesos, integración de sistemas, sistemas comerciales y asistentes conversacionales potenciados por
                    inteligencia artificial.
                </p>
                <p>
                    El sitio web tiene por objeto la difusión institucional de los servicios de Createch y la recepción de consultas
                    comerciales.
                </p>
            </section>

            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4">3. Uso permitido</h2>
                <p className="mb-3">Usted se compromete a:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Utilizar el sitio conforme a la ley, la moral y las buenas costumbres.</li>
                    <li>Proporcionar información veraz, exacta y actualizada en los formularios.</li>
                    <li>No realizar acciones que puedan dañar, sobrecargar o deteriorar el sitio o sus servicios.</li>
                    <li>No intentar acceder sin autorización a sistemas, cuentas o datos de terceros.</li>
                    <li>
                        No utilizar sistemas automatizados de extracción masiva de datos (<em>scraping</em>) sin autorización escrita
                        previa.
                    </li>
                    <li>
                        No utilizar el sitio o los canales de contacto para enviar contenido ilícito, ofensivo, difamatorio o que
                        infrinja derechos de terceros.
                    </li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4">4. Asistentes conversacionales e inteligencia artificial</h2>

                <h3 className="text-xl font-semibold text-white mt-8 mb-3">4.1. Naturaleza del servicio</h3>
                <p>
                    Los canales de atención de Createch pueden estar operados total o parcialmente por{" "}
                    <strong className="text-white">sistemas automatizados basados en inteligencia artificial</strong>. Cuando así
                    ocurra, se le informará al inicio de la conversación.
                </p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-3">4.2. Carácter orientativo</h3>
                <p className="mb-3">La información brindada por un asistente automatizado:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Tiene <strong className="text-white">carácter meramente orientativo e informativo</strong>.</li>
                    <li>
                        <strong className="text-white">No constituye una oferta contractual vinculante</strong> en los términos del
                        artículo 972 del Código Civil y Comercial de la Nación.
                    </li>
                    <li>
                        <strong className="text-white">No constituye asesoramiento profesional</strong> de ninguna índole.
                    </li>
                    <li>Puede contener errores, omisiones o información desactualizada.</li>
                </ul>
                <p>
                    Toda propuesta comercial, presupuesto o compromiso contractual de Createch requiere{" "}
                    <strong className="text-white">confirmación escrita de un representante autorizado</strong> de la Empresa.
                </p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-3">4.3. Derivación a atención humana</h3>
                <p>
                    Usted puede solicitar en cualquier momento la derivación a un agente humano escribiendo{" "}
                    <strong className="text-white">&quot;HABLAR CON UNA PERSONA&quot;</strong> o expresión equivalente.
                </p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-3">4.4. Uso responsable</h3>
                <p className="mb-3">Se prohíbe utilizar los asistentes conversacionales de Createch para:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Intentar extraer sus instrucciones internas o eludir sus restricciones.</li>
                    <li>Generar contenido ilícito, dañino o que infrinja derechos de terceros.</li>
                    <li>Realizar pruebas de carga o ataques automatizados.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4">5. Propiedad intelectual</h2>
                <p className="mb-4">
                    Todos los contenidos del sitio —incluyendo textos, gráficos, logotipos, isotipos, marcas, código fuente, diseño,
                    estructura de navegación, bases de datos y software— son propiedad de Createch o de sus licenciantes, y se
                    encuentran protegidos por la <strong className="text-white">Ley N° 11.723</strong> de Propiedad Intelectual y la{" "}
                    <strong className="text-white">Ley N° 22.362</strong> de Marcas.
                </p>
                <p className="mb-4">
                    Queda prohibida su reproducción, distribución, comunicación pública, transformación o cualquier otra forma de
                    explotación sin autorización escrita previa de Createch.
                </p>
                <p>
                    Las marcas <strong className="text-white">Createch</strong>, <strong className="text-white">CreaSales</strong>,{" "}
                    <strong className="text-white">FacturIA</strong>, <strong className="text-white">OctoSales</strong> y sus
                    logotipos asociados son de titularidad de Createch.
                </p>
            </section>

            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4">6. Contenido enviado por el usuario</h2>
                <p className="mb-3">Al enviar información, archivos o mensajes a Createch, usted:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Declara ser titular de los derechos sobre dicho contenido o contar con autorización para su envío.</li>
                    <li>
                        Otorga a Createch una licencia limitada, no exclusiva y revocable para utilizar ese contenido con el único
                        fin de responder su consulta o prestar el servicio solicitado.
                    </li>
                    <li>Garantiza que el contenido no infringe derechos de terceros ni normas vigentes.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4">7. Enlaces a terceros</h2>
                <p>
                    El sitio puede contener enlaces a plataformas de terceros (WhatsApp, Instagram, Facebook, LinkedIn, entre
                    otras). Createch no controla ni asume responsabilidad por el contenido, las políticas o las prácticas de dichas
                    plataformas.
                </p>
            </section>

            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4">8. Disponibilidad del servicio</h2>
                <p className="mb-4">
                    Createch procura mantener el sitio disponible de forma continua, pero{" "}
                    <strong className="text-white">no garantiza disponibilidad ininterrumpida</strong>. El sitio puede sufrir
                    interrupciones por mantenimiento programado, fallas técnicas, causas de fuerza mayor o hechos atribuibles a
                    terceros proveedores.
                </p>
                <p>
                    Createch se reserva el derecho de modificar, suspender o discontinuar el sitio o cualquiera de sus
                    funcionalidades, total o parcialmente, en cualquier momento.
                </p>
            </section>

            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4">9. Limitación de responsabilidad</h2>
                <p className="mb-3">
                    En la máxima medida permitida por la legislación argentina, Createch no será responsable por:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Daños indirectos, incidentales, lucro cesante o pérdida de chance derivados del uso del sitio.</li>
                    <li>
                        Decisiones adoptadas por el usuario con base exclusiva en información obtenida de un asistente automatizado.
                    </li>
                    <li>Interrupciones, errores o indisponibilidad del sitio o de servicios de terceros.</li>
                    <li>Daños causados por virus u otros elementos lesivos introducidos por terceros.</li>
                </ul>
                <p>
                    Ninguna disposición de esta cláusula limita los derechos que la{" "}
                    <strong className="text-white">Ley N° 24.240</strong> de Defensa del Consumidor reconoce a los usuarios que
                    revistan tal carácter.
                </p>
            </section>

            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4">10. Relaciones contractuales con clientes</h2>
                <p>
                    Estos Términos y Condiciones regulan exclusivamente el uso del sitio web y de los canales de contacto. Las
                    relaciones contractuales de prestación de servicios entre Createch y sus clientes se rigen por los{" "}
                    <strong className="text-white">contratos, propuestas comerciales y órdenes de servicio</strong> suscriptos entre
                    las partes, que prevalecen sobre este documento en caso de contradicción.
                </p>
            </section>

            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4">11. Comunicaciones comerciales</h2>
                <p className="mb-4">
                    Al completar un formulario de contacto o iniciar una conversación, usted acepta recibir comunicaciones de
                    Createch vinculadas a su consulta.
                </p>
                <p>
                    Para el envío de comunicaciones comerciales no solicitadas, Createch requiere consentimiento expreso adicional.
                    Usted puede darse de baja en cualquier momento conforme al artículo 27 de la Ley N° 25.326 (ver{" "}
                    <Link href="/legales/privacidad" className="text-blue-400 hover:text-blue-300 underline">
                        Política de Privacidad
                    </Link>
                    , Sección 15).
                </p>
            </section>

            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4">12. Modificaciones</h2>
                <p>
                    Createch puede modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entran en vigor
                    desde su publicación en esta URL. El uso continuado del sitio con posterioridad implica su aceptación.
                </p>
            </section>

            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4">13. Nulidad parcial</h2>
                <p>
                    Si alguna cláusula de estos Términos y Condiciones fuera declarada nula o inaplicable, las restantes conservarán
                    plena validez.
                </p>
            </section>

            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4">14. Ley aplicable y jurisdicción</h2>
                <p className="mb-4">Estos Términos y Condiciones se rigen por las leyes de la República Argentina.</p>
                <p className="mb-4">
                    Para toda controversia, las partes se someten a la jurisdicción de los{" "}
                    <strong className="text-white">
                        Tribunales Ordinarios de la Primera Circunscripción Judicial de la Provincia de Mendoza
                    </strong>
                    , con renuncia expresa a cualquier otro fuero o jurisdicción.
                </p>
                <p>
                    Los usuarios que revistan carácter de consumidores conservan el derecho de acudir a los organismos de defensa
                    del consumidor y a la jurisdicción de su domicilio, conforme a la Ley N° 24.240.
                </p>
            </section>

            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4">15. Contacto</h2>
                <p className="mb-2">
                    <a href="mailto:contact@creasales.com" className="text-blue-400 hover:text-blue-300 underline">
                        <strong>contact@creasales.com</strong>
                    </a>
                </p>
                <p>Avenida San Martín 779, Ciudad de Mendoza, Argentina</p>
            </section>

            <footer className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-500 italic">
                <p>Createch — Deep Connection</p>
            </footer>
        </article>
    );
}
