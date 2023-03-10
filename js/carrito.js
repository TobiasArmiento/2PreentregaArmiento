let productosEnCarrito = localStorage.getItem("productosEnCarrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

/*
    DOM
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
    Swal.fire({
        title: '¿Desea eliminar el producto?',
        text: "Si esta de acuerdo presione CONTINUAR",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#f17a4f',
        confirmButtonText: 'CONFIRMAR',
        cancelButtonText: 'CANCELAR',
    }).then((result) => {
        if (result.isConfirmed) {
            productosEnCarrito.splice(index, 1);
            cargarProductosCarrito();
        
            localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito))
        Swal.fire({
            title: 'Eliminado!',
            text: 'Usted ha eliminado el producto',
            icon: 'success',
            confirmButtonColor: '#f17a4f',
        });
        }
    });
}

botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito () {
    Swal.fire({
        title: '¿Desea vaciar el carrito?',
        text: "Si esta de acuerdo presione CONTINUAR",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#f17a4f',
        confirmButtonText: 'CONFIRMAR',
        cancelButtonText: 'CANCELAR',
    }).then((result) => {
        if (result.isConfirmed) {
            productosEnCarrito.length = 0;
            localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
            cargarProductosCarrito();
        Swal.fire({
            title: 'Eliminado!',
            text: 'Usted ha eliminado todos los productos',
            icon: 'success',
            confirmButtonColor: '#f17a4f',
        });
        }
    });
}

botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito () {
    Swal.fire({
        title: '¿Desea confirmar la compra?',
        text: "Si esta de acuerdo presione CONTINUAR",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#f17a4f',
        confirmButtonText: 'CONFIRMAR',
        cancelButtonText: 'CANCELAR',
    }).then((result) => {
        if (result.isConfirmed) {
            productosEnCarrito.length = 0;
            localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
            cargarProductosCarrito();

            contenedorCarritoVacio.classList.add("disabled");
            contenedorCarritoProductos.classList.add("disabled");
            contenedorCarritoAcciones.classList.add("disabled");
            contenedorCarritoComprado.classList.remove-("disabled");
        Swal.fire({
            title: 'Gracias por su compra!',
            text: 'Esperamos que lo disfrute!',
            icon: 'success',
            confirmButtonColor: '#f17a4f',
        });
        }
    });
}


function actualizarTotal () {

    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

/*
    LIBRERIA SWEET ALERT
*/

// Swal.fire({
//     title: '¿Usted desea confirmar la compra?',
//     icon: 'question',
//     iconHtml: '?',
//     confirmButtonText: 'CONFIRMAR',
//     cancelButtonText: 'CANCELAR',
//     showCancelButton: true,
//     showCloseButton: true
// });

