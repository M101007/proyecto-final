const productosPorPagina = 10;
let paginaActual = 1;
let editedProduct = null;
const product = [
  {
    image:
      "/img/medi1.png",
      id: 1,
      producto: "Diciclin 100 X 10 tableta",
      descripcion: "Antibiótico para perros y gatos para el tratamiento de infecciones causadas por Mycoplasma ",
      precio: "$12.400",
      Beneficios: "Tratamiento de: erliquiosis, iInfecciones bucodentarias: halitosis-mal aliento, gingivitis, periodontitis, estomatitis y piorreas, infecciones respiratorias e infecciones producidas por complicaciones bacterianas de enfermedades virales como moquillo",
      caracteriticas: "COMPOSICIÓN: Cada TABLETA de 300 mg contiene: Doxiciclina hiclato",
      marca: "DICICLIN",
      disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi2.png",
      producto: "Meloxic",
      descripcion: "Meloxic gotas 10 ml para perros y gatos, sirve como analgésico, antiinflamatorio y antipirético",
      precio: "$18.500",
      Beneficios: "Ayuda a disminuir el dolor de trastornos músculo-esqueléticos agudos y crónicos: Displasia de cadera, artritis, osteoartrosis, disco espondilitis.",
      caracteriticas: "negroCada mL MELOXIC Tabletas 0.15% contiene: Meloxicam 2 mg - excipientes, c.s.p 1 mL. ",
      marca: "MELOXICAN",
      disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi3.png",
    id: 3,
    producto: "Hemolitan Pet.",
    descripcion: "Es un suplemento especial para mejorar condiciones de anemia, desnutrición y carencias en la formación de glóbulos rojos",
    precio: "$40.500",
    Beneficios: "Hemolitan suplemento que participa directa o indirectamente en el metabolismo celular",
    caracteriticas: "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg Pantotenato de Cálcio 1200 mg Ác",
    marca: "HEMOLITAN PET",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi4.png",
    id: 4,
    producto: "Sutrim.",
    descripcion: "Sutrim es un antibacteriano que posee amplio espectro, esta asociación ejerce una acción bactericida frente a bacterias aerobias gram negativas y gram positivas y algunas anaeróbicas",
    precio: "$18.600",
    Beneficios: "Es un antibacteriano que posee amplio espectro incluyendo coccidia Se puede utilizar en porcinos, perros y gatos En perros y gatos en infecciones de vías urinarias, oídos y piel",
    caracteriticas: "Cada 100 mL contiene: Sulfadiazina base……………..4.0 g Trimetoprim……………………0.8 g Excipientes c.s.p……………..100 g",
    marca: "SUTRIM",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi5.png",
    id: 5,
    producto: "Mirrapel - Oleoso",
        descripcion: "Mirrapel Oleoso es un suplemento nutricional de suministro diario y oral para mascotas",
        precio: "$34.500",
        Beneficios: "Es un suplemento nutricional de fácil suministro ya que puede ser mezclado con el alimento o suministrado directamente en la boca.",
        caracteriticas: "Contiene: Vitamina A, vitamina D3, vitamina E, vitamina B6,, biotina, zinc, selenio, colina, inositol, ácido oléico, ácido linoléico, ácido araquidónico (AA), ácidos grasos esenciales",
        marca: "MIRRAPEL",
        disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi6.pngU",
    id: 6,
    producto: "Rondel - Antiparasitario Puppy",
    descripcion: "Antiparasitorio oral para Perros y Gatos",
    precio: "$8.600",
    Beneficios: "Antiparasitario de amplio espectro contra Nematodos gastrointestinales.",
    caracteriticas: "Cada 1 mL .contiene: Pamoato de pirantel (Equivalente a 25 mg de la base) 72 mg",
    marca: "RONDEL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi7.pngU",
    id: 7,
    producto: "Unidol",
        descripcion: "Unidol contiene en su composición Carprofeno el cual es un analgésico y antiinflamatorio",
        precio: "$100.600",
        Beneficios: "Rápido y eficaz control del dolor. Efectivo en el tratamiento del dolor asociado a osteoartritis",
        caracteriticas: "Unidol 50, Carprofeno 50 mg, recibiendo el CSP 1 tableta",
        marca: "UNIDOL",
        disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi8.png",
    id: 8,
    producto: "Doxican 100",
        descripcion: "es un antibiótico de amplio espectro de última generación y perteneciente a la familia de las tetraciclinas",
        precio: "$24.900",
        Beneficios: "Amplio espectro y mayor Actividad contra bacterias Gram Positivas, Gram Negativas, Mycoplasma, Ryckettsias, Chlamydia.De elección para el tratamiento en la Ehrlichiosis",
        caracteriticas: "Cada 1 tableta de DOXICAN 100, contiene: Doxiciclina hiclato.......................... 100 mg",
        marca: "DOXICAN",
        disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi9.png",
    id: 9,
    producto: "Advocate",
        descripcion: "Advocate de Bayer es un antiparasitario interno y externo para perros de uso externo.",
        precio: "$62.800",
        Beneficios: "Advocate de Bayer es un antiparasitario interno y externo para perros de uso externo.",
        caracteriticas: "Advocate Perros es de uso externo y viene en 4 diferentes presentaciones adecuadas para cada perro según su peso",
        marca: "ADVOCATE",
        disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi10.png",
    id: 10,
    producto: "Apoquel ",
        descripcion: "lMedicamento de acción rápida, segura e innovadora para el tratamiento del prurito canino agudo y crónico generado por dermatitis alérgicas",
        precio: "$253.600",
        Beneficios: "Este medicamento es utilizado en la dermatitis alérgica en perros",
        caracteriticas: "Caja x 20 comprimidos 3.6 mg / 5.4 mg /16 mg",
        marca: "APOQUEL",
        disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi11.png",
    id: 11,
    producto: "Hepatopet",
        descripcion: "indicado como tratamiento de cuadros patológicos que afectan el funcionamiento hepático normal y como coadyuvante en el tratamiento de ascitis en perros",
        precio: "$40.800",
        Beneficios: "Protege y mejora el funcionamiento de los sistemas enzimáticos que pueden metabolizar y eliminar productos tóxicos por diferentes vías",
        caracteriticas: "HepatoPET Medicamento natural que reúne tres principios que activan, mejoran y fortalecen el normal funcionamiento del hígado",
        marca: "HEPATOPET",
        disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi12.png",
    id: 12,
    producto: "Carval",
        descripcion: "Tratamiento para diferentes manifestaciones clínicos gastrointestinales tales como vómitos y diarreas",
        precio: "$31.700",
        Beneficios: "En perros y gatos para el tratamiento de úlceras esofágicas, gástricas y duodenales, gastritis agudas y crónicas",
        caracteriticas: "Sucralfato ……………… 20 Gr Excipientes c.s.p. …..100 ML Dosis: Perros de raza grande: Suministrar 5 mL de ACIFLUX® suspensión cada 12 horas",
        marca: "CARVAL",
        disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi13.png",
    id: 13,
    producto: "Vetisure.",
    descripcion: "Vetisure es un producto 100% natural de uso tópico para limpiar, curar y tratar infecciones y heridas de la piel y mucosas",
    precio: "$34.000",
    Beneficios: "Es un producto especializado para mantener las heridas que puedan resultar en tu mascota de manera efectiva.",
    caracteriticas: "Es a base de ácido hipocloroso y agua súper electrolizada, es un tratamiento veterinario en ganado, equinos, porcinos y mascotas ",
    marca: "VETISURE",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi14.pngU",
    id: 14,
    producto: "Vetisure.",
        descripcion: "Vetisure es un producto 100% natural de uso tópico para limpiar, curar y tratar infecciones y heridas de la piel y mucosas",
        precio: "$34.000",
        Beneficios: "Es un producto especializado para mantener las heridas que puedan resultar en tu mascota de manera efectiva.",
        caracteriticas: "Es a base de ácido hipocloroso y agua súper electrolizada, es un tratamiento veterinario en ganado, equinos, porcinos y mascotas ",
        marca: "VETISURE",
        disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi15.png",
    id: 15,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi16.png",
    id: 16,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi17.png",
    id: 17,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi18.png",
    id: 18,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi19.png",
    id: 19,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi20.png",
    id: 20,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi21.png",
    id: 21,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi22.png",
    id: 22,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi23.png",
    id: 23,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi24.png",
    id: 24,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi25.png",
    id: 25,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi26.png",
    id: 26,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi27.png",
    id: 27,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi28.png",
    id: 28,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi29.png",
    id: 29,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi30.png",
    id: 30,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi31.png",
    id: 31,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi32.png",
    id: 32,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi33.png",
    id: 34,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi34.png",
    id: 35,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi36.png",
    id: 36,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi37.png",
    id: 37,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi38.png",
    id: 38,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi39.png",
    id: 39,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi40.png",
    id: 40,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi41.png",
    id: 41,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi42.pngU",
    id: 42,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi43.png",
    id: 43,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi44.png",
    id: 44,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi45.png",
    id: 46,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi46.png",
    id: 47,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi48.png",
    id: 48,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi49.png",
    id: 49,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi46.png",
    id: 50,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi50.png",
    id: 51,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  },
  {
    image:
      "/img/medi50.png",
    id: 52,
    producto: "PRETAB 20 MG BLISTER X 10 TAB",
    descripcion:
      "En perros y gatos para el reemplazo de la actividad de los glucocorticoides en pacientes con insuficiencia adrenal",
    precio: 18000,
    Beneficios:
      "Atua como agente antiinflamatorio e inmunosupresivo.como agente antiinflamatorio e inmunosupresivo.",
    caracteriticas:
      "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg 	Pantotenato de Cálcio 1200 mg Ác",
    marca: "CARVAL",
    disponibilidad: "disponible",
  }

];

// Function to generate HTML for each product

// Función para generar el HTML de cada producto
function generateProductHTML(product) {
    return `
        <div class="item">
            <figure>
                <img src="${product.image}" alt="${product.producto}" />
            </figure>
            <div class="info-product">
                <h2>${product.producto}</h2>
                <p class="precio">PRECIO:$ ${product.precio}</p>
                <p class="descripcion">DESCRIPCION: ${product.descripcion}</p>
                <p class="Beneficios"> BENEFICIO: ${product.Beneficios}</p>
                <p class="disponibilidad">DISPONIBILIDAD: ${product.disponibilidad}</p>
                <button onclick="verDetalles('${product.producto}', ${product.precio}, '${product.descripcion}', '${product.Beneficios}', '${product.disponibilidad}')">Ver detalles</button>
                <button onclick="añadirCarrito('${product.producto}', ${product.precio})">Añadir al carrito</button>
            </div>
        </div>
    `;
}
function verDetalles(producto, precio, descripcion, Beneficios, disponibilidad, image) {
    const detalleContainer = document.getElementById('detalleContainer');
    const infoProductContainer = document.querySelector('.info-product');

    const tarjetaHTML = `
        <div class="info-product">
            <p>Cargando...</p>
        </div>
    `;
    detalleContainer.innerHTML = tarjetaHTML;

    const promesa = new Promise(resolve => {
        setTimeout(() => {
            resolve({ producto, precio, descripcion, Beneficios, disponibilidad, image });
        }, 1500);
    });

    promesa.then(result => {
        editedProduct = {
            producto: result.producto,
            precio: result.precio,
            descripcion: result.descripcion,
            Beneficios: result.Beneficios,
            disponibilidad: result.disponibilidad,
            image: result.image
        };

        const tarjetaHTML = `
            <div id="detalleContainer" class="tarjeta" style="position: fixed; top: 100%; left: 100%; color: blue;">
                <figure>
                    <img src="${result.image}" alt="${result.producto}" />
                </figure>
                <h2>${result.producto}</h2>
                <p class="precio">PRECIO: $${result.precio}</p>
                <p class="descripcion">DESCRIPCION: ${result.descripcion}</p>
                <p class="Beneficios"> BENEFICIO: ${result.Beneficios}</p>
                <p class="disponibilidad"> DISPONIBILIDAD: ${result.disponibilidad}</p>
                <button onclick="editarProducto('${result.producto}', ${result.precio}, '${result.descripcion}', '${result.Beneficios}', '${result.disponibilidad}', '${result.image}')">Editar</button>
                <button onclick="salirDetalles()">Salir</button>
            </div>
        `;

        
        const updatedInfoProductHTML = `
            <h2>${result.producto}</h2>
            <p class="precio">PRECIO:$ ${result.precio}</p>
            <p class="descripcion">DESCRIPCION: ${result.descripcion}</p>
            <p class="Beneficios"> BENEFICIO: ${result.Beneficios}</p>
            <p class="disponibilidad">DISPONIBILIDAD: ${result.disponibilidad}</p>
            <button onclick="verDetalles('${result.producto}', ${result.precio}, '${result.descripcion}', '${result.Beneficios}', '${result.disponibilidad}', '${result.image}')">Ver detalles</button>
            <button onclick="añadirCarrito('${result.producto}', ${result.precio})">Añadir al carrito</button>
        `;

        detalleContainer.innerHTML = tarjetaHTML;
        infoProductContainer.innerHTML = updatedInfoProductHTML;
    });
}

function editarProducto(producto, precio, descripcion, Beneficios, disponibilidad, image) {
    if (editedProduct && editedProduct.producto !== producto) {
  
        guardarEdicion(editedProduct.image);
    }

    const detalleContainer = document.getElementById('detalleContainer');

    const editFormHTML = `
        <div class="tarjeta" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);">
            <label for="editProductName">Nombre:</label>
            <input type="text" id="editProductName" value="${producto}" />
            <label for="editProductPrice">Precio:</label>
            <input type="number" id="editProductPrice" value="${precio}" />
            <label for="editProductDescription">Descripción:</label>
            <textarea id="editProductDescription">${descripcion}</textarea>
            <label for="editProductBenefits">Beneficios:</label>
            <input type="text" id="editProductBenefits" value="${Beneficios}" />
            <label for="editProductAvailability">Disponibilidad:</label>
            <input type="text" id="editProductAvailability" value="${disponibilidad}" />
            <button onclick="guardarEdicion('${image}')">Guardar</button>
            <button onclick="salirEdicion('${producto}', ${precio}, '${descripcion}', '${Beneficios}', '${disponibilidad}', '${image}')">Salir</button>
        </div>
    `;

    detalleContainer.innerHTML = editFormHTML;
}

function guardarEdicion(image) {
    if (editedProduct) {

        const editedProductName = document.getElementById('editProductName').value;
        const editedProductPrice = document.getElementById('editProductPrice').value;
        const editedProductDescription = document.getElementById('editProductDescription').value;
        const editedProductBenefits = document.getElementById('editProductBenefits').value;
        const editedProductAvailability = document.getElementById('editProductAvailability').value;

        
        console.log("Saving changes...");

      
        verDetalles(editedProductName, editedProductPrice, editedProductDescription, editedProductBenefits, editedProductAvailability, image);

        // Reset editedProduct to null after saving changes
        editedProduct = null;
    }
}

function salirEdicion(producto, precio, descripcion, Beneficios, disponibilidad, image) {
    // Exit edit mode and display the original product details
    verDetalles(producto, precio, descripcion, Beneficios, disponibilidad, image);
}

function salirDetalles() {
    const detalleContainer = document.getElementById('detalleContainer');
    detalleContainer.innerHTML = '';
}

function añadirCarrito(producto, precio) {
    console.log(`Añadido ${producto} al carrito. Precio: $${precio}`);
}

function actualizarPaginacion() {
    const totalPaginas = Math.ceil(product.length / productosPorPagina);
    document.getElementById('paginaActual').textContent = paginaActual;
    document.getElementById('totalElementos').textContent = product.length;

    document.getElementById('pagination').style.display = totalPaginas > 1 ? 'block' : 'none';
    document.querySelector('button[onclick="anteriorPagina"]').disabled = paginaActual === 1;
    document.querySelector('button[onclick="siguientePagina"]').disabled = paginaActual === totalPaginas;
}

function mostrarProductos() {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = '';

    const inicio = (paginaActual - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;
    const productosPagina = product.slice(inicio, fin);

    productosPagina.forEach(product => {
        productContainer.innerHTML += generateProductHTML(product);
    });

    actualizarPaginacion();
}

function anteriorPagina() {
    if (paginaActual > 1) {
        paginaActual--;
        mostrarProductos();
    }
}

function siguientePagina() {
    const totalPaginas = Math.ceil(product.length / productosPorPagina);
    if (paginaActual < totalPaginas) {
        paginaActual++;
        mostrarProductos();
    }
}

mostrarProductos();