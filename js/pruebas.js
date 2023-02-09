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