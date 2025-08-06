import Image from "next/image"
import { Card, CardBody } from "@heroui/card"
import { Button } from "@heroui/button"
import { Link } from "@heroui/link"

export default function SobreMiPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-slate-800 leading-tight">Conoce a la Dra. Margarita Reina</h1>
                <p className="text-xl text-slate-600 font-medium">Especialista en Cirugía Oral y Maxilofacial</p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Con más de 15 años de experiencia dedicados a transformar sonrisas y mejorar la calidad de vida de mis
                  pacientes, mi compromiso es brindar atención médica de excelencia con un enfoque humano y
                  personalizado.
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-gradient-to-br from-cyan-100 to-sky-100 shadow-lg">
                <CardBody className="p-8">
                  <Image
                    src="/professional-doctor-portrait.png"
                    alt="Dra. Margarita Reina en su consulta"
                    width={400}
                    height={500}
                    className="rounded-xl object-cover w-full"
                  />
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Formación Académica */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Formación Académica</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Una sólida preparación académica respaldada por las mejores instituciones médicas
            </p>
          </div>

          <div className="space-y-8">
            <Card className="bg-gradient-to-r from-cyan-50 to-sky-50 shadow-lg hover:shadow-xl transition-shadow">
              <CardBody className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      Especialización en Cirugía Oral y Maxilofacial
                    </h3>
                    <p className="text-slate-600 font-semibold mb-2">
                      Universidad Central de Venezuela - Hospital Universitario de Caracas
                    </p>
                    <p className="text-slate-600 mb-3">2008 - 2012 | 4 años de residencia especializada</p>
                    <p className="text-slate-600">
                      Formación integral en cirugía reconstructiva facial, implantología avanzada, cirugía ortognática y
                      procedimientos estéticos. Rotaciones en los principales servicios de cirugía maxilofacial del país.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-r from-cyan-50 to-sky-50 shadow-lg hover:shadow-xl transition-shadow">
              <CardBody className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Doctorado en Medicina</h3>
                    <p className="text-slate-600 font-semibold mb-2">
                      Universidad Central de Venezuela - Facultad de Medicina
                    </p>
                    <p className="text-slate-600 mb-3">2001 - 2007 | Magna Cum Laude</p>
                    <p className="text-slate-600">
                      Formación médica integral con énfasis en anatomía facial, fisiología oral y bases científicas de la
                      cirugía reconstructiva. Tesis de grado en regeneración ósea maxilofacial.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-r from-cyan-50 to-sky-50 shadow-lg hover:shadow-xl transition-shadow">
              <CardBody className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Certificaciones Internacionales</h3>
                    <p className="text-slate-600 font-semibold mb-2">American Board of Oral and Maxillofacial Surgery</p>
                    <p className="text-slate-600 mb-3">2013 - Presente | Certificación vigente</p>
                    <p className="text-slate-600">
                      Certificación internacional que avala la competencia en técnicas quirúrgicas avanzadas,
                      implantología de última generación y procedimientos estéticos faciales.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Experiencia Profesional */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Experiencia Profesional</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Más de 15 años transformando sonrisas con resultados excepcionales
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardBody className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-slate-800 font-bold text-xl">15+</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Años de Experiencia</h3>
                    <p className="text-slate-600">En cirugía especializada</p>
                  </div>
                </div>
                <p className="text-slate-600">
                  Desde 2008 he realizado más de 3,000 procedimientos quirúrgicos exitosos, especializándome en casos
                  complejos de reconstrucción facial y estética avanzada.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardBody className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-slate-800 font-bold text-xl">98%</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Tasa de Éxito</h3>
                    <p className="text-slate-600">En procedimientos realizados</p>
                  </div>
                </div>
                <p className="text-slate-600">
                  Mantengo una de las tasas de éxito más altas en el país, respaldada por técnicas avanzadas y un
                  seguimiento personalizado de cada paciente.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardBody className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-slate-800 font-bold text-xl">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Hospitales Afiliados</h3>
                    <p className="text-slate-600">Centros médicos de prestigio</p>
                  </div>
                </div>
                <p className="text-slate-600">
                  Cirujana activa en los principales centros médicos del país, incluyendo Hospital de Clínicas Caracas y
                  Centro Médico de Caracas.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardBody className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-slate-800 font-bold text-xl">12</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Publicaciones Científicas</h3>
                    <p className="text-slate-600">En revistas especializadas</p>
                  </div>
                </div>
                <p className="text-slate-600">
                  Autora de múltiples investigaciones en regeneración ósea y técnicas mínimamente invasivas, contribuyendo
                  al avance de la especialidad.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Filosofía y Enfoque */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Mi Filosofía Médica</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cada paciente es único y merece un tratamiento personalizado con los más altos estándares de calidad
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Atención Integral y Personalizada</h3>
                  <p className="text-slate-600">
                    Cada tratamiento se diseña específicamente para las necesidades únicas de cada paciente,
                    considerando no solo los aspectos médicos, sino también sus expectativas y estilo de vida.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Excelencia Técnica y Científica</h3>
                  <p className="text-slate-600">
                    Mantengo una actualización constante en las últimas técnicas quirúrgicas y tecnologías, asegurando
                    que mis pacientes reciban los tratamientos más avanzados disponibles.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Comunicación Transparente</h3>
                  <p className="text-slate-600">
                    Creo firmemente en mantener una comunicación clara y honesta con mis pacientes, explicando cada
                    procedimiento y expectativas de manera comprensible.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Compromiso con la Seguridad</h3>
                  <p className="text-slate-600">
                    La seguridad del paciente es mi prioridad absoluta. Utilizo protocolos estrictos y tecnología de
                    vanguardia para minimizar riesgos y optimizar resultados.
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-cyan-50 to-sky-50 shadow-lg">
              <CardBody className="p-8">
                <blockquote className="text-xl text-slate-800 italic leading-relaxed mb-6">
                  "Mi mayor satisfacción es ver la confianza renovada en mis pacientes cuando logran la sonrisa que
                  siempre soñaron. Cada procedimiento es una oportunidad de cambiar una vida de manera positiva."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">MR</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Dra. Margarita Reina</p>
                    <p className="text-slate-600">Cirujana Oral y Maxilofacial</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificaciones y Membresías */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Certificaciones y Membresías</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Respaldada por las organizaciones médicas más prestigiosas a nivel nacional e internacional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardBody className="p-6 text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Colegio de Médicos</h3>
                <p className="text-slate-600 text-sm">Miembro activo desde 2007</p>
              </CardBody>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardBody className="p-6 text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-800 mb-2">AAOMS</h3>
                <p className="text-slate-600 text-sm">American Association of Oral and Maxillofacial Surgeons</p>
              </CardBody>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardBody className="p-6 text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-800 mb-2">SVCOMF</h3>
                <p className="text-slate-600 text-sm">Sociedad Venezolana de Cirugía Oral y Maxilofacial</p>
              </CardBody>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardBody className="p-6 text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-800 mb-2">ITI</h3>
                <p className="text-slate-600 text-sm">International Team for Implantology</p>
              </CardBody>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardBody className="p-6 text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-800 mb-2">ISAPS</h3>
                <p className="text-slate-600 text-sm">International Society of Aesthetic Plastic Surgery</p>
              </CardBody>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardBody className="p-6 text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Certificación ISO</h3>
                <p className="text-slate-600 text-sm">Estándares internacionales de calidad</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">¿Tienes Preguntas Sobre Tu Tratamiento?</h2>
          <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
            Agenda una consulta personalizada conmigo. Juntos evaluaremos tu caso y diseñaremos el plan de tratamiento
            perfecto para lograr los resultados que deseas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as={Link}
              href="/contacto"
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-slate-800 font-bold text-lg px-10 py-4"
            >
              Agendar Consulta
            </Button>
            <Button
              as={Link}
              href="/servicios"
              variant="bordered"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-bold text-lg px-10 py-4"
            >
              Ver Servicios
            </Button>
          </div>
          <p className="text-cyan-200 mt-6 text-sm">
            Consulta inicial sin costo • Financiamiento disponible • Atención personalizada
          </p>
        </div>
      </section>
    </div>
  )
}
