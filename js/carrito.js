let productosEnCarrito = localStorage.getItem("productosEnCarrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

/*
*   DOM
 */
const contenedorCarritoVacio = document.querySelector("#carritoVacio");
const contenedorCarritoProductos = document.querySelector("#carritoProductos");
const contenedorCarritoAcciones = document.querySelector("#carritoAcciones");
const contenedorCarritoComprado = document.querySelector("#carritoComprado");
let botonesEliminar = document.querySelectorAll(".carritoProductoEliminar");
const botonVaciar = document.querySelector("#carritoAccionesVaciar");
const botonComprar = document.querySelector("#carritoAccionesComprar");
const contenedorTotal = document.querySelector("#total");

function cargarProductosCarrito () {

    if(productosEnCarrito && productosEnCarrito.length > 0) {

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

        //VACIAMOS EL CARRITO
        contenedorCarritoProductos.innerHTML = "";

        /*
        TREAMOS EL ARRAY DEL CARRITO Y RECORREMOS CADA PRODUCTO AGREGADO 
        */

        productosEnCarrito.forEach(productos => {

            const div = document.createElement("div");
            div.classList.add("carritoProductos");
            div.innerHTML = `
            <div class="carritoProducto">
                <img class="carritoProductoImagen" src="${productos.imagen}" alt="${productos.titulo}">
                <div class="carritoProductoTitulo">
                    <small>Titulo</small>
                    <h3>${productos.titulo}</h3>
                </div>
                <div class="carritoProductoCantidad">
                    <small>Cantidad</small>
                    <p>${productos.cantidad}</p>
                </div>
                <div class="carritoProductoPrecio">
                    <small>Precio</small>
                    <p>$${productos.precio}</p>
                </div>
                <div class="carritoProductoSubtotal">
                    <small>Subtotal</small>
                    <p>$${productos.precio * productos.cantidad}</p>
                </div>
                <button class="carritoProductoEliminar" id="${productos.id}"><i class="bi bi-trash-fill"></i></button>
            </div>
            `;

            contenedorCarritoProductos.append(div);

        });

        actualizarBotonesEliminar();
        actualizarTotal();
    } else {


        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");

    }
}

/*
    CADA VEZ QUE SE INICIA LA PAGINA QUEREMOS QUE SE LLAME A CADA FUNCION
*/

cargarProductosCarrito();

/**
 *  ELIMINAR PRODUCTOS DEL CARRITO
 */

function actualizarBotonesEliminar () {

    botonesEliminar = document.querySelectorAll(".carritoProductoEliminar");

    botonesEliminar.forEach(boton => {

        boton.addEventListener("click", eliminarDelCarrito);
    });

}


function eliminarDelCarrito (e) {

    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito))
}

botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito () {

    productosEnCarrito.length = 0;
    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito () {

    productosEnCarrito.length = 0;
    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove-("disabled");
}


function actualizarTotal () {

    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}