const productosEnCarrito = JSON.parse(localStorage.getItem("productosEnCarrito"));
const contenedorCarritoVacio = document.querySelector("#carritoVacio");
const contenedorCarritoProductos = document.querySelector("#carritoProductos");
const contenedorCarritoAcciones = document.querySelector("#carritoAcciones");



const contenedorCarritoComprado = document.querySelector("#carritoComprado");

if(productosEnCarrito) {


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
            <img class="carritoProductoImagen" src="${productos.imagen}" alt="Esencia sabor limon">
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
} else {

}


