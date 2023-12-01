// Función para validar el inicio de sesión
function validateLogin() {
    // Obtener la entrada del usuario para correo electrónico y contraseña
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Validar la contraseña según los criterios especificados
    if (!isValidPassword(password)) {
        alert("Contraseña incorrecta. Asegúrese de que cumpla con los requisitos.");
        return;
    }

    // Simular la validación del usuario con una promesa
    simulateUserValidation(email, password)
        .then(function (isValidUser) {
            if (isValidUser) {
                // Mostrar mensaje de carga
                alert("Validando usuario. Por favor, espere...");

                // Redirigir al panel después de 2 segundos
                setTimeout(function () {
                    window.location.href = '/bienvenido.html';
                }, 2000);
            } else {
                alert("Credenciales incorrectas. Por favor, inténtelo de nuevo.");
            }
        })
        .catch(function (error) {
            alert("Error en la validación del usuario: " + error);
        });
}

// Función para validar la contraseña según criterios específicos
function isValidPassword(password) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{2,})(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

// Función para simular la validación del usuario con una promesa
function simulateUserValidation(email, password) {
    return new Promise(function (resolve, reject) {
        // Simular la lógica de validación del usuario (reemplazar con tu lógica de validación real)
        var validUsers = [
            { email: "user1@example.com", password: "Pass123@" },
            { email: "user2@example.com", password: "Pass456@" },
            { email: "user3@example.com", password: "Pass789@" }
            
        ];

        // Simular validación asíncrona
        setTimeout(function () {
            var isValidUser = false;
            for (var i = 0; i < validUsers.length; i++) {
                if (validUsers[i].email === email && validUsers[i].password === password) {
                    isValidUser = true;
                    break;
                }
            }

            if (isValidUser) {
                resolve(true);
            } else {
                reject("Usuario no válido");
            }
        }, 2000); // Simular un retraso de 1 segundo
    });
}




let objetos = [
    {
        img: "",
        id: 1,
        producto: "Diciclin 100 X 10 tableta",
        descripcion: "Antibiótico para perros y gatos para el tratamiento de infecciones causadas por Mycoplasma ",
        precio: "$12.400",
        Beneficios: "Tratamiento de: erliquiosis, iInfecciones bucodentarias: halitosis-mal aliento, gingivitis, periodontitis, estomatitis y piorreas, infecciones respiratorias e infecciones producidas por complicaciones bacterianas de enfermedades virales como moquillo",
        caracteriticas: "COMPOSICIÓN: Cada TABLETA de 300 mg contiene: Doxiciclina hiclato",
        marca: "DICICLIN",
        disponibilidad: "disponible"
    },

    {
        img: "",
        id: 2,
        producto: "Meloxic",
        descripcion: "Meloxic gotas 10 ml para perros y gatos, sirve como analgésico, antiinflamatorio y antipirético",
        precio: "$18.500",
        Beneficios: "Ayuda a disminuir el dolor de trastornos músculo-esqueléticos agudos y crónicos: Displasia de cadera, artritis, osteoartrosis, disco espondilitis.",
        caracteriticas: "negroCada mL MELOXIC Tabletas 0.15% contiene: Meloxicam 2 mg - excipientes, c.s.p 1 mL. ",
        marca: "MELOXICAN",
        disponibilidad: "disponible"
    },


    {
        img: "",
        id: 3,
        producto: "Hemolitan Pet.",
        descripcion: "Es un suplemento especial para mejorar condiciones de anemia, desnutrición y carencias en la formación de glóbulos rojos",
        precio: "$40.500",
        Beneficios: "Hemolitan suplemento que participa directa o indirectamente en el metabolismo celular",
        caracteriticas: "Contenido: Vitamina B1 1500 mg Vitamina B2 1500 mg Vitamina B6 1200 mg Vitamina B12 15000 mcg Vitamina K 250 mg Pantotenato de Cálcio 1200 mg Ác",
        marca: "HEMOLITAN PET",
        disponibilidad: "disponible"
    },


    {
        img: "",
        id: 4,
        producto: "Sutrim.",
        descripcion: "Sutrim es un antibacteriano que posee amplio espectro, esta asociación ejerce una acción bactericida frente a bacterias aerobias gram negativas y gram positivas y algunas anaeróbicas",
        precio: "$18.600",
        Beneficios: "Es un antibacteriano que posee amplio espectro incluyendo coccidia Se puede utilizar en porcinos, perros y gatos En perros y gatos en infecciones de vías urinarias, oídos y piel",
        caracteriticas: "Cada 100 mL contiene: Sulfadiazina base……………..4.0 g Trimetoprim……………………0.8 g Excipientes c.s.p……………..100 g",
        marca: "SUTRIM",
        disponibilidad: "disponible"
    },

    {
        img: "",
        id: 5,
        producto: "Mirrapel - Oleoso",
        descripcion: "Mirrapel Oleoso es un suplemento nutricional de suministro diario y oral para mascotas",
        precio: "$34.500",
        Beneficios: "Es un suplemento nutricional de fácil suministro ya que puede ser mezclado con el alimento o suministrado directamente en la boca.",
        caracteriticas: "Contiene: Vitamina A, vitamina D3, vitamina E, vitamina B6,, biotina, zinc, selenio, colina, inositol, ácido oléico, ácido linoléico, ácido araquidónico (AA), ácidos grasos esenciales",
        marca: "MIRRAPEL",
        disponibilidad: "disponible"
    },

    {
        img: "",
        id: 6,
        producto: "Rondel - Antiparasitario Puppy",
        descripcion: "Antiparasitorio oral para Perros y Gatos",
        precio: "$8.600",
        Beneficios: "Antiparasitario de amplio espectro contra Nematodos gastrointestinales.",
        caracteriticas: "Cada 1 mL .contiene: Pamoato de pirantel (Equivalente a 25 mg de la base) 72 mg",
        marca: "RONDEL",
        disponibilidad: "disponible"
    },

    {
        img: "",
        id: 7,
        producto: "Unidol",
        descripcion: "Unidol contiene en su composición Carprofeno el cual es un analgésico y antiinflamatorio",
        precio: "$100.600",
        Beneficios: "Rápido y eficaz control del dolor. Efectivo en el tratamiento del dolor asociado a osteoartritis",
        caracteriticas: "Unidol 50, Carprofeno 50 mg, recibiendo el CSP 1 tableta",
        marca: "UNIDOL",
        disponibilidad: "disponible"
    },


    {
        img: "",
        id: 8,
        producto: "Doxican 100",
        descripcion: "es un antibiótico de amplio espectro de última generación y perteneciente a la familia de las tetraciclinas",
        precio: "$24.900",
        Beneficios: "Amplio espectro y mayor Actividad contra bacterias Gram Positivas, Gram Negativas, Mycoplasma, Ryckettsias, Chlamydia.De elección para el tratamiento en la Ehrlichiosis",
        caracteriticas: "Cada 1 tableta de DOXICAN 100, contiene: Doxiciclina hiclato.......................... 100 mg",
        marca: "DOXICAN",
        disponibilidad: "disponible"
    },

    {
        img: "",
        id: 9,
        producto: "Advocate",
        descripcion: "Advocate de Bayer es un antiparasitario interno y externo para perros de uso externo.",
        precio: "$62.800",
        Beneficios: "Advocate de Bayer es un antiparasitario interno y externo para perros de uso externo.",
        caracteriticas: "Advocate Perros es de uso externo y viene en 4 diferentes presentaciones adecuadas para cada perro según su peso",
        marca: "ADVOCATE",
        disponibilidad: "disponible"
    },
    
    {
        img: "",
        id: 10,
        producto: "Apoquel ",
        descripcion: "lMedicamento de acción rápida, segura e innovadora para el tratamiento del prurito canino agudo y crónico generado por dermatitis alérgicas",
        precio: "$253.600",
        Beneficios: "Este medicamento es utilizado en la dermatitis alérgica en perros",
        caracteriticas: "Caja x 20 comprimidos 3.6 mg / 5.4 mg /16 mg",
        marca: "APOQUEL",
        disponibilidad: "disponible"
    },

    {
        img: "",
        id: 11,
        producto: "Hepatopet",
        descripcion: "indicado como tratamiento de cuadros patológicos que afectan el funcionamiento hepático normal y como coadyuvante en el tratamiento de ascitis en perros",
        precio: "$40.800",
        Beneficios: "Protege y mejora el funcionamiento de los sistemas enzimáticos que pueden metabolizar y eliminar productos tóxicos por diferentes vías",
        caracteriticas: "HepatoPET Medicamento natural que reúne tres principios que activan, mejoran y fortalecen el normal funcionamiento del hígado",
        marca: "HEPATOPET",
        disponibilidad: "disponible"
    },

    {
        img: "",
        id: 12,
        producto: "Carval",
        descripcion: "Tratamiento para diferentes manifestaciones clínicos gastrointestinales tales como vómitos y diarreas",
        precio: "$31.700",
        Beneficios: "En perros y gatos para el tratamiento de úlceras esofágicas, gástricas y duodenales, gastritis agudas y crónicas",
        caracteriticas: "Sucralfato ……………… 20 Gr Excipientes c.s.p. …..100 ML Dosis: Perros de raza grande: Suministrar 5 mL de ACIFLUX® suspensión cada 12 horas",
        marca: "CARVAL",
        disponibilidad: "disponible"
    },

    {
        img: "",
        id: 13,
        producto: "Vetisure.",
        descripcion: "Vetisure es un producto 100% natural de uso tópico para limpiar, curar y tratar infecciones y heridas de la piel y mucosas",
        precio: "$34.000",
        Beneficios: "Es un producto especializado para mantener las heridas que puedan resultar en tu mascota de manera efectiva.",
        caracteriticas: "Es a base de ácido hipocloroso y agua súper electrolizada, es un tratamiento veterinario en ganado, equinos, porcinos y mascotas ",
        marca: "VETISURE",
        disponibilidad: "disponible"
    },

    {
        img: "",
        id: 14,
        producto: "Vetisure.",
        descripcion: "Vetisure es un producto 100% natural de uso tópico para limpiar, curar y tratar infecciones y heridas de la piel y mucosas",
        precio: "$34.000",
        Beneficios: "Es un producto especializado para mantener las heridas que puedan resultar en tu mascota de manera efectiva.",
        caracteriticas: "Es a base de ácido hipocloroso y agua súper electrolizada, es un tratamiento veterinario en ganado, equinos, porcinos y mascotas ",
        marca: "VETISURE",
        disponibilidad: "disponible"
        
    },

]

function mostrarTodosObjetos() {
    const listaObjetos = document.getElementById('lista-objetos');
    listaObjetos.innerHTML = '';

    objetos.forEach(objeto => {
        const divObjeto = document.createElement('div');
        divObjeto.classList.add('objeto');
        divObjeto.innerHTML = `

            <img src="${objeto.img}" alt="${objeto.producto}">

            <div class="celular-txt"
            <h2>${objeto.producto}</h2>
            <p>${objeto.descripcion}</p>
            <p>Cantidad: ${objeto.cantidad}</p>
            <p>Precio: ${objeto.precio}</p>
            <p>Garantía: ${objeto.garantia}</p>
            <p>Color: ${objeto.color}</p>
            <p>Origen: ${objeto.origen || "No especificado"}</p>
            <p>Disponibilidad: ${objeto.disponibilidad}</p>
            <button onclick="editarObjeto(${objeto.id})">Editar</button>
            </div>
        `;
        listaObjetos.appendChild(divObjeto);
    });
}

  // Mostrar todos los objetos al cargar la página
  mostrarTodosObjetos();



