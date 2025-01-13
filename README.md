# Galería de Arte - Noelia Requena

Sitio web personal de la artista Noelia Requena, construido con Next.js y optimizado para despliegue estático.

## Características

- 🎨 Galería de obras con vista detallada y navegación
- 🌓 Tema claro/oscuro
- 📱 Diseño responsive
- 🔄 Slideshow en página principal
- 🌍 Contenido bilingüe (ES/EN)
- 🔐 Panel de administración (solo en desarrollo)
- 🖼️ Gestión de imágenes optimizada
- 📝 Biografía y reseñas

## Estructura del Proyecto

```
├── app/                    # Rutas y páginas
│   ├── admin/             # Panel de administración (dev)
│   ├── artworks/          # Galería de obras
│   └── bio/               # Biografía
├── components/            # Componentes reutilizables
├── data/                  # Datos estáticos
│   └── gallery.json      # Datos de la galería
├── public/               
│   └── images/           
│       ├── gallery/      # Imágenes de obras
│       └── slideshow/    # Imágenes del slideshow
└── lib/                  # Utilidades y contextos
```

## Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Sincronizar cambios del admin
npm run sync
```

## Gestión de Imágenes

### Slideshow
- Ubicación: `/public/images/slideshow/`
- Archivos requeridos:
  - `slide1.jpg` a `slide9.jpg`
  - `bg4.jpg` (fondo de la página principal)

### Galería de Obras
- Ubicación: `/public/images/gallery/`
- Formatos: PNG, JPG, WEBP
- Tamaño máximo: 5MB

## Flujo de Trabajo

### 1. Desarrollo Local

- Acceder al panel de admin en `/admin`
- Gestionar obras (añadir/editar/eliminar)
- Los cambios se guardan en localStorage
- Ejecutar `npm run sync` para persistir cambios

### 2. Control de Versiones

```bash
# Añadir cambios
git add .

# Commit
git commit -m "Descripción de los cambios"

# Push
git push origin main
```

### 3. Despliegue

```bash
# Generar build estático
npm run build
```

- Los archivos estáticos se generan en `/out`
- Listos para desplegar en cualquier hosting estático

## Mantenimiento

Para realizar cambios después del despliegue inicial:

1. Clonar el repositorio
2. Realizar cambios en una nueva rama
3. Probar localmente
4. Crear PR para revisión
5. Después de aprobar, hacer merge a main
6. Desplegar nueva versión

## Requisitos

- Node.js 16.x o superior
- NPM 7.x o superior

## Licencia

MIT