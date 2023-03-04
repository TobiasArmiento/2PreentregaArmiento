/*
ARRAY DE OBJETOS
*/

const productos = [
    {
        id: "Limon-01",
        titulo: "Limon",
        imagen: "./img/limon.jpg",
        categoria: {
            nombre: "Sabores Dulces",
            id: "saboresDulces",
        },
        precio: 1000
    },
    {
        id: "Vainilla-02",
        titulo: "Vainilla",
        imagen: "./img/vainilla.jpg",
        categoria: {
            nombre: "Sabores Dulces",
            id: "saboresDulces",
        },
        precio: 1000
    },
    {
        id: "Chocolate-03",
        titulo: "Chocolate",
        imagen: "./img/chocolate.jpg",
        categoria: {
            nombre: "Sabores Dulces",
            id: "saboresDulces",
        },
        precio: 1000
    },
    {
        id: "Mango-04",
        titulo: "Mango",
        imagen: "./img/mango.jpg",
        categoria: {
            nombre: "Sabores Dulces",
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
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".botonProductos");
const numerito = document.querySelector("#numeritoCarrito")


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

    actualizarBotonesAgregar();

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

        const productoCategoria = productos.find(productos => productos.categoria.id === e.currentTarget.id);
        tituloPrincipal.innerText = productoCategoria.categoria.nombre;

        const productosBoton = productos.filter(productos => productos.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);

        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    })
});


function actualizarBotonesAgregar () {

    botonesAgregar = document.querySelectorAll(".botonProductos");

    botonesAgregar.forEach(boton => {

        boton.addEventListener("click", agregarAlCarrito);
    });

}


/*
ARRAY CARRITO
*/

const productosEnCarritoLS = JSON.parse(localStorage.getItem("productosEnCarrito"));

let productosEnCarrito;
if (productosEnCarritoLS) {
    productosEnCarrito = productosEnCarritoLS;
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}


function agregarAlCarrito (e) {

    const idBoton = e.currentTarget.id;
    const productosAgregados = productos.find(productos => productos.id === idBoton);

    if(productosEnCarrito.some(productos => productos.id === idBoton)){
        
        const index = productosEnCarrito.findIndex(productos => productos.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        
        productosAgregados.cantidad = 1;
        productosEnCarrito.push(productosAgregados);
    }

    actualizarNumerito();

    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito () {

    let nuevoNumerito = productosEnCarrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}