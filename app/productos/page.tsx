"use client"

import Image from "next/image"
import { useState } from "react"
import { Card, CardBody } from "@heroui/card"
import { Button } from "@heroui/button"
import { Link } from "@heroui/link"
import { Tabs, Tab } from "@heroui/tabs"

const productos = {
  limpiadores: [
    {
      id: 1,
      nombre: "Gel Limpiador Purificante",
      marca: "SkinMedica",
      imagen: "/cleanser-gel.png",
      precio: "$45",
      descripcion: "Gel limpiador suave que elimina impurezas sin resecar la piel. Ideal para todo tipo de piel.",
      beneficios: ["Limpieza profunda", "No reseca", "Apto para piel sensible", "Libre de sulfatos"],
      categoria: "limpiadores",
    },
    {
      id: 2,
      nombre: "Espuma Limpiadora Anti-Acné",
      marca: "Obagi",
      imagen: "/acne-cleanser.png",
      precio: "$52",
      descripcion: "Espuma limpiadora con ácido salicílico para pieles grasas y propensas al acné.",
      beneficios: ["Controla grasa", "Previene acné", "Desobstruye poros", "Efecto antibacterial"],
      categoria: "limpiadores",
    },
    {
      id: 3,
      nombre: "Leche Limpiadora Hidratante",
      marca: "Revision Skincare",
      imagen: "/cleansing-milk.png",
      precio: "$38",
      descripcion: "Leche limpiadora cremosa para pieles secas y maduras. Limpia mientras hidrata.",
      beneficios: ["Hidratación intensa", "Piel suave", "Anti-edad", "Textura cremosa"],
      categoria: "limpiadores",
    },
  ],
  serums: [
    {
      id: 4,
      nombre: "Serum Vitamina C 20%",
      marca: "SkinCeuticals",
      imagen: "/vitamin-c-serum.png",
      precio: "$165",
      descripcion: "Serum antioxidante de alta potencia con vitamina C pura para luminosidad y protección.",
      beneficios: ["Antioxidante potente", "Luminosidad", "Estimula colágeno", "Protección ambiental"],
      categoria: "serums",
    },
    {
      id: 5,
      nombre: "Serum Retinol Renovador",
      marca: "Obagi",
      imagen: "/retinol-serum.png",
      precio: "$89",
      descripcion: "Serum con retinol encapsulado para renovación celular y reducción de líneas de expresión.",
      beneficios: ["Renovación celular", "Reduce arrugas", "Mejora textura", "Estimula colágeno"],
      categoria: "serums",
    },
    {
      id: 6,
      nombre: "Serum Ácido Hialurónico",
      marca: "Revision Skincare",
      imagen: "/hyaluronic-serum.png",
      precio: "$75",
      descripcion: "Serum hidratante intensivo con diferentes pesos moleculares de ácido hialurónico.",
      beneficios: ["Hidratación profunda", "Efecto relleno", "Piel tersa", "Absorción rápida"],
      categoria: "serums",
    },
  ],
  cremas: [
    {
      id: 7,
      nombre: "Crema Hidratante Anti-Edad",
      marca: "SkinMedica",
      imagen: "/anti-aging-cream.png",
      precio: "$125",
      descripcion: "Crema nutritiva con péptidos y antioxidantes para combatir los signos del envejecimiento.",
      beneficios: ["Hidratación 24h", "Reduce arrugas", "Firmeza", "Textura sedosa"],
      categoria: "cremas",
    },
    {
      id: 8,
      nombre: "Crema Reparadora Nocturna",
      marca: "Obagi",
      imagen: "/night-cream.png",
      precio: "$98",
      descripcion: "Crema reparadora nocturna con factores de crecimiento para regeneración celular.",
      beneficios: ["Regeneración nocturna", "Reparación celular", "Nutrición intensa", "Piel renovada"],
      categoria: "cremas",
    },
    {
      id: 9,
      nombre: "Crema Contorno de Ojos",
      marca: "SkinCeuticals",
      imagen: "/eye-cream.png",
      precio: "$85",
      descripcion: "Crema especializada para el delicado contorno de ojos con cafeína y péptidos.",
      beneficios: ["Reduce ojeras", "Disminuye bolsas", "Hidratación", "Efecto tensor"],
      categoria: "cremas",
    },
  ],
  protectores: [
    {
      id: 10,
      nombre: "Protector Solar Facial SPF 50+",
      marca: "SkinCeuticals",
      imagen: "/sunscreen-face.png",
      precio: "$42",
      descripcion: "Protector solar de amplio espectro con base mineral. Ideal para uso diario.",
      beneficios: ["SPF 50+", "Base mineral", "No comedogénico", "Resistente al agua"],
      categoria: "protectores",
    },
    {
      id: 11,
      nombre: "Protector Solar con Color",
      marca: "Obagi",
      imagen: "/tinted-sunscreen.png",
      precio: "$48",
      descripcion: "Protector solar con color que unifica el tono mientras protege de los rayos UV.",
      beneficios: ["Protección + color", "Cobertura natural", "Larga duración", "Antioxidantes"],
      categoria: "protectores",
    },
    {
      id: 12,
      nombre: "Protector Solar Corporal",
      marca: "Revision Skincare",
      imagen: "/body-sunscreen.png",
      precio: "$35",
      descripcion: "Protector solar corporal de rápida absorción para protección diaria del cuerpo.",
      beneficios: ["Absorción rápida", "No graso", "Resistente al sudor", "Hidratante"],
      categoria: "protectores",
    },
  ],
  postprocedimiento: [
    {
      id: 13,
      nombre: "Gel Cicatrizante Post-Cirugía",
      marca: "Clínica Especializada",
      imagen: "/healing-gel.png",
      precio: "$65",
      descripcion: "Gel especializado para acelerar la cicatrización después de procedimientos quirúrgicos.",
      beneficios: ["Acelera cicatrización", "Reduce inflamación", "Previene queloides", "Calma irritación"],
      categoria: "postprocedimiento",
    },
    {
      id: 14,
      nombre: "Crema Regeneradora Post-Peeling",
      marca: "SkinMedica",
      imagen: "/post-peel-cream.png",
      precio: "$78",
      descripcion: "Crema calmante y regeneradora para usar después de peelings químicos.",
      beneficios: ["Calma irritación", "Acelera recuperación", "Hidratación intensa", "Reduce rojeces"],
      categoria: "postprocedimiento",
    },
    {
      id: 15,
      nombre: "Serum Reparador Intensivo",
      marca: "Obagi",
      imagen: "/repair-serum.png",
      precio: "$95",
      descripcion: "Serum concentrado con factores de crecimiento para reparación post-tratamiento.",
      beneficios: ["Reparación acelerada", "Factores de crecimiento", "Regeneración celular", "Uso profesional"],
      categoria: "postprocedimiento",
    },
  ],
  suplementos: [
    {
      id: 16,
      nombre: "Colágeno Hidrolizado Premium",
      marca: "Nutriceuticals",
      imagen: "/collagen-supplement.png",
      precio: "$85",
      descripcion: "Suplemento de colágeno hidrolizado con vitamina C para salud de piel, cabello y uñas.",
      beneficios: ["Estimula colágeno", "Piel firme", "Cabello fuerte", "Uñas saludables"],
      categoria: "suplementos",
    },
    {
      id: 17,
      nombre: "Antioxidantes Faciales",
      marca: "SkinCeuticals",
      imagen: "/antioxidant-supplement.png",
      precio: "$72",
      descripcion: "Complejo antioxidante oral para protección celular desde el interior.",
      beneficios: ["Protección antioxidante", "Anti-envejecimiento", "Luminosidad", "Salud celular"],
      categoria: "suplementos",
    },
    {
      id: 18,
      nombre: "Omega 3 para la Piel",
      marca: "Revision Skincare",
      imagen: "/omega-supplement.png",
      precio: "$58",
      descripcion: "Suplemento de omega 3 específicamente formulado para la salud de la piel.",
      beneficios: ["Hidratación natural", "Anti-inflamatorio", "Piel saludable", "Absorción óptima"],
      categoria: "suplementos",
    },
  ],
}

