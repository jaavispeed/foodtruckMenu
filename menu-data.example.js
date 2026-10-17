/**
 * PLANTILLA / EJEMPLO DE DATOS VACÍA
 * 
 * Copia este archivo o utilízalo como referencia para estructurar
 * la información en `menu-data.js`.
 */
const FOOD_TRUCK_DATA = {
  business: {
    name: "Nombre del Negocio",
    titlePrefix: "Nombre", // Primera parte para resaltar con estilo
    titleSuffix: "del Negocio", // Segunda parte con color de acento
    tagline: "Descripción breve o eslogan del Food Truck.",
    logoUrl: "logo.jpg", // Ruta a la imagen del logo
    address: "Dirección o punto de atención",
    phoneDisplay: "+56 9 0000 0000", // Teléfono en formato legible
    phoneWhatsapp: "56900000000", // Teléfono sin espacios ni signos para el link de WhatsApp
    paymentMethods: "Efectivo, Transferencia electrónica y Tarjetas.",
    modality: "Compra presencial en Food Truck y retiro en local.",
    footerClaim: "¡Frase o lema para el pie de página!"
  },

  promotions: [
    {
      id: "promo-1",
      name: "Promo 1",
      description: "Descripción de la oferta (ej. 2 productos + bebida)",
      price: 0
    }
  ],

  categories: [
    {
      id: "categoria-ejemplo",
      name: "Nombre Categoría",
      icon: "fas fa-utensils", // Clase de FontAwesome (ej. fas fa-hamburger, fas fa-hotdog, fas fa-box)
      isFullWidth: false, // Opcional: true si quieres que ocupe todo el ancho inferior
      items: [
        {
          name: "Nombre del Producto",
          price: 0,
          unitSuffix: "", // Opcional (ej: "c/u", "porción")
          description: "Ingredientes o detalle del producto"
        }
      ]
    }
  ]
};
