import Image from "next/image";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import type { Servicio } from "@/types";

interface ServiceCardProps {
  servicio: Servicio;
  onWhatsAppClick: (serviceName: string) => void;
}

export const ServiceCard = ({ servicio, onWhatsAppClick }: ServiceCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-white to-slate-50 shadow-lg hover:shadow-2xl transition-all duration-300 border border-cyan-50">
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-cyan-50 to-sky-50 rounded-t-lg">
        <Image
          src={servicio.imagen || "/placeholder.svg"}
          alt={servicio.nombre}
          width={400}
          height={300}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-bold">
          {servicio.precio}
        </div>
      </div>

      <CardBody className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-3">{servicio.nombre}</h3>
        <p className="text-slate-600 leading-relaxed mb-4 text-sm line-clamp-3">
          {servicio.descripcion}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div className="bg-cyan-50 p-3 rounded-lg">
            <div className="flex items-center mb-1">
              <span className="text-cyan-600 mr-2">⏱️</span>
              <span className="font-medium text-slate-700">Duración</span>
            </div>
            <span className="text-slate-600">{servicio.duracion}</span>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="flex items-center mb-1">
              <span className="text-green-600 mr-2">🔄</span>
              <span className="font-medium text-slate-700">Recuperación</span>
            </div>
            <span className="text-slate-600">{servicio.recuperacion}</span>
          </div>
        </div>

        <div className="space-y-3">
          <Button
            onPress={() => onWhatsAppClick(servicio.nombre)}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
            startContent={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
            }
          >
            Consultar Disponibilidad
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
  );
};
