/*
PETICIONES CON FETCH DEL ARRAY DE PRODUCTOS EN JSON 
*/

fetch("/productos.json")
    .then((response) => {
        return response.json()
    })
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })


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

let productosEnCarritoLS = localStorage.getItem("productosEnCarrito");

let productosEnCarrito;
if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
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
    
    productoAgregadoLibreria ();
    actualizarNumerito();

    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito () {

    let nuevoNumerito = productosEnCarrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

/*
    LIBRERIA SWEET ALERT
*/


function productoAgregadoLibreria () {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    Toast.fire({
        icon: 'success',
        iconColor: '#f17a4f',
        title: 'Agregado correctamente!',
    });

};