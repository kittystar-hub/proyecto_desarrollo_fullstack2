const productos = [
  {
    id: 1,
    nombre: "Notebook Gamer",
    precio: 1299990,
    precioOriginal: null,
    imagen: "https://i5.walmartimages.cl/asr/a7dd66c0-f691-4227-8a40-47fec2456f1c.1bb6f0270e2d01383eafa4204eb5a0ff.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    descripcion: "Notebook gamer de alto rendimiento con procesador Intel Core i7 de 13ª generación y GPU NVIDIA RTX 4060. Ideal para jugar, editar vídeo y realizar tareas exigentes.",
    especificaciones: {
      "Procesador": "Intel Core i7-13700H",
      "RAM": "16GB DDR5 4800MHz",
      "Almacenamiento": "1TB SSD NVMe PCIe 4.0",
      "GPU": "NVIDIA RTX 4060 8GB GDDR6",
      "Pantalla": "15.6\" Full HD 144Hz",
      "Batería": "6 celdas, 86Wh"
    },
    categoria: "gamer",
    oferta: false
  },
  {
    id: 2,
    nombre: "PC Escritorio",
    precio: 899990,
    precioOriginal: null,
    imagen: "https://minisitios.ripley.cl/minisitios/icdinamica/2024/09-septiembre/ICD%20computaci%C3%B3n%20110924/AllInOne.jpg",
    descripcion: "Computador todo-en-uno con pantalla de 24 pulgadas, perfecto para oficina, estudio y uso cotidiano. Rendimiento equilibrado con procesador Intel Core i5.",
    especificaciones: {
      "Procesador": "Intel Core i5-12400",
      "RAM": "8GB DDR4 3200MHz",
      "Almacenamiento": "512GB SSD SATA",
      "Pantalla": "24\" Full HD IPS",
      "Sistema": "Windows 11 Home",
      "Conectividad": "WiFi 6, Bluetooth 5.2"
    },
    categoria: "oficina",
    oferta: false
  },
  {
    id: 3,
    nombre: "SSD 1TB",
    precio: 149990,
    precioOriginal: null,
    imagen: "https://media.spdigital.cl/thumbnails/products/rz7s3jb4_d0d6821a_thumbnail_4096.jpg",
    descripcion: "Unidad de estado sólido (SSD) de 1TB con interfaz NVMe, velocidades de lectura de hasta 5000 MB/s. Ideal para juegos, edición y almacenamiento rápido.",
    especificaciones: {
      "Capacidad": "1TB",
      "Interfaz": "M.2 NVMe PCIe 4.0",
      "Lectura": "5000 MB/s",
      "Escritura": "4200 MB/s",
      "Tipo": "NAND TLC",
      "Garantía": "5 años"
    },
    categoria: "componentes",
    oferta: false
  },
  {
    id: 4,
    nombre: "Tarjeta Gráfica",
    precio: 499990,
    precioOriginal: null,
    imagen: "https://static.myshop.cl/fotos/3/1/5/3/5/1_1764687802000.png",
    descripcion: "Tarjeta gráfica NVIDIA GeForce RTX 4060 con 8GB de memoria GDDR6. Perfecta para gaming en 1080p y 1440p, con soporte para Ray Tracing y DLSS 3.",
    especificaciones: {
      "GPU": "NVIDIA RTX 4060",
      "VRAM": "8GB GDDR6",
      "Interfaz": "PCIe 4.0 x16",
      "Consumo": "115W",
      "Salidas": "3x DP 1.4a, 1x HDMI 2.1a",
      "Soporte": "DirectX 12 Ultimate"
    },
    categoria: "componentes",
    oferta: false
  },
  {
    id: 5,
    nombre: "Monitor 27\"",
    precio: 299990,
    precioOriginal: null,
    imagen: "https://rimage.ripley.cl/home.ripley/Attachment/MKP/8117/MPM10002882701/imagen2-1",
    descripcion: "Monitor curvo de 27 pulgadas con resolución WQHD y tasa de refresco de 165Hz. Perfecto para gaming y productividad con colores vibrantes y ángulos de visión amplios.",
    especificaciones: {
      "Pantalla": "27\" Curvo",
      "Resolución": "2560x1440 (WQHD)",
      "Refresco": "165Hz",
      "Tiempo de respuesta": "1ms (MPRT)",
      "Panel": "VA",
      "Conectividad": "DP, HDMI, Audio"
    },
    categoria: "oficina",
    oferta: false
  },
  {
    id: 6,
    nombre: "Memoria RAM 16GB",
    precio: 89990,
    precioOriginal: null,
    imagen: "https://natcomchile.cl/wp-content/uploads/2021/06/memoria-ram-HyperX-81410057.jpg",
    descripcion: "Kit de 2 módulos de memoria RAM DDR4 de 8GB cada uno, total 16GB. Frecuencia de 3200MHz con latencia CL16, ideal para gaming y multitarea.",
    especificaciones: {
      "Capacidad": "16GB (2x8GB)",
      "Tipo": "DDR4",
      "Frecuencia": "3200MHz",
      "Latencia": "CL16",
      "Voltaje": "1.35V",
      "Diseño": "Disipador de calor"
    },
    categoria: "componentes",
    oferta: false
  },
  {
    id: 7,
    nombre: "Teclado Mecánico",
    precio: 79990,
    precioOriginal: null,
    imagen: "https://todoclick.cl/6732674-large_default/teclado-mecanico-hibrido-cougar-core-negro-spa.jpg",
    descripcion: "Teclado mecánico con switches Outemu Red, retroiluminación RGB y diseño compacto. Perfecto para gaming y escritura con respuesta táctil y durabilidad.",
    especificaciones: {
      "Switches": "Outemu Red (lineal)",
      "Iluminación": "RGB por tecla",
      "Formato": "TKL (sin numpad)",
      "Anti-ghosting": "Sí, N-key rollover",
      "Material": "Plástico ABS, con cable trenzado",
      "Compatibilidad": "Windows y Mac"
    },
    categoria: "oficina",
    oferta: false
  },
  {
    id: 8,
    nombre: "Mouse Inalámbrico",
    precio: 19990,
    precioOriginal: null,
    imagen: "https://fotosol.cl/cdn/shop/products/1-19.jpg?crop=center&height=617&v=1623961130&width=617",
    descripcion: "Mouse inalámbrico ergonómico con sensor óptico de 1200 DPI, silencioso y con batería de larga duración. Ideal para oficina y uso diario.",
    especificaciones: {
      "Conexión": "2.4GHz inalámbrico",
      "DPI": "1200 (ajustable)",
      "Botones": "3 (click izquierdo, derecho, scroll)",
      "Batería": "1 x AA (hasta 12 meses)",
      "Alcance": "10 metros",
      "Compatibilidad": "Windows, Mac, Linux"
    },
    categoria: "oficina",
    oferta: false
  },
  {
    id: 9,
    nombre: "Notebook Gamer",
    precio: 1049990,
    precioOriginal: 1499990,
    imagen: "https://scglobal.cl/4992-large_default/notebook-hp-gamer-victus-15-fb3007la-r7-8845hs-16gb-1tb-r4050-w11h.jpg",
    descripcion: "Notebook gamer HP Victus con procesador AMD Ryzen 7 y GPU RTX 4050. Perfecto para jugar y crear contenido con gran rendimiento y pantalla de alta frecuencia.",
    especificaciones: {
      "Procesador": "AMD Ryzen 7 8845HS",
      "RAM": "16GB DDR5 5600MHz",
      "Almacenamiento": "1TB SSD NVMe",
      "GPU": "NVIDIA RTX 4050 6GB GDDR6",
      "Pantalla": "15.6\" Full HD 144Hz",
      "Batería": "4 celdas, 70Wh"
    },
    categoria: "gamer",
    oferta: true
  },
  {
    id: 10,
    nombre: "PC Escritorio",
    precio: 1899990,
    precioOriginal: 2599990,
    imagen: "https://clonesyperifericos.com/wp-content/uploads/2026/08/PC_GAMER_STRIKE.png",
    descripcion: "PC de escritorio de alto rendimiento con AMD Ryzen 7 y GPU RTX 4070. Ideal para gaming en 4K, streaming y edición de vídeo profesional.",
    especificaciones: {
      "Procesador": "AMD Ryzen 7 7800X3D",
      "RAM": "32GB DDR5 6000MHz",
      "Almacenamiento": "1TB SSD NVMe + 1TB HDD",
      "GPU": "NVIDIA RTX 4070 12GB GDDR6X",
      "Refrigeración": "Líquida AIO 240mm",
      "Fuente": "750W 80+ Gold"
    },
    categoria: "gamer",
    oferta: true
  },
  {
    id: 11,
    nombre: "SSD 1TB",
    precio: 219490,
    precioOriginal: 249990,
    imagen: "https://centrale.cl/wp-content/uploads/Disco-SSD-1TB-Kingston-NV3-M.2-2230-NVMe-PCIe-4.0-x4-Nand-3D-1.webp",
    descripcion: "SSD Kingston NV3 de 1TB con interfaz NVMe PCIe 4.0 y tecnología 3D NAND. Ofrece velocidades ultrarrápidas para juegos y aplicaciones pesadas.",
    especificaciones: {
      "Capacidad": "1TB",
      "Interfaz": "M.2 NVMe PCIe 4.0",
      "Lectura": "6000 MB/s",
      "Escritura": "5000 MB/s",
      "Tipo": "NAND 3D",
      "Consumo": "5W (activo)"
    },
    categoria: "componentes",
    oferta: true
  },
  {
    id: 12,
    nombre: "Tarjeta Gráfica",
    precio: 374990,
    precioOriginal: 499990,
    imagen: "https://media.spdigital.cl/thumbnails/products/_xv8eamf_253e1f5d_thumbnail_512.jpg",
    descripcion: "Tarjeta gráfica RTX 4060 Ti con 8GB de VRAM. Diseñada para gaming en 1440p con Ray Tracing y DLSS, ofreciendo un excelente equilibrio entre precio y rendimiento.",
    especificaciones: {
      "GPU": "NVIDIA RTX 4060 Ti",
      "VRAM": "8GB GDDR6",
      "Interfaz": "PCIe 4.0 x16",
      "Consumo": "160W",
      "Salidas": "3x DP 1.4a, 1x HDMI 2.1a",
      "Soporte": "DirectX 12 Ultimate"
    },
    categoria: "componentes",
    oferta: true
  },
  {
    id: 13,
    nombre: "Monitor 27\"",
    precio: 269990,
    precioOriginal: 299990,
    imagen: "https://media.falabella.com/falabellaCL/152191364_01/w=1500,h=1500,fit=cover",
    descripcion: "Monitor curvo de 27\" con resolución 1440p y 165Hz, panel VA con colores vibrantes y tiempo de respuesta rápido. Ideal para gaming inmersivo.",
    especificaciones: {
      "Pantalla": "27\" Curvo",
      "Resolución": "2560x1440 (WQHD)",
      "Refresco": "165Hz",
      "Tiempo de respuesta": "1ms (MPRT)",
      "Panel": "VA",
      "Conectividad": "2x HDMI, 2x DP, Audio"
    },
    categoria: "oficina",
    oferta: true
  },
  {
    id: 14,
    nombre: "Memoria RAM 16GB",
    precio: 79190,
    precioOriginal: 89990,
    imagen: "https://m.media-amazon.com/images/I/41XJ679agFL._SL500_.jpg",
    descripcion: "Kit de 2 módulos de memoria RAM DDR5 de 8GB, total 16GB a 4800MHz. Diseñada para las últimas plataformas Intel y AMD, con baja latencia y eficiencia.",
    especificaciones: {
      "Capacidad": "16GB (2x8GB)",
      "Tipo": "DDR5",
      "Frecuencia": "4800MHz",
      "Latencia": "CL40",
      "Voltaje": "1.1V",
      "Diseño": "Disipador de calor"
    },
    categoria: "componentes",
    oferta: true
  },
  {
    id: 15,
    nombre: "Teclado Mecánico",
    precio: 65590,
    precioOriginal: 79990,
    imagen: "https://static.wixstatic.com/media/19e3c3_ef7569780f3b4a489f4d063817491d71~mv2.jpg/v1/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/19e3c3_ef7569780f3b4a489f4d063817491d71~mv2.jpg",
    descripcion: "Teclado mecánico con switches lineales Outemu Red, retroiluminación RGB y diseño resistente a salpicaduras. Ideal para gaming y uso intensivo.",
    especificaciones: {
      "Switches": "Outemu Red (lineal)",
      "Iluminación": "RGB completa",
      "Formato": "Full size (con numpad)",
      "Anti-ghosting": "Sí, N-key rollover",
      "Material": "Plástico ABS",
      "Reposamuñecas": "Incluido"
    },
    categoria: "oficina",
    oferta: true
  },
  {
    id: 16,
    nombre: "Procesador Ryzen",
    precio: 100190,
    precioOriginal: 129990,
    imagen: "https://assets.pcfactory.cl/public/foto/46284/2_500.jpg?t=1661280777450",
    descripcion: "Procesador AMD Ryzen 5 7600X con 6 núcleos y 12 hilos, basado en la arquitectura Zen 4. Ideal para gaming y productividad con excelente rendimiento por núcleo.",
    especificaciones: {
      "Núcleos": "6",
      "Hilos": "12",
      "Frecuencia base": "4.7GHz",
      "Frecuencia turbo": "5.3GHz",
      "Caché": "38MB (L2+L3)",
      "TDP": "105W",
      "Socket": "AM5"
    },
    categoria: "componentes",
    oferta: true
  }
];