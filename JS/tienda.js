const productosPorPagina = 10;
let paginaActual = 1;
let editedProduct = null;
const product = [
  {
    image:
      "/img/medi11.png",
    id: 1,
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVaRFnlpwLQoOzu3_9tBqhuwujvzTK-g719d5AF5VKhG2rMGmA8l2jrnX218c9tFwql4&usqp=CAU",
    id: 2,
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVaRFnlpwLQoOzu3_9tBqhuwujvzTK-g719d5AF5VKhG2rMGmA8l2jrnX218c9tFwql4&usqp=CAU",
    id: 3,
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVaRFnlpwLQoOzu3_9tBqhuwujvzTK-g719d5AF5VKhG2rMGmA8l2jrnX218c9tFwql4&usqp=CAU",
    id: 4,
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVaRFnlpwLQoOzu3_9tBqhuwujvzTK-g719d5AF5VKhG2rMGmA8l2jrnX218c9tFwql4&usqp=CAU",
    id: 5,
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVaRFnlpwLQoOzu3_9tBqhuwujvzTK-g719d5AF5VKhG2rMGmA8l2jrnX218c9tFwql4&usqp=CAU",
    id: 6,
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVaRFnlpwLQoOzu3_9tBqhuwujvzTK-g719d5AF5VKhG2rMGmA8l2jrnX218c9tFwql4&usqp=CAU",
    id: 7,
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVaRFnlpwLQoOzu3_9tBqhuwujvzTK-g719d5AF5VKhG2rMGmA8l2jrnX218c9tFwql4&usqp=CAU",
    id: 8,
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVaRFnlpwLQoOzu3_9tBqhuwujvzTK-g719d5AF5VKhG2rMGmA8l2jrnX218c9tFwql4&usqp=CAU",
    id: 9,
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVaRFnlpwLQoOzu3_9tBqhuwujvzTK-g719d5AF5VKhG2rMGmA8l2jrnX218c9tFwql4&usqp=CAU",
    id: 10,
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVaRFnlpwLQoOzu3_9tBqhuwujvzTK-g719d5AF5VKhG2rMGmA8l2jrnX218c9tFwql4&usqp=CAU",
    id: 11,
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