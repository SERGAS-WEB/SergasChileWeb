# SERGAS - Sitio Web Corporativo

[![Netlify Status](https://api.netlify.com/api/v1/badges/tu-badge-id/deploy-status)](https://app.netlify.com/sites/tu-sitio/deploys)

Sitio web oficial de **SERGAS**, empresa líder en ingeniería térmica, calderas, piping y montajes mecánicos en Chile.

## 🚀 Vista Rápida

- **URL**: https://sergaschile.netlify.app
- **Dominio Oficial**: www.sergaschile.com
- **Año de Fundación**: 2017
- **Certificaciones**: SEC Clase I / S-Salud Decreto N°10-12 MINSAL

## 📋 Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación Local](#instalación-local)
- [Despliegue en Netlify](#despliegue-en-netlify)
- [Mantenimiento y Actualización](#mantenimiento-y-actualización)
- [Contacto](#contacto)

## ✨ Características

- ✅ **Diseño Moderno y Responsive** - Adaptado a todos los dispositivos
- ✅ **Arquitectura Basada en Datos** - Contenido gestionado desde `data.json`
- ✅ **SPA (Single Page Application)** - Navegación fluida sin recargas
- ✅ **Formulario de Contacto Funcional** - Integrado con Netlify Forms
- ✅ **Menú Hamburguesa** - Optimizado para dispositivos móviles
- ✅ **Scroll Suave** - Navegación intuitiva entre secciones
- ✅ **SEO Básico** - Meta tags y estructura semántica
- ✅ **Fallbacks Inteligentes** - Contenido de respaldo si falla la carga de datos

## 🛠️ Tecnologías

| Tecnología | Uso |
|------------|-----|
| **HTML5** | Estructura semántica |
| **CSS3** | Estilos y animaciones (Grid, Flexbox, Variables CSS) |
| **JavaScript (Vanilla)** | Lógica, carga de datos y navegación |
| **JSON** | Almacenamiento de datos (servicios y contacto) |
| **Font Awesome 6** | Íconos vectoriales |
| **Netlify** | Hosting y formularios (Netlify Forms) |

## 📁 Estructura del Proyecto

sergas-web/
├── index.html # Página principal (estructura HTML)
├── data.json # Datos de servicios y contacto
├── styles.css # Todos los estilos CSS
├── script.js # Lógica JavaScript
├── _redirects # Configuración de rutas para Netlify
└── README.md # Documentación del proyecto


### Descripción de Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Contiene toda la estructura HTML de la página. Incluye header, hero, servicios, about, contacto y footer. |
| `data.json` | Almacena los datos dinámicos: lista de servicios y datos de contacto. Edita este archivo para actualizar contenido sin tocar HTML. |
| `styles.css` | CSS moderno con variables, grid, flexbox, animaciones y diseño responsive. |
| `script.js` | Carga los datos desde `data.json`, renderiza servicios y contacto, maneja el menú hamburguesa y la navegación activa. |
| `_redirects` | Configuración de Netlify para manejo de rutas SPA. **IMPORTANTE:** No eliminar este archivo. |

## 🔧 Instalación Local

### Requisitos Previos
- Navegador moderno (Chrome, Firefox, Edge, Safari)
- Editor de código (VS Code, Sublime Text, etc.)
- (Opcional) Servidor local como Live Server de VS Code

### Pasos para ejecutar localmente

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/sergas-web.git
cd sergas-web
```
2. Abrir con Live Server (VS Code)

Instala la extensión "Live Server"

Haz clic derecho en index.html → "Open with Live Server"

3. O abrir directamente

Abre index.html en tu navegador (recomendado con servidor local por el fetch a data.json)

Nota: Para desarrollo local, algunos navegadores bloquean fetch en archivos locales. Usa Live Server o cualquier servidor HTTP.

## 🚀 Despliegue en Netlify
Opción 1: Desde GitHub (Recomendado)

1. Crear repositorio en GitHub y subir todos los archivos:

```bash
git init
git add .
git commit -m "Primera versión SERGAS web"
git remote add origin https://github.com/tu-usuario/sergas-web.git
git push -u origin main
```

2. Ir a Netlify → "Add new site" → "Import an existing project"

3. Seleccionar GitHub y autorizar la conexión

4. Seleccionar el repositorio sergas-web

5. Configuración de despliegue (dejar por defecto):

5.1 Build command: (vacío)

5.2 Publish directory: (vacío o /)

6. Hacer clic en "Deploy site"

7. Configurar dominio personalizado (opcional):

7.1 Settings → Domain Management → Add custom domain

7.2 Agregar www.sergaschile.com

## Opción 2: Drag & Drop Directo
1. Arrastrar todos los archivos a Netlify Drop

2. El sitio estará disponible inmediatamente

## Variables de Entorno (Opcional)
Si necesitas proteger información sensible, en Netlify:

Settings → Environment variables

Agregar variables como API_KEY, SECRET_TOKEN, etc.

## 📝 Mantenimiento y Actualización
Cómo actualizar los servicios
Edita el archivo data.json:

```json
{
  "servicios": [
    {
      "id": 1,
      "icono": "fa-fire",
      "titulo": "Nuevo Servicio",
      "descripcion": "Descripción actualizada..."
    }
  ]
}}
```
## Cómo actualizar datos de contacto
Edita la sección "contacto" en data.json:

```json
{
  "contacto": {
    "direccion": "Nueva dirección",
    "email": "nuevo@email.com",
    "telefonos": [...]
  }
}
```

## Cómo cambiar colores
Edita el archivo styles.css buscando el color principal:

```css
/* Cambia este color para actualizar toda la paleta */
:root {
    --primary-color: #e94560;  /* <-- Cambia este valor */
    --dark-color: #1a1a2e;
}
```

## Agregar una nueva sección
1. Agregar la sección en index.html

2. Estilizar en styles.css

3. (Opcional) Agregar datos en data.json

## 🧪 Pruebas y Validación
Validar enlaces
Todos los enlaces internos usan #id para navegación suave.
Verificar que los IDs coincidan con las secciones.

## Probar formulario
El formulario usa netlify en el atributo action. Para probarlo localmente:

1. Desplegar en Netlify

2. Enviar un mensaje de prueba

3. Revisar en Netlify → Forms

## Verificar responsive
Abrir en diferentes dispositivos o usar DevTools de Chrome:

* Ctrl + Shift + I → Toggle Device Toolbar

* Probar en tamaños: 320px, 768px, 1024px, 1440px

## 🌐 SEO y Rendimiento
### Meta tags actuales
```html
<title>SERGAS | Ingeniería Térmica y Soluciones Metalmecánicas</title>
<meta name="description" content="SERGAS: Líderes en ingeniería térmica, calderas, piping y montajes mecánicos en Coquimbo." /> 
```
### Mejoras sugeridas
1. Agregar Open Graph tags para compartir en redes:

```html
<meta property="og:title" content="SERGAS - Ingeniería Térmica" />
<meta property="og:description" content="Líderes en calderas, piping y montajes mecánicos" />
<meta property="og:image" content="https://sergaschile.com/og-image.jpg" />
```
2. Agregar Google Analytics (opcional):

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```
3. Optimizar imágenes (si agregas): Usar formatos WebP y lazy loading

## 📱 Contacto y Soporte
Equipo SERGAS
Contacto	Detalle
📍 Dirección	Ruta D-43, Sector Las Barrancas, Coquimbo
📧 Email	contactosergas@gmail.com
📞 Manuel Orellana	+569 73393666
📞 Wilson Barrientos	+569 99991606
🌐 Web	www.sergaschile.com

### Soporte Técnico para este Sitio
Si encuentras problemas técnicos con el sitio web:

Revisar la consola del navegador (F12 → Console)

Verificar que data.json esté accesible

Asegurar que _redirects esté en la raíz del proyecto

## 📄 Licencia
Todos los derechos reservados © 2026 SERGAS.

## 🏆 Agradecimientos
Netlify - Hosting y despliegue continuo

Font Awesome - Íconos gratuitos

Comunidad Open Source - Inspiración y recursos

¡Gracias por visitar SERGAS! 🚀

text

---

## 🔍 Resumen Rápido sobre `_redirects`

| Pregunta | Respuesta |
|----------|-----------|
| **¿Es obligatorio?** | Sí, para SPAs con rutas en JavaScript |
| **¿Dónde va?** | En la raíz del proyecto (misma carpeta que `index.html`) |
| **¿Qué hace?** | Redirige todas las rutas a `index.html` (código 200) |
| **¿Se ve en el navegador?** | No, es solo para el servidor de Netlify |
| **¿Puedo eliminarlo?** | No, si eliminas, las subrutas darán error 404 |

---

## 🎯 Próximos Pasos Sugeridos

1. **Subir estos archivos a GitHub**
2. **Conectar con Netlify** usando el método explicado
3. **Probar el formulario** enviando un mensaje
4. **Configurar dominio personalizado** (opcional)
5. **Agregar Google Analytics** para medir visitas

¿Necesitas que agregue alguna funcionalidad extra como un carrusel de proyectos, testimonios de clientes, o un mapa de ubicación interactivo?
