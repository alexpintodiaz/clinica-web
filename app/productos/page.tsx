"use client";

import { useState } from "react";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Tabs, Tab } from "@heroui/tabs";
import { ProductCard } from "@/components/ui/product-card";
import { useWhatsApp } from "@/hooks/useWhatsApp";
import { productos, categoriasProductos } from "@/lib/data/productos";
import type { CategoriaProducto } from "@/types";

export default function ProductosPage() {
  const [categoriaActiva, setCategoriaActiva] = useState<CategoriaProducto>("limpiadores");
  const { sendProductMessage, sendAdviceMessage } = useWhatsApp();

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
            onSelectionChange={(key) => setCategoriaActiva(key as CategoriaProducto)}
            classNames={{
              tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider flex-wrap",
              cursor: "w-full bg-cyan-600",
              tab: "max-w-fit px-4 py-3 h-12",
              tabContent: "group-data-[selected=true]:text-cyan-600"
            }}
          >
            {categoriasProductos.map((categoria) => (
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
              <ProductCard
                key={producto.id}
                producto={producto}
                onWhatsAppClick={sendProductMessage}
              />
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
                  onPress={sendAdviceMessage}
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
              onPress={sendAdviceMessage}
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
  );
}
