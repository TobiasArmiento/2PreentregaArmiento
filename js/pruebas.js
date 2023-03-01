// ! creacion de una clase con su constructor y sus objetos.

class EsenciasAlimenticias {
    constructor(id, nombre, linea, tamaño, precio, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.linea = linea;
        this.tamaño = tamaño;
        this.precio = Number(precio);
        this.cantidad = Number(cantidad);
        this.vendido = false;
        this.subtotal = 0;
    }

    // ! Se grega el iva dentro de la misma class.
    sumaIva () {
        this.precio = this.precio * 1.21;
    }
}


// ! Se declara el array
const esencias = []

// ! Se llama al array "esencias.push" y con "new" se agrega el nuevo producto a la clase EsenciasAlimienticias. 
esencias.push(new EsenciasAlimenticias (1, `Limon`, `D`, `110cc`, 200, 1)),
esencias.push(new EsenciasAlimenticias (2, 'Vainilla', 'D', '110cc', 200, 10)),
esencias.push(new EsenciasAlimenticias (3, 'Chocolate', 'D', '110cc', 200, 1)),
esencias.push(new EsenciasAlimenticias (4, 'Mango', 'D', '110cc', 200, 6)),

// ! Con un "console.log" se visualiza el resultado del agregado de nuevos productos dentro de la clase "EsenciasAlimenticias"
console.log(esencias);


// ! Se crea la funcion "subtotal" para calcular este mismo y el Iva luego de tener los valores de cada objeto creando una funcion. 
function subtotal () {
    for(const producto of esencias) {
    producto.sumaIva();
    producto.subtotal = producto.precio * producto.cantidad;
    producto.vendido = true;
    }
}

// ! Se llama a la funcion para poder visualizarla. 
subtotal();



// let titulos = document.getElementsByTagName("h1");

// console.log(titulos[0].innerHTML);

// let body = document.getElementsByTagName("body");

// console.log(body[0].innerHTML);

// const hache1 = document.getElementsByTagName("h1");

// hache1[0].innerHTML = "se modifico el titulo h1";


const contenedorLi = document.getElementsByTagName("li");

document.getElementById("mostrar").innerHTML = contenedorLi[3].innerHTML;



const classPaises = document.getElementsByClassName("paises");

for (const pais of classPaises) {
    console.log(pais.innerHTML);
}

// alert("¡Hola! a continuación usted podra armar una lista de los productos que desea comprar")
// let Nombre = prompt("Ingrese su nombre");

// while (Nombre === ""){
//     alert("El texto ingresado no es válido");
//     Nombre = prompt("Ingrese su nombre nuevamente");
// }

// alert("¡Bienvenido " + Nombre + "!");


// class Producto {
//     constructor(nombre, precio) {
//         this.nombre = nombre;
//         this.precio = precio;
//     }
// }

//Inicia el programa


// function renderizarProductos () {

//    Limpiamos la tabla 
//     bodyTabla.innerHTML = "";
    
//     ListaDeProductos.forEach ((producto) => {

//         Cremos la fila
//         const tr = document.createElement("tr");

//         const tdNombre = document.createElement("td");

//             tdNombre.innerHTML= `${producto.nombre}`;

//         const tdPrecio = document.createElement("td");
    
//             tdPrecio.innerHTML = `$${producto.precio}`;

//         Agrego el td al tr

//         tr.append(tdNombre);
//         tr.append(tdPrecio);
        
//         Agrego el tr al tbody
//         bodyTabla.append(tr);
//     });

// }


// Se crean variables llamando a los id del html para luego poder modificarlos
// const formularioCargarProductos = document.getElementById("cargarProductos");
// const inputNombre = document.getElementById("nombreDelProducto");
// const inputPrecio = document.getElementById("precioDelProducto");
// const bodyTabla = document.getElementById("bodyTabla");
// const clickBotonCargar = document.getElementById("botonCargar");


// se llama a ListaDeProductos con un array
// const ListaDeProductos = []


// Se llama al formulario para luego almacenar los datos ingresados por el usuario
// formularioCargarProductos.addEventListener ( "submit", (Event) => {

//   freno el flujo
//     Event.preventDefault();

//     obtengo el nombre y el precio
//     const nombre = inputNombre.value;
//     const precio = inputPrecio.value;

//    reseteo el valor de cada input
//     inputNombre.value = "";
//     inputPrecio.value = "";

// agrego el producto ingresado por el usuario al array
//     ListaDeProductos.push(new Producto (nombre, precio));

//     renderizarProductos();
// })