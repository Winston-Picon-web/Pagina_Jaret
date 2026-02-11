/**
 * Product database — static catalog data
 * Images follow the path: assets/products/nombre-archivo.webp
 */

export const products = [
  {
    id: 1,
    name: "Audífonos Inalámbricos Pro",
    price: 249.99,
    category: "audio",
    description: "Cancelación de ruido activa, 30 h de batería y sonido espacial envolvente.",
    image: "assets/products/audifonos-pro.webp"
  },
  {
    id: 2,
    name: "Smartwatch Ultra",
    price: 399.99,
    category: "wearables",
    description: "Pantalla AMOLED, GPS de doble frecuencia y monitoreo avanzado de salud.",
    image: "assets/products/smartwatch-ultra.webp"
  },
  {
    id: 3,
    name: "Teclado Mecánico RGB",
    price: 179.99,
    category: "accesorios",
    description: "Switches ópticos, retroiluminación personalizable y diseño ergonómico.",
    image: "assets/products/teclado-mecanico.webp"
  },
  {
    id: 4,
    name: "Cámara Mirrorless 4K",
    price: 1299.99,
    category: "fotografía",
    description: "Sensor full-frame de 45 MP, grabación 4K a 120 fps y estabilización en 5 ejes.",
    image: "assets/products/camara-mirrorless.webp"
  },
  {
    id: 5,
    name: "Monitor Curvo 34\"",
    price: 599.99,
    category: "accesorios",
    description: "Panel IPS ultrawide QHD, 165 Hz y HDR 400 para productividad y gaming.",
    image: "assets/products/monitor-curvo.webp"
  },
  {
    id: 6,
    name: "Bocina Portátil 360°",
    price: 129.99,
    category: "audio",
    description: "Sonido omnidireccional, resistencia IP67 y 20 h de reproducción continua.",
    image: "assets/products/bocina-portatil.webp"
  },
  {
    id: 7,
    name: "Drone Explorer X",
    price: 899.99,
    category: "fotografía",
    description: "Cámara 4K con gimbal de 3 ejes, 40 min de vuelo y detección de obstáculos.",
    image: "assets/products/drone-explorer.webp"
  },
  {
    id: 8,
    name: "Pulsera Fitness Band",
    price: 79.99,
    category: "wearables",
    description: "Monitor de ritmo cardíaco, SpO2 y seguimiento de sueño con 14 días de batería.",
    image: "assets/products/pulsera-fitness.webp"
  },
  {
    id: 9,
    name: "Cargador MagSafe Duo",
    price: 59.99,
    category: "accesorios",
    description: "Carga inalámbrica rápida de 15 W para smartphone y smartwatch simultáneamente.",
    image: "assets/products/cargador-magsafe.webp"
  },
  {
    id: 10,
    name: "Micrófono Condensador USB",
    price: 149.99,
    category: "audio",
    description: "Patrón cardioide, resolución de 24 bit/96 kHz y control de ganancia integrado.",
    image: "assets/products/microfono-condensador.webp"
  },
  {
    id: 11,
    name: "Lente 50 mm f/1.4",
    price: 449.99,
    category: "fotografía",
    description: "Apertura luminosa, bokeh cremoso y enfoque automático silencioso para retratos.",
    image: "assets/products/lente-50mm.webp"
  },
  {
    id: 12,
    name: "Smart Ring Titanio",
    price: 299.99,
    category: "wearables",
    description: "Seguimiento de actividad y sueño en un anillo ligero de titanio grado 5.",
    image: "assets/products/smart-ring.webp"
  }
];

export const categories = [
  { id: "todos", label: "Todos" },
  { id: "audio", label: "Audio" },
  { id: "wearables", label: "Wearables" },
  { id: "accesorios", label: "Accesorios" },
  { id: "fotografía", label: "Fotografía" }
];
