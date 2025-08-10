# Proyecto Web Clínica Odontológica (MVP)

Este proyecto consiste en el desarrollo de un sitio web full-stack para una clínica de odontología y cirugía maxilofacial. El objetivo principal es servir como un proyecto de aprendizaje para construir una aplicación completa desde la planificación hasta el despliegue, abarcando frontend, backend y base de datos, siguiendo las mejores prácticas de la industria.

La versión inicial (MVP) se centrará en crear un sitio web informativo profesional y un panel de administración para que el propietario de la clínica pueda gestionar el contenido dinámico (servicios y productos) de forma autónoma.

## 🎯 Objetivo Principal

Construir una aplicación web completa y funcional utilizando un stack tecnológico moderno, con un fuerte enfoque en el aprendizaje de la arquitectura full-stack, la interacción con bases de datos a través de un ORM y la implementación de autenticación segura.

## 🛠️ Stack Tecnológico (El Camino del Arquitecto)

| Componente        | Tecnología Elegida                                         | ¿Por qué?                                                                                              |
| ----------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Framework**     | **Next.js con TypeScript**                                 | Full-stack integrado, aprovecha el conocimiento de React, excelente para SEO. TypeScript da seguridad. |
| **Estilos/UI**    | **Tailwind CSS + HeroUI**                                  | Rápido, moderno, flexible. HeroUI da componentes pre-hechos para acelerar el desarrollo.            |
| **Base de Datos** | **PostgreSQL**                                             | Relacional, robusta, estándar de la industria. Ideal para datos estructurados.           |
| **ORM**           | **Prisma**                                                 | Abstracción moderna y segura para interactuar con la BD, con seguridad de tipos de extremo a extremo. |
| **Autenticación** | **NextAuth.js (Auth.js)**                                  | Solución completa y segura para login, gestión de sesiones y protección de rutas.                   |
| **Almacenamiento de Medios** | **Cloudinary**                                  | Servicio especializado para almacenar y optimizar imágenes. Plan gratuito generoso y escalable.      |
| **Entorno Local** | **Docker (para PostgreSQL)**                               | Permite correr la base de datos de forma aislada y consistente sin instalarla en el sistema.           |
| **Despliegue**    | **Vercel (App) y Neon.tech (DB)**                          | Plataformas con planes gratuitos robustos y una ruta de escalabilidad clara para el futuro.          |

## 🏗️ Arquitectura de la Aplicación

### Modelo de Datos (Esquema de Prisma)

Definido en `prisma/schema.prisma`:
```prisma
// Proveedor de la base de datos y URL de conexión
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Generador del cliente de Prisma
generator client {
  provider = "prisma-client-js"
}

// Modelo para el administrador
model User {
  id        String   @id @default(cuid())
  name      String?
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

// Modelo para los servicios de la clínica
model Service {
  id          String   @id @default(cuid())
  name        String
  description String   @db.Text
  imageUrl    String?
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

// Modelo para los productos en venta
model Product {
  id          String   @id @default(cuid())
  name        String
  description String   @db.Text
  price       Float
  imageUrl    String?
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```


## 🌐 API Endpoints (Rutas REST)

### Rutas Públicas

- **GET `/api/services`**: Obtiene todos los servicios activos.
- **GET `/api/products`**: Obtiene todos los productos activos.

### Rutas Privadas (Requieren Autenticación)

- **POST `/api/admin/services`**: Crea un nuevo servicio.
- **PUT `/api/admin/services/[id]`**: Actualiza un servicio existente.
- **DELETE `/api/admin/services/[id]`**: Elimina un servicio.
- **POST `/api/admin/products`**: Crea un nuevo producto.
- **PUT `/api/admin/products/[id]`**: Actualiza un producto existente.
- **DELETE `/api/admin/products/[id]`**: Elimina un producto.

---

## 🚀 Plan de Desarrollo por Hitos

### Hito 0: Preparación del Terreno

- ✅ Inicializar Proyecto Next.js con el template de HeroUI.
- ✅ Configurar Git y enlazar a un repositorio remoto.
- Instalar dependencias del backend: `prisma`, `@prisma/client`, `next-auth`, `bcryptjs`.
- Configurar y levantar la base de datos local con Docker.

### Hito 1: Cimientos del Backend

- Inicializar Prisma (`npx prisma init`).
- Configurar la `DATABASE_URL` en el archivo `.env`.
- Definir los modelos en `prisma/schema.prisma`.
- Ejecutar la primera migración para crear las tablas en la BD (`npx prisma migrate dev`).

### Hito 2: Construcción de la API Pública

- Crear endpoint `GET /api/services`.
- Crear endpoint `GET /api/products`.
- Probar los endpoints.

### Hito 3: Montaje del Escaparate (Frontend Público)

- Crear la página de Servicios consumiendo la API con `getStaticProps`.
- Renderizar los servicios con componentes de HeroUI.
- Repetir el proceso para la página de Productos.
- Maquetar las páginas estáticas (Inicio, Sobre Mí, Contacto).

### Hito 4: La Zona Privada (Panel de Administración)

- Configurar NextAuth.js con el proveedor Credentials.
- Crear la página y formulario de Login.
- Crear y proteger el layout del panel de administración.
- Implementar el CRUD completo (API y UI) para los Servicios.

### Hito 5: Toques Finales y Futuro

- Implementar el CRUD completo (API y UI) para los Productos.
- (Post-MVP) Integrar la subida de imágenes a Cloudinary en los formularios del admin.
- Refinar y probar la aplicación completa.
- (Futuro) Desplegar en Vercel y



## ⚙️ Configuración de Entorno

### `docker-compose.yml` (para la base de datos local)

```yaml
version: '3.8'
services:
  postgres:
    image: postgres:15
    restart: always
    environment:
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: supersecretpassword
      POSTGRES_DB: clinicaDB
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### `.env` (variables de entorno)

```env
# URL de conexión para Prisma, debe coincidir con los datos de docker-compose.yml
DATABASE_URL="postgresql://admin:supersecretpassword@localhost:5432/clinicaDB"

# Clave secreta para NextAuth.js (puedes generar una con `openssl rand -base64 32`)
NEXTAUTH_SECRET="pon-aqui-tu-clave-secreta"
NEXTAUTH_URL="http://localhost:3000"
```