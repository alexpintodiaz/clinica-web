"use client"

import Image from "next/image"
import { useState } from "react"
import { Card, CardBody } from "@heroui/card"
import { Button } from "@heroui/button"
import { Link } from "@heroui/link"
import { Tabs, Tab } from "@heroui/tabs"

const servicios = {
  maxilofacial: [
    {
      id: 1,
      nombre: "Implantes Dentales",
      imagen: "/dental-implants.png",
      descripcion:
        "Reemplazo de dientes perdidos con implantes de titanio de última generación. Procedimiento mínimamente invasivo con técnicas de cirugía guiada por computadora para resultados precisos y duraderos.",
      duracion: "1-2 horas",
      recuperacion: "7-14 días",
      precio: "Desde $800",
    },
    {
      id: 2,
      nombre: "Cirugía Ortognática",
      imagen: "/orthognathic-surgery.png",
      descripcion:
        "Corrección quirúrgica de deformidades maxilofaciales y maloclusiones severas. Mejora la función masticatoria, respiratoria y la estética facial de manera integral.",
      duracion: "3-5 horas",
      recuperacion: "4-6 semanas",
      precio: "Consultar",
    },
    {
      id: 3,
      nombre: "Extracción de Cordales",
      imagen: "/wisdom-teeth.png",
      descripcion:
        "Extracción quirúrgica de muelas del juicio impactadas o problemáticas. Utilizamos técnicas mínimamente invasivas para reducir el dolor y acelerar la recuperación.",
      duracion: "30-60 minutos",
      recuperacion: "3-7 días",
      precio: "Desde $200",
    },
    {
      id: 4,
      nombre: "Cirugía Reconstructiva Facial",
      imagen: "/facial-reconstruction.png",
      descripcion:
        "Reconstrucción de defectos faciales por trauma, cáncer o malformaciones congénitas. Restauramos tanto la función como la estética facial con técnicas avanzadas.",
      duracion: "2-6 horas",
      recuperacion: "2-8 semanas",
      precio: "Consultar",
    },
    {
      id: 5,
      nombre: "Tratamiento de ATM",
      imagen: "/tmj-treatment.png",
      descripcion:
        "Diagnóstico y tratamiento de trastornos de la articulación temporomandibular. Aliviamos el dolor, mejoramos la función mandibular y corregimos problemas de mordida.",
      duracion: "1-2 horas",
      recuperacion: "1-2 semanas",
      precio: "Desde $400",
    },
    {
      id: 6,
      nombre: "Cirugía de Quistes y Tumores",
      imagen: "/cyst-surgery.png",
      descripcion:
        "Extirpación quirúrgica de quistes y tumores benignos en la región maxilofacial. Procedimientos precisos con preservación de estructuras importantes.",
      duracion: "1-3 horas",
      recuperacion: "1-3 semanas",
      precio: "Consultar",
    },
  ],
  esteticos: [
    {
      id: 7,
      nombre: "Lifting Facial",
      imagen: "/facelift.png",
      descripcion:
        "Rejuvenecimiento facial completo que elimina la flacidez y redefine los contornos. Técnicas avanzadas para resultados naturales y duraderos.",
      duracion: "3-4 horas",
      recuperacion: "2-3 semanas",
      precio: "Desde $3,500",
    },
    {
      id: 8,
      nombre: "Rinoplastia",
      imagen: "/rhinoplasty.png",
      descripcion:
        "Cirugía estética y funcional de la nariz. Mejoramos la forma, tamaño y proporción nasal mientras preservamos o mejoramos la función respiratoria.",
      duracion: "2-3 horas",
      recuperacion: "2-4 semanas",
      precio: "Desde $2,800",
    },
    {
      id: 9,
      nombre: "Bichectomía",
      imagen: "/buccal-fat-removal.png",
      descripcion:
        "Extracción de las bolsas de Bichat para definir los pómulos y crear un rostro más esculpido. Procedimiento mínimamente invasivo con resultados inmediatos.",
      duracion: "45-60 minutos",
      recuperacion: "1-2 semanas",
      precio: "Desde $1,200",
    },
    {
      id: 10,
      nombre: "Mentoplastia",
      imagen: "/chin-surgery.png",
      descripcion:
        "Cirugía de mentón para mejorar la proyección y forma del mentón. Armonizamos el perfil facial y mejoramos la proporción entre nariz, labios y mentón.",
      duracion: "1-2 horas",
      recuperacion: "2-3 semanas",
      precio: "Desde $2,000",
    },
    {
      id: 11,
      nombre: "Armonización Facial",
      imagen: "/facial-harmonization.png",
      descripcion:
        "Tratamiento integral que combina diferentes técnicas para lograr un equilibrio perfecto entre todas las estructuras faciales.",
      duracion: "2-3 horas",
      recuperacion: "1-2 semanas",
      precio: "Desde $1,800",
    },
    {
      id: 12,
      nombre: "Rejuvenecimiento Facial",
      imagen: "/facial-rejuvenation.png",
      descripcion:
        "Combinación de técnicas quirúrgicas y no quirúrgicas para revertir los signos del envejecimiento y restaurar la juventud facial.",
      duracion: "2-4 horas",
      recuperacion: "2-4 semanas",
      precio: "Desde $2,500",
    },
  ],
  dermatologicos: [
    {
      id: 13,
      nombre: "Botox",
      imagen: "/botox-treatment.png",
      descripcion:
        "Aplicación de toxina botulínica para eliminar arrugas de expresión. Tratamiento rápido y efectivo para frente, entrecejo y patas de gallo.",
      duracion: "15-30 minutos",
      recuperacion: "Inmediata",
      precio: "Desde $300",
    },
    {
      id: 14,
      nombre: "Rellenos Dérmicos",
      imagen: "/dermal-fillers.png",
      descripcion:
        "Ácido hialurónico de alta calidad para restaurar volumen, definir contornos y eliminar arrugas. Resultados inmediatos y naturales.",
      duracion: "30-45 minutos",
      recuperacion: "24-48 horas",
      precio: "Desde $400",
    },
    {
      id: 15,
      nombre: "Peeling Químico",
      imagen: "/chemical-peel.png",
      descripcion:
        "Exfoliación profunda para renovar la piel, eliminar manchas, cicatrices y mejorar la textura. Diferentes intensidades según las necesidades.",
      duracion: "30-60 minutos",
      recuperacion: "3-7 días",
      precio: "Desde $150",
    },
    {
      id: 16,
      nombre: "Mesoterapia Facial",
      imagen: "/mesotherapy.png",
      descripcion:
        "Microinyecciones de vitaminas, minerales y ácido hialurónico para hidratar, nutrir y rejuvenecer la piel desde el interior.",
      duracion: "30-45 minutos",
      recuperacion: "24 horas",
      precio: "Desde $200",
    },
    {
      id: 17,
      nombre: "Hidrafacial",
      imagen: "/hydrafacial.png",
      descripcion:
        "Tratamiento facial de limpieza profunda, exfoliación e hidratación. Tecnología de vanguardia para una piel radiante y saludable.",
      duracion: "45-60 minutos",
      recuperacion: "Inmediata",
      precio: "Desde $120",
    },
    {
      id: 18,
      nombre: "Tratamientos Anti-edad",
      imagen: "/anti-aging.png",
      descripcion:
        "Protocolos personalizados que combinan diferentes tecnologías para combatir el envejecimiento y mantener una piel joven y saludable.",
      duracion: "60-90 minutos",
      recuperacion: "24-48 horas",
      precio: "Desde $250",
    },
  ],
}