type ProductoKey = keyof typeof productos

const categorias = [
  { id: "limpiadores", nombre: "Limpiadores", icono: "🧼" },
  { id: "serums", nombre: "Serums", icono: "💧" },
  { id: "cremas", nombre: "Cremas", icono: "🧴" },
  { id: "protectores", nombre: "Protectores Solares", icono: "☀️" },
  { id: "postprocedimiento", nombre: "Post-Procedimiento", icono: "🩹" },
  { id: "suplementos", nombre: "Suplementos", icono: "💊" },
]

export default function ProductosPage() {
  const [categoriaActiva, setCategoriaActiva] = useState<ProductoKey>("limpiadores")

  const handleWhatsAppContact = (producto: string) => {
    const mensaje = `Hola! Me interesa el producto: ${producto}. ¿Podrían darme más información sobre disponibilidad y cómo adquirirlo?`
    const whatsappUrl = `https://wa.me/582125550123?text=${encodeURIComponent(mensaje)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Productos Especializados</h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Descubre nuestra selección exclusiva de productos dermatológicos y cosméticos de grado médico. Cada producto
            ha sido cuidadosamente seleccionado por la Dra. Margarita Reina para complementar tus tratamientos y
            mantener los resultados en casa.
          </p>
          <Card className="bg-yellow-50 border border-yellow-200 max-w-3xl mx-auto">
            <CardBody className="p-4">
              <p className="text-slate-800 font-medium">
                💡 <strong>Importante:</strong> Estos productos están disponibles únicamente en nuestra clínica. Para
                adquirirlos, visítanos o contáctanos por WhatsApp.
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Filtros de Categorías con Tabs */}
      <section className="py-8 bg-white border-b border-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs
            selectedKey={categoriaActiva}
            onSelectionChange={(key) => setCategoriaActiva(key as ProductoKey)}
            classNames={{
              tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider flex-wrap",
              cursor: "w-full bg-cyan-600",
              tab: "max-w-fit px-4 py-3 h-12",
              tabContent: "group-data-[selected=true]:text-cyan-600"
            }}
          >
            {categorias.map((categoria) => (
              <Tab
                key={categoria.id}
                title={
                  <div className="flex items-center space-x-2">
                    <span>{categoria.icono}</span>
                    <span>{categoria.nombre}</span>
                  </div>
                }
              />
            ))}
          </Tabs>
        </div>
      </section>

      {/* Grid de Productos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productos[categoriaActiva].map((producto) => (
              <Card
                key={producto.id}
                className="bg-gradient-to-br from-white to-slate-50 shadow-lg hover:shadow-2xl transition-all duration-300 border border-cyan-50"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-cyan-50 to-sky-50 rounded-t-lg">
                  <Image
                    src={producto.imagen || "/placeholder.svg"}
                    alt={producto.nombre}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-cyan-600 text-white px-3 py-1 rounded-full text-lg font-bold">
                    {producto.precio}
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 text-slate-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {producto.marca}
                  </div>
                </div>

                <CardBody className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{producto.nombre}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4 text-sm">{producto.descripcion}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">Beneficios:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {producto.beneficios.map((beneficio, index) => (
                        <div key={index} className="flex items-center text-xs text-cyan-600">
                          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2 flex-shrink-0"></span>
                          {beneficio}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      onPress={() => handleWhatsAppContact(producto.nombre)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
                      startContent={
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                      }
                    >
                      Consultar por WhatsApp
                    </Button>
                    <Button 
                      variant="bordered" 
                      className="w-full border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white font-semibold"
                    >
                      Más Información
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Información de Compra */}
      <section className="bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">¿Cómo Adquirir Nuestros Productos?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Nuestros productos están disponibles exclusivamente en la clínica para garantizar su autenticidad y
              calidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardBody className="text-center p-8">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Visita Nuestra Clínica</h3>
                <p className="text-slate-600 mb-4">
                  Ven directamente a nuestras instalaciones donde nuestro equipo te asesorará personalmente sobre el
                  producto ideal para ti.
                </p>
                <p className="text-cyan-600 font-semibold">Av. Principal 123, Centro Médico</p>
                <p className="text-cyan-600">Lun - Vie: 8:00 AM - 6:00 PM</p>
              </CardBody>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardBody className="text-center p-8">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Consulta por WhatsApp</h3>
                <p className="text-slate-600 mb-4">
                  Contáctanos directamente por WhatsApp para consultar disponibilidad, precios y recibir asesoría
                  personalizada.
                </p>
                <Button
                  onPress={() => handleWhatsAppContact("consulta general")}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2"
                >
                  +58 212 555-0123
                </Button>
              </CardBody>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardBody className="text-center p-8">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Asesoría Personalizada</h3>
                <p className="text-slate-600 mb-4">
                  Recibe recomendaciones personalizadas basadas en tu tipo de piel y tratamientos realizados en nuestra
                  clínica.
                </p>
                <p className="text-cyan-600 font-semibold">Consulta incluida con tu tratamiento</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Beneficios de Comprar en la Clínica */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">¿Por Qué Comprar en Nuestra Clínica?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Garantizamos la autenticidad y calidad de todos nuestros productos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Productos Auténticos</h3>
              <p className="text-slate-600 text-sm">100% originales directamente de los laboratorios</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Asesoría Experta</h3>
              <p className="text-slate-600 text-sm">Recomendaciones personalizadas por especialistas</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Precios Especiales</h3>
              <p className="text-slate-600 text-sm">Descuentos exclusivos para pacientes de la clínica</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Seguimiento</h3>
              <p className="text-slate-600 text-sm">Monitoreo de resultados y ajustes según evolución</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">¿Necesitas Asesoría Sobre Productos?</h2>
          <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
            Nuestro equipo de especialistas te ayudará a elegir los productos perfectos para tu tipo de piel y
            necesidades específicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onPress={() => handleWhatsAppContact("asesoría de productos")}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-10 py-4"
              startContent={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              }
            >
              Consultar por WhatsApp
            </Button>
            <Button
              as={Link}
              href="/contacto"
              variant="bordered"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-bold text-lg px-10 py-4"
            >
              Agendar Cita
            </Button>
          </div>
          <p className="text-cyan-200 mt-6 text-sm">
            Asesoría gratuita • Productos auténticos • Descuentos para pacientes
          </p>
        </div>
      </section>
    </div>
  )
}
