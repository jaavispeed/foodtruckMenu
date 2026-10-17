/**
 * Datos centralizados de "El Bajón de los Tíos" Food Truck
 * Modifica aquí la información del negocio, promociones o productos
 * para que se actualicen automáticamente en el menú.
 */
const FOOD_TRUCK_DATA = {
  business: {
    name: "El Bajón de los Tíos",
    titlePrefix: "El Bajón",
    titleSuffix: "de los Tíos",
    tagline: "El auténtico sabor callejero de nuestro Food Truck. Especialidad en Churrascos, Ass, Completos y Papas Fritas recién hechas.",
    logoUrl: "logo.jpg",
    address: "Paula Jaraquema 8125",
    phoneDisplay: "+56 9 4226 2527",
    phoneWhatsapp: "56942262527",
    paymentMethods: "Efectivo, Transferencia electrónica y Tarjetas.",
    modality: "Compra presencial en Food Truck y retiro en local.",
    footerClaim: "¡El mejor sabor para calmar tu bajón!"
  },

  promotions: [
    {
      id: "promo-1",
      name: "Promo 1",
      description: "2 Completos + Bebida en lata",
      price: 6000
    },
    {
      id: "promo-2",
      name: "Promo 2",
      description: "2 Churrascos + Bebida en lata",
      price: 10000
    }
  ],

  categories: [
    {
      id: "churrascos",
      name: "Churrascos",
      icon: "fas fa-hamburger",
      items: [
        {
          name: "Barros Luco",
          price: 5500,
          description: "Abundante queso fundido"
        },
        {
          name: "Completo",
          price: 5500,
          description: "Chucrut, Americana, Tomate natural, Mayonesa"
        },
        {
          name: "Dinámico",
          price: 6000,
          description: "Chucrut, Americana, Palta suave, Tomate, Mayonesa"
        },
        {
          name: "Chacarero",
          price: 5500,
          description: "Tomate, Poroto Verde tierno, Ají verde, Mayonesa"
        }
      ]
    },
    {
      id: "ass",
      name: "Ass",
      icon: "fas fa-bread-slice",
      items: [
        {
          name: "Completo",
          price: 3100,
          description: "Chucrut, Americana, Tomate natural, Mayonesa"
        },
        {
          name: "Italiano",
          price: 3600,
          description: "Tomate en cubos, Palta cremosa, Mayonesa"
        },
        {
          name: "Dinámico",
          price: 4100,
          description: "Chucrut, Americana, Palta suave, Tomate, Mayonesa"
        },
        {
          name: "Chacarero",
          price: 4100,
          description: "Tomate fresco, Poroto Verde, Ají verde, Mayonesa"
        }
      ]
    },
    {
      id: "vienesas",
      name: "Vienesas",
      icon: "fas fa-hotdog",
      items: [
        {
          name: "Completa",
          price: 2600,
          description: "Chucrut, Americana, Tomate natural, Mayonesa"
        },
        {
          name: "Italiana",
          price: 2800,
          description: "Tomate, Palta fresca, Mayonesa"
        },
        {
          name: "Dinámica",
          price: 2800,
          description: "Chucrut, Americana, Palta, Tomate, Mayonesa"
        }
      ]
    },
    {
      id: "papas",
      name: "Papas Fritas",
      icon: "fas fa-box",
      items: [
        {
          name: "Pequeña",
          price: 2000,
          description: "Crujientes, recién fritas y doradas"
        },
        {
          name: "Mediana",
          price: 3000,
          description: "Porción ideal para acompañar tu sándwich"
        },
        {
          name: "Grande",
          price: 4000,
          description: "Porción generosa para compartir"
        }
      ]
    },
    {
      id: "salchipapas",
      name: "Salchipapas",
      icon: "fas fa-cubes",
      items: [
        {
          name: "Pequeña",
          price: 3000,
          description: "Papas fritas con vienesas en rodajas"
        },
        {
          name: "Mediana",
          price: 4000,
          description: "La combinación clásica para matar el bajón"
        },
        {
          name: "Grande",
          price: 5000,
          description: "Bandeja familiar cargada de sabor"
        }
      ]
    },
    {
      id: "papa-carne",
      name: "Papa Carne",
      icon: "fas fa-drumstick-bite",
      items: [
        {
          name: "Pequeña",
          price: 3500,
          description: "Papas fritas con tierna carne sazonada"
        },
        {
          name: "Mediana",
          price: 4500,
          description: "Contundente porción de papas y carne caliente"
        },
        {
          name: "Grande",
          price: 5500,
          description: "La reina de la casa para los bajoneros de verdad"
        }
      ]
    },
    {
      id: "acompanamientos",
      name: "Acompañamientos y Bebidas",
      icon: "fas fa-cookie-bite",
      isFullWidth: true,
      items: [
        {
          name: "Empanada Mechada",
          price: 2500,
          description: "Frita al momento con jugosa carne mechada"
        },
        {
          name: "Empanada Queso",
          price: 2000,
          description: "Rellena de queso caliente derretido"
        },
        {
          name: "Consomé",
          price: 1500,
          description: "Reconfortante caldo casero bien caliente"
        },
        {
          name: "Sopaipillas",
          price: 300,
          unitSuffix: "c/u",
          description: "Crujientes sopaipillas tradicionales"
        },
        {
          name: "Bebida en Lata",
          price: 1000,
          description: "Variedad en lata 350cc bien helada"
        }
      ]
    }
  ]
};