type ServicioKey = keyof typeof servicios

export default function ServiciosPage() {
  const [categoriaActiva, setCategoriaActiva] = useState<ServicioKey>("maxilofacial")

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Nuestros Servicios</h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Ofrecemos una amplia gama de procedimientos especializados en cirugía maxilofacial, estética facial y
            tratamientos dermatológicos. Cada tratamiento está diseñado con los más altos estándares de calidad y
            tecnología de vanguardia.
          </p>
        </div>
      </section>

      {/* Filtros de Categorías con Tabs */}
      <section className="py-8 bg-white border-b border-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs
            selectedKey={categoriaActiva}
            onSelectionChange={(key) => setCategoriaActiva(key as ServicioKey)}
            classNames={{
              tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
              cursor: "w-full bg-cyan-600",
              tab: "max-w-fit px-4 py-3 h-12",
              tabContent: "group-data-[selected=true]:text-cyan-600"
            }}
          >
            <Tab
              key="maxilofacial"
              title={
                <div className="flex items-center space-x-2">
                  <span>🦷</span>
                  <span>Cirugía Maxilofacial</span>
                </div>
              }
            />
            <Tab
              key="esteticos"
              title={
                <div className="flex items-center space-x-2">
                  <span>✨</span>
                  <span>Procedimientos Estéticos</span>
                </div>
              }
            />
            <Tab
              key="dermatologicos"
              title={
                <div className="flex items-center space-x-2">
                  <span>💆‍♀️</span>
                  <span>Tratamientos Dermatológicos</span>
                </div>
              }
            />
          </Tabs>
        </div>
      </section>

      {/* Grid de Servicios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios[categoriaActiva].map((servicio) => (
              <Card
                key={servicio.id}
                className="bg-gradient-to-br from-white to-slate-50 shadow-lg hover:shadow-2xl transition-all duration-300"
                isPressable
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={servicio.imagen || "/placeholder.svg"}
                    alt={servicio.nombre}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {servicio.precio}
                  </div>
                </div>

                <CardBody className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{servicio.nombre}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{servicio.descripcion}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-cyan-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="font-medium">Duración:</span> {servicio.duracion}
                    </div>
                    <div className="flex items-center text-sm text-cyan-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <span className="font-medium">Recuperación:</span> {servicio.recuperacion}
                    </div>
                  </div>

                  <Button
                    as={Link}
                    href="/contacto"
                    color="primary"
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold"
                  >
                    Más Información
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Información Adicional */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">¿Cómo Funciona Nuestro Proceso?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Seguimos un protocolo estructurado para garantizar los mejores resultados en cada tratamiento
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Consulta Inicial</h3>
              <p className="text-slate-600">
                Evaluación completa de tu caso y diseño del plan de tratamiento personalizado.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Diagnóstico</h3>
              <p className="text-slate-600">
                Estudios complementarios y análisis detallado con tecnología de vanguardia.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Tratamiento</h3>
              <p className="text-slate-600">Ejecución del procedimiento con las técnicas más avanzadas y seguras.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Seguimiento</h3>
              <p className="text-slate-600">
                Control post-tratamiento y acompañamiento durante todo el proceso de recuperación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Garantías y Beneficios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Nuestras Garantías</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tu tranquilidad y satisfacción son nuestra prioridad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-white to-slate-50 shadow-lg">
              <CardBody className="text-center p-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cyan-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Garantía de Calidad</h3>
                <p className="text-slate-600">
                  Todos nuestros procedimientos están respaldados por garantía de calidad y seguimiento post-tratamiento.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-white to-slate-50 shadow-lg">
              <CardBody className="text-center p-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cyan-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Financiamiento</h3>
                <p className="text-slate-600">
                  Opciones de financiamiento flexibles para que puedas acceder al tratamiento que necesitas.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-white to-slate-50 shadow-lg">
              <CardBody className="text-center p-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cyan-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Atención 24/7</h3>
                <p className="text-slate-600">
                  Línea de emergencia disponible las 24 horas para cualquier consulta post-operatoria.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">¿Listo para Comenzar tu Transformación?</h2>
          <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
            Agenda tu consulta personalizada y descubre cuál es el tratamiento perfecto para ti. La primera consulta es
            completamente gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as={Link}
              href="/contacto"
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-cyan-900 font-bold text-lg px-10 py-4"
            >
              Agendar Consulta Gratuita
            </Button>
            <Button
              variant="bordered"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-bold text-lg px-10 py-4"
            >
              WhatsApp: +58 212 555-0123
            </Button>
          </div>
          <p className="text-cyan-200 mt-6 text-sm">
            Consulta inicial gratuita • Financiamiento disponible • Resultados garantizados
          </p>
        </div>
      </section>
    </div>
  )
}
