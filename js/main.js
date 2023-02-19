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

// //Inicia el programa


// function renderizarProductos () {

//     //Limpiamos la tabla 
//     bodyTabla.innerHTML = "";
    
//     ListaDeProductos.forEach ((producto) => {

//         // Cremos la fila
//         const tr = document.createElement("tr");

//         const tdNombre = document.createElement("td");

//             tdNombre.innerHTML= `${producto.nombre}`;

//         const tdPrecio = document.createElement("td");
    
//             tdPrecio.innerHTML = `$${producto.precio}`;

//         // Agrego el td al tr

//         tr.append(tdNombre);
//         tr.append(tdPrecio);
        
//         // Agrego el tr al tbody
//         bodyTabla.append(tr);
//     });

// }


// // Se crean variables llamando a los id del html para luego poder modificarlos
// const formularioCargarProductos = document.getElementById("cargarProductos");
// const inputNombre = document.getElementById("nombreDelProducto");
// const inputPrecio = document.getElementById("precioDelProducto");
// const bodyTabla = document.getElementById("bodyTabla");
// const clickBotonCargar = document.getElementById("botonCargar");


// // se llama a ListaDeProductos con un array
// const ListaDeProductos = []


// // Se llama al formulario para luego almacenar los datos ingresados por el usuario
// formularioCargarProductos.addEventListener ( "submit", (Event) => {

//     //freno el flujo
//     Event.preventDefault();

//     // obtengo el nombre y el precio
//     const nombre = inputNombre.value;
//     const precio = inputPrecio.value;

//     //reseteo el valor de cada input
//     inputNombre.value = "";
//     inputPrecio.value = "";

//     // agrego el producto ingresado por el usuario al array
//     ListaDeProductos.push(new Producto (nombre, precio));

//     renderizarProductos();
// })