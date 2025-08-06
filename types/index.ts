import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

// Tipos para servicios
export interface Servicio {
  id: number;
  nombre: string;
  imagen: string;
  descripcion: string;
  duracion: string;
  recuperacion: string;
  precio: string;
}

export type CategoriaServicio = 'maxilofacial' | 'esteticos' | 'dermatologicos';

export type ServiciosData = Record<CategoriaServicio, Servicio[]>;

// Tipos para productos
export interface Producto {
  id: number;
  nombre: string;
  marca: string;
  imagen: string;
  precio: string;
  descripcion: string;
  beneficios: string[];
  categoria: CategoriaProducto;
}

export type CategoriaProducto = 
  | 'limpiadores' 
  | 'serums' 
  | 'cremas' 
  | 'protectores' 
  | 'postprocedimiento' 
  | 'suplementos';

export type ProductosData = Record<CategoriaProducto, Producto[]>;

// Tipos para formularios
export interface FormularioContacto {
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  motivo: string;
  mensaje: string;
  preferencia: 'telefono' | 'whatsapp' | 'email';
}

export interface OptionItem {
  key: string;
  label: string;
}

// Tipos para metadatos
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
}
