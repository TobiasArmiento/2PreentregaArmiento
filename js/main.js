/*
ARRAY DE OBJETOS
*/

const productos = [
    {
        id: "Limon-01",
        titulo: "Limon",
        imagen: "./img/limon.jpg",
        categoria: {
            nombre: "Esencias",
            id: "saboresDulces",
        },
        precio: 1000
    },
    {
        id: "Vainilla-02",
        titulo: "Vainilla",
        imagen: "./img/vainilla.jpg",
        categoria: {
            nombre: "Esencias",
            id: "saboresDulces",
        },
        precio: 1000
    },
    {
        id: "Chocolate-01",
        titulo: "Chocolate",
        imagen: "./img/chocolate.jpg",
        categoria: {
            nombre: "Esencias",
            id: "saboresDulces",
        },
        precio: 1000
    },
    {
        id: "Chocolate-01",
        titulo: "Mango",
        imagen: "./img/mango.jpg",
        categoria: {
            nombre: "Esencias",
            id: "saboresDulces",
        },
        precio: 1000
    }
];


/*
LLAMADOS AL DOM
*/
const contenedorProductos = document.querySelector("#contenedorProductos");
const botonesCategoria = document.querySelectorAll(".botonCategoria");



/**
FUNCIONES
 */

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(productos => {

        const div = document.createElement("div");
        div.classList.add("productos");
        div.innerHTML = `
        <img class="productosImagen" src="${productos.imagen}" alt="${productos.titulo}">
            <div class="productosDescripcion">
                <h3 class="tituloProductos">${productos.titulo}</h3>
                <p class="precioProductos">$${productos.precio}</p>
                <button class="botonProductos" id="${productos.id}">Agregar</button>
            </div>
        `

        contenedorProductos.append(div);
    })
}

cargarProductos(productos);


/*
LLAMAR A TODOS LOS BOTONES CON FOREACH
*/

botonesCategoria.forEach(boton => {

    boton.addEventListener("click", (e) => {

        botonesCategoria.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");

        if(e.currentTarget.id !== "todos") {
        const productosBoton = productos.filter(productos => productos.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);
        } else {
            cargarProductos(productos);
        }
    })
});