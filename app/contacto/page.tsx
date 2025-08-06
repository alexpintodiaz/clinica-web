"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardBody } from "@heroui/card"
import { Button } from "@heroui/button"
import { Input } from "@heroui/input"
import { Select, SelectItem } from "@heroui/select"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    motivo: "",
    mensaje: "",
    preferencia: "telefono",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const motivosConsulta = [
    { key: "implantes", label: "Implantes Dentales" },
    { key: "ortognatica", label: "Cirugía Ortognática" },
    { key: "cordales", label: "Extracción de Cordales" },
    { key: "estetica", label: "Procedimientos Estéticos" },
    { key: "reconstructiva", label: "Cirugía Reconstructiva" },
    { key: "atm", label: "Problemas de ATM" },
    { key: "productos", label: "Consulta sobre Productos" },
    { key: "emergencia", label: "Emergencia" },
    { key: "otro", label: "Otro" },
  ]

  const preferenciasContacto = [
    { key: "telefono", label: "Llamada Telefónica" },
    { key: "whatsapp", label: "WhatsApp" },
    { key: "email", label: "Email" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío del formulario
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setSubmitMessage(
      "¡Gracias por contactarnos! Hemos recibido tu mensaje y nos pondremos en contacto contigo dentro de las próximas 24 horas.",
    )
    setIsSubmitting(false)

    // Limpiar formulario
    setFormData({
      nombre: "",
      apellido: "",
      telefono: "",
      email: "",
      motivo: "",
      mensaje: "",
      preferencia: "telefono",
    })
  }

  const handleWhatsAppContact = () => {
    const mensaje = `Hola! Me gustaría agendar una consulta con la Dra. Margarita Reina. ¿Podrían ayudarme con la disponibilidad?`
    const whatsappUrl = `https://wa.me/582125550123?text=${encodeURIComponent(mensaje)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleEmergencyCall = () => {
    window.open("tel:+582125550124", "_self")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Contáctanos</h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Estamos aquí para ayudarte. Agenda tu consulta, resuelve tus dudas o solicita información sobre nuestros
            servicios. Tu sonrisa perfecta está a solo una llamada de distancia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onPress={handleWhatsAppContact}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4"
              startContent={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              }
            >
              WhatsApp Directo
            </Button>
            <Button
              onPress={handleEmergencyCall}
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4"
              startContent={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              }
            >
              Emergencias 24/7
            </Button>
          </div>
        </div>
      </section>

      {/* Información de Contacto y Formulario */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información de Contacto */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Información de Contacto</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Dirección</h3>
                      <p className="text-slate-600">Av. Principal 123, Piso 5, Consultorio 502</p>
                      <p className="text-slate-600">Centro Médico Caracas</p>
                      <p className="text-slate-600">Caracas 1050, Venezuela</p>
                      <p className="text-cyan-600 text-sm mt-2">🚗 Estacionamiento disponible en el edificio</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Teléfonos</h3>
                      <p className="text-slate-600">📞 Consultas: +58 (212) 555-0123</p>
                      <p className="text-slate-600">🚨 Emergencias: +58 (212) 555-0124</p>
                      <p className="text-slate-600">📱 WhatsApp: +58 (212) 555-0123</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Horarios de Atención</h3>
                      <div className="space-y-1 text-slate-600">
                        <p>🕐 Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                        <p>🕐 Sábados: 9:00 AM - 2:00 PM</p>
                        <p>🕐 Domingos: Cerrado</p>
                        <p className="text-cyan-600 text-sm mt-2">⚡ Emergencias atendidas 24/7</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Email</h3>
                      <p className="text-slate-600">📧 consultas@dramargaritareina.com</p>
                      <p className="text-slate-600">📧 citas@dramargaritareina.com</p>
                      <p className="text-cyan-600 text-sm mt-2">📬 Respuesta en menos de 24 horas</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seguros Médicos */}
              <Card className="bg-gradient-to-br from-cyan-50 to-sky-50 shadow-lg">
                <CardBody className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Seguros Médicos Aceptados</h3>
                  <div className="grid grid-cols-2 gap-2 text-slate-600 text-sm">
                    <p>✅ Seguros Caracas</p>
                    <p>✅ Seguros Mercantil</p>
                    <p>✅ Seguros La Previsora</p>
                    <p>✅ Seguros Banesco</p>
                    <p>✅ Seguros Provincial</p>
                    <p>✅ Otros (consultar)</p>
                  </div>
                </CardBody>
              </Card>
            </div>

            {/* Formulario de Contacto */}
            <Card className="bg-gradient-to-br from-white to-slate-50 shadow-lg">
              <CardBody className="p-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Solicita tu Consulta</h2>
                {submitMessage ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <svg
                      className="w-12 h-12 text-green-600 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-green-800 font-medium">{submitMessage}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        type="text"
                        label="Nombre"
                        placeholder="Tu nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        isRequired
                        classNames={{
                          input: "text-slate-800",
                          label: "text-slate-800 font-medium",
                        }}
                      />
                      <Input
                        type="text"
                        label="Apellido"
                        placeholder="Tu apellido"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleInputChange}
                        isRequired
                        classNames={{
                          input: "text-slate-800",
                          label: "text-slate-800 font-medium",
                        }}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        type="tel"
                        label="Teléfono"
                        placeholder="+58 412 123-4567"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        isRequired
                        classNames={{
                          input: "text-slate-800",
                          label: "text-slate-800 font-medium",
                        }}
                      />
                      <Input
                        type="email"
                        label="Email"
                        placeholder="tu@email.com"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        isRequired
                        classNames={{
                          input: "text-slate-800",
                          label: "text-slate-800 font-medium",
                        }}
                      />
                    </div>

                    <Select
                      label="Motivo de Consulta"
                      placeholder="Selecciona un motivo"
                      selectedKeys={formData.motivo ? [formData.motivo] : []}
                      onSelectionChange={(keys) => {
                        const value = Array.from(keys)[0] as string
                        handleSelectChange("motivo")(value)
                      }}
                      isRequired
                      classNames={{
                        label: "text-slate-800 font-medium",
                        value: "text-slate-800",
                      }}
                    >
                      {motivosConsulta.map((motivo) => (
                        <SelectItem key={motivo.key} value={motivo.key}>
                          {motivo.label}
                        </SelectItem>
                      ))}
                    </Select>

                    <Select
                      label="Preferencia de Contacto"
                      selectedKeys={formData.preferencia ? [formData.preferencia] : []}
                      onSelectionChange={(keys) => {
                        const value = Array.from(keys)[0] as string
                        handleSelectChange("preferencia")(value)
                      }}
                      classNames={{
                        label: "text-slate-800 font-medium",
                        value: "text-slate-800",
                      }}
                    >
                      {preferenciasContacto.map((preferencia) => (
                        <SelectItem key={preferencia.key} value={preferencia.key}>
                          {preferencia.label}
                        </SelectItem>
                      ))}
                    </Select>

                    <div>
                      <label htmlFor="mensaje" className="block text-sm font-medium text-slate-800 mb-2">
                        Mensaje Adicional
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        rows={4}
                        value={formData.mensaje}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors resize-none text-slate-800"
                        placeholder="Cuéntanos más detalles sobre tu consulta..."
                      />
                    </div>

                    <Button
                      type="submit"
                      isLoading={isSubmitting}
                      className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-lg py-4"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
                    </Button>

                    <p className="text-cyan-600 text-sm text-center">
                      * Campos obligatorios. Nos pondremos en contacto contigo dentro de las próximas 24 horas.
                    </p>
                  </form>
                )}
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Mapa de Ubicación */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Nuestra Ubicación</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Nos encontramos en el corazón de Caracas, con fácil acceso y estacionamiento disponible
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="bg-white shadow-lg">
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Cómo Llegar</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      1
                    </span>
                    <p className="text-slate-600">
                      <strong>En Metro:</strong> Estación Plaza Venezuela (Línea 3), salida hacia Av. Lecuna. Caminar 5
                      minutos hacia el Centro Médico.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      2
                    </span>
                    <p className="text-slate-600">
                      <strong>En Vehículo:</strong> Av. Principal con Av. Secundaria. Estacionamiento disponible en el
                      sótano del edificio (primeras 2 horas gratis).
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      3
                    </span>
                    <p className="text-slate-600">
                      <strong>Referencias:</strong> Frente al Hospital Central, al lado del Banco Mercantil. Edificio de
                      cristal azul de 15 pisos.
                    </p>
                  </div>
                </div>

                <Card className="mt-8 bg-yellow-50 border border-yellow-200">
                  <CardBody className="p-4">
                    <p className="text-yellow-800 text-sm">
                      <strong>💡 Tip:</strong> Te recomendamos llegar 15 minutos antes de tu cita para completar el proceso
                      de registro sin prisas.
                    </p>
                  </CardBody>
                </Card>
              </CardBody>
            </Card>

            <Card className="bg-white shadow-lg overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-cyan-100 to-sky-100 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 text-cyan-600 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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
                  <p className="text-slate-600 font-medium">Mapa Interactivo</p>
                  <p className="text-cyan-600 text-sm">Centro Médico Caracas</p>
                  <p className="text-cyan-600 text-sm">Av. Principal 123, Caracas</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Preguntas Frecuentes</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Resolvemos las dudas más comunes sobre nuestros servicios y procedimientos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-cyan-50 to-sky-50 shadow-lg">
                <CardBody className="p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-3">¿Cómo puedo agendar una cita?</h3>
                  <p className="text-slate-600 text-sm">
                    Puedes agendar por teléfono, WhatsApp, email o llenando nuestro formulario de contacto. Te
                    confirmaremos la disponibilidad en menos de 24 horas.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-gradient-to-br from-cyan-50 to-sky-50 shadow-lg">
                <CardBody className="p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-3">¿La primera consulta tiene costo?</h3>
                  <p className="text-slate-600 text-sm">
                    La consulta inicial es completamente gratuita. Incluye evaluación, diagnóstico y plan de tratamiento
                    personalizado.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-gradient-to-br from-cyan-50 to-sky-50 shadow-lg">
                <CardBody className="p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-3">¿Qué debo traer a mi primera cita?</h3>
                  <p className="text-slate-600 text-sm">
                    Trae tu cédula, carnet del seguro médico (si aplica), radiografías previas y lista de medicamentos que
                    tomas actualmente.
                  </p>
                </CardBody>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-cyan-50 to-sky-50 shadow-lg">
                <CardBody className="p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-3">¿Manejan planes de financiamiento?</h3>
                  <p className="text-slate-600 text-sm">
                    Sí, ofrecemos planes de financiamiento flexibles para todos nuestros tratamientos. Consulta las
                    opciones disponibles en tu cita.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-gradient-to-br from-cyan-50 to-sky-50 shadow-lg">
                <CardBody className="p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-3">¿Qué pasa si necesito cancelar mi cita?</h3>
                  <p className="text-slate-600 text-sm">
                    Puedes cancelar o reagendar con al menos 24 horas de anticipación sin costo adicional. Contáctanos lo
                    antes posible.
                  </p>
                </CardBody>
              </Card>

              <Card className="bg-gradient-to-br from-cyan-50 to-sky-50 shadow-lg">
                <CardBody className="p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-3">¿Atienden emergencias?</h3>
                  <p className="text-slate-600 text-sm">
                    Sí, tenemos línea de emergencias 24/7 para urgencias dentales y maxilofaciales. Llama al +58 (212)
                    555-0124.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Final */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">¿Listo para Comenzar tu Transformación?</h2>
          <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
            No esperes más para tener la sonrisa que siempre has soñado. Agenda tu consulta gratuita hoy mismo y da el
            primer paso hacia una nueva versión de ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onPress={handleWhatsAppContact}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-10 py-4"
              startContent={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              }
            >
              Agendar por WhatsApp
            </Button>
            <Button
              onPress={() => window.open("tel:+582125550123", "_self")}
              variant="bordered"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-bold text-lg px-10 py-4"
              startContent={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              }
            >
              Llamar Ahora
            </Button>
          </div>
          <p className="text-cyan-200 mt-6 text-sm">
            Consulta inicial gratuita • Financiamiento disponible • Atención personalizada • Emergencias 24/7
          </p>
        </div>
      </section>
    </div>
  )
}
