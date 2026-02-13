/**
 * Product database — Mielitas VIP catalog
 * Images from: recursos/
 */

export const products = [
  {
    id: 1,
    name: "Mielitas VIP — Máxima Potencia",
    // precio con varias presentaciones en texto
    price: "Q500.00 caja, media caja Q400, 3 sobres Q340, Unidad Q65",
    category: "mielitas",
    description: "Diseñadas para quienes buscan un efecto mucho más fuerte e intenso. Fórmula exclusiva con ingredientes naturales de alta potencia. Eleva el deseo, la energía y la resistencia al máximo nivel. 🔥 Presentación de 20g por sobre.",
    image: "recursos para la pagina/producto1.jpg"
  },
  {
    id: 2,
    name: "Pink Pussy Cat — Miel Afrodisíaca Femenina",
    price: "Q65 unidad",
    category: "para-ella",
    description: "Miel afrodisíaca especialmente formulada para mujeres. Estimula el deseo y la pasión femenina, aumenta la energía y vitalidad, intensifica la sensibilidad y el placer. Ingredientes naturales y de acción rápida. 💗✨",
    image: "recursos para la pagina/producto2.png"
  },
  {
    id: 3,
    name: "Mielitas VIP — Energía Natural",
    price: "Q470.00 caja, media caja Q370, 3 sobres Q330, Unidad Q60",
    category: "mielitas",
    description: "No dejes que el estrés apague tu fuego. Efecto más fuerte, intenso y prolongado. Aumenta la energía y el rendimiento. Estimula el deseo de manera inmediata. 100% natural.",
    image: "recursos para la pagina/publicidad_producto1.jpg"
  },
  {
    id: 4,
    name: "Pink Pussy Cat — Sensualidad Natural",
    price: "Q470.00 caja, media caja Q370, 3 sobres Q330, Unidad Q60",
    category: "para-ella",
    description: "Despierta tu lado más atrevido y sensual. Aumenta la energía y vitalidad, intensifica la sensibilidad y el placer. Elaborada con ingredientes naturales. ¡Atrévete a probarla! 🌸",
    image: "recursos para la pagina/publicidad_producto2.jpg"
  },
  {
    id: 5,
    name: "Mielitas VIP — Colección Completa",
    price: "Q955.00",
    category: "paquetes",
    description: "Conoce nuestras mielitas: VIP y Pink Pussy Cat. Sin efectos secundarios, sabor dulce, 100% efectivo y natural. Paquete ideal para parejas.",
    image: "recursos para la pagina/publicidad_producto_2.jpg"
  },
];

export const categories = [
  { id: "todos", label: "Todos" },
  { id: "mielitas", label: "Mielitas" },
  { id: "para-ella", label: "Para Ella" },
  { id: "paquetes", label: "Paquetes" }
];

export const infoItems = [
  {
    id: 1,
    title: "Beneficios",
    description: "Eleva los niveles de testosterona, mayor rendimiento y resistencia, erecciones más firmes, reducción del estrés y la fatiga. Sin efectos secundarios. Potencia la experiencia íntima sin límites.",
    image: "recursos para la pagina/beneficios_de_uar_el_producto.jpg"
  },
  {
    id: 2,
    title: "Modo de Uso",
    description: "Consumir 2-3 horas antes de la relación. Una bolsita completa, directamente o disuelta en bebida. Beber bastante agua. Frecuencia recomendada: cada 2-3 días según tolerancia.",
    image: "recursos para la pagina/publicidad_como_se_usa.jpg"
  },
  {
    id: 3,
    title: "Efectos al Usarse",
    description: "Aumento del deseo, mayor resistencia y energía, sensaciones intensificadas y efecto prolongado. Respuestas individuales pueden variar; en general actúa rápido y su efecto dura varias horas.",
    image: "recursos para la pagina/publicidad_efectos_al_usarse.jpg"
  },
  {
    id: 4,
    title: "Efectos del Producto",
    description: "Efecto más fuerte, intenso y prolongado. Aumenta la energía y el rendimiento. Estimula el deseo de manera inmediata. Ideal para mejorar la experiencia íntima.",
    image: "recursos para la pagina/publicidad_efectos_del_producto.jpg"
  },
  {
    id: 5,
    title: "Tipos de Producto",
    description: "Ofrecemos presentaciones en caja completa, media caja, paquetes de 3 sobres y unidades sueltas para que elijas según tu necesidad y presupuesto.",
    image: "recursos para la pagina/publicidad_tipos_de_producto.jpg"
  }
];