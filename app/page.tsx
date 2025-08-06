import Image from "next/image"
import { Link } from "@heroui/link"
import { Button } from "@heroui/button"
import { Card, CardBody } from "@heroui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                  Dra. Margarita Reina
                </h1>
                <h2 className="text-2xl font-semibold text-cyan-600">
                  Cirugía Oral y Maxilofacial
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                  Especialista en procedimientos estéticos faciales con más de 15 años de experiencia. Ofrecemos
                  tratamientos de vanguardia con la más alta calidad y atención personalizada para realzar tu belleza
                  natural.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  as={Link}
                  href="/servicios"
                  color="primary"
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4"
                >
                  Conoce Nuestros Servicios
                </Button>
                <Button 
                  as={Link}
                  href="/contacto"
                  variant="bordered"
                  size="lg"
                  className="border-2 border-cyan-400 text-cyan-600 hover:bg-cyan-50 font-semibold px-8 py-4"
                >
                  Contacto
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-gradient-to-br from-white to-slate-50 shadow-lg">
                <CardBody className="p-8">
                  <Image
                    src="/confident-female-doctor.png"
                    alt="Dra. Margarita Reina - Cirujana Oral y Maxilofacial"
                    width={400}
                    height={500}
                    className="rounded-2xl object-cover w-full"
                  />
                </CardBody>
              </Card>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-400 to-yellow-400 text-cyan-800 px-4 py-2 rounded-full font-semibold shadow-lg">
                ✨ Especialista Certificada
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Servicios Especializados
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de procedimientos especializados con tecnología de vanguardia y productos de la
              más alta calidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Card 1 */}
            <Card className="bg-gradient-to-br from-white to-slate-50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardBody className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Procedimientos Quirúrgicos</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Cirugías especializadas en región oral y maxilofacial incluyendo implantes dentales, cirugía
                  ortognática, extracción de cordales, y procedimientos estéticos faciales. Utilizamos técnicas
                  mínimamente invasivas para una recuperación más rápida.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full mr-3"></span>
                    Implantes dentales de última generación
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full mr-3"></span>
                    Cirugía ortognática correctiva
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full mr-3"></span>
                    Procedimientos estéticos faciales
                  </li>
                </ul>
              </CardBody>
            </Card>

            {/* Card 2 */}
            <Card className="bg-gradient-to-br from-white to-slate-50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardBody className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Productos Especializados</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Línea exclusiva de productos dermatológicos y cosméticos de grado médico. Tratamientos personalizados
                  para el cuidado de la piel facial, productos post-quirúrgicos y soluciones anti-edad de última
                  generación.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full mr-3"></span>
                    Productos dermatológicos premium
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full mr-3"></span>
                    Tratamientos post-quirúrgicos
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full mr-3"></span>
                    Soluciones anti-edad avanzadas
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Por Qué Elegirnos */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Nuestro compromiso es brindarte la mejor atención médica especializada con resultados excepcionales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Columna 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Experiencia Comprobada</h3>
              <p className="text-slate-600 leading-relaxed">
                Más de 15 años de experiencia en cirugía oral y maxilofacial. Especialización en las mejores
                instituciones médicas del país con certificaciones internacionales vigentes.
              </p>
            </div>

            {/* Columna 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Tecnología Avanzada</h3>
              <p className="text-slate-600 leading-relaxed">
                Equipamiento de última generación para diagnóstico y tratamiento. Técnicas mínimamente invasivas,
                cirugía guiada por computadora y sistemas de imagen 3D para resultados precisos.
              </p>
            </div>

            {/* Columna 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Atención Personalizada</h3>
              <p className="text-slate-600 leading-relaxed">
                Cada paciente recibe un plan de tratamiento único y personalizado. Seguimiento continuo desde la
                consulta inicial hasta la recuperación completa con atención las 24 horas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-white mb-6">
            ¿Listo para Transformar tu Sonrisa?
          </h2>
          <p className="text-xl text-cyan-50 mb-8 leading-relaxed">
            Agenda tu consulta personalizada y descubre cómo podemos ayudarte a lograr los resultados que siempre has
            deseado con la más alta calidad médica.
          </p>
          <Button 
            as={Link}
            href="/contacto"
            size="lg"
            className="bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-slate-800 font-bold text-lg px-10 py-4"
          >
            Contactar Ahora
          </Button>
          <p className="text-cyan-100 mt-4 text-sm">Consulta inicial sin costo • Financiamiento disponible</p>
        </div>
      </section>
    </div>
  );
}
