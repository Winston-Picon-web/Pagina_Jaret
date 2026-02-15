# 🛒 Pagina de productos ilegales del Jaret

# Mielitas VIP — Catálogo estático de productos

Sitio web estático que muestra un catálogo de productos (Mielitas VIP y Pink Pussy Cat). La aplicación está implementada con HTML, CSS y JavaScript (sin backend), y sirve como una landing / catálogo de productos con modal de detalles y contacto.

## Características
- Catálogo de productos renderizado desde un arreglo en JavaScript.
- Modal de detalle por producto con opciones para contactar por WhatsApp o correo.
- Filtros por categoría y búsqueda en tiempo real.
- Sección de información general (Beneficios, Modo de uso, Efectos, Tipos de producto).
- Assets multimedia en la carpeta `recursos para la pagina`.

## Tecnologías
- HTML (index.html)
- CSS (style.css)
- JavaScript (ES modules, `js/main.js`, `js/database.js`)

## Estructura principal
- index.html — página principal y estructura del sitio.
- style.css — estilos globales.
- js/
  - main.js — lógica de renderizado, eventos y modal.
  - database.js — listado de productos, categorías e ítems de información.
- recursos para la pagina/ — imágenes y recursos usados en el sitio.

## Cómo ejecutar (modo desarrollo local)
1. Clona el repositorio:
   git clone https://github.com/Winston-Picon-web/Pagina_Jaret.git
2. Abre el archivo `index.html` en tu navegador, o sirve el sitio localmente (recomendado) desde la carpeta del proyecto:
   - Con Python 3:
     python -m http.server 8000
     y abre http://localhost:8000
   - Con cualquier servidor estático (Live Server, http-server, etc.)

## Cómo editar productos y precios
- Los productos se definen en `js/database.js` dentro de la constante `products`. Cada objeto tiene propiedades como:
  - id, name, price, category, description, image
- Puedes cambiar la estructura del precio (texto libre o número). El render en `js/main.js` detecta si `price` es cadena o número y lo muestra apropiadamente.
- Para cambiar el símbolo/moneda o el formato de visualización, modifica `priceFormatter` en `js/main.js`.

## Notas sobre contenido
- Este repositorio es un sitio estático de catálogo y no incluye funcionalidad de compra ni procesamiento de pagos.
- Verifica que las rutas de las imágenes en `recursos para la pagina/` existan; de lo contrario reemplaza el valor `image` en `js/database.js` por rutas válidas.

## Contribuir
- Abre un issue o un PR con tus cambios. Para cambios rápidos (texto, imágenes, estilos) modifica los archivos locales y crea un PR con un branch claro.

## Licencia
- Licencia codigo abierto.

## Contacto
- Para dudas o soporte abre un issue en este repositorio o contacta al mantenedor.
