/*//Algoritmo ciclo & condicional

let mensaje = prompt('¿Desea agregar al carrito? (s-si / n-no)');
while(mensaje == 's' || mensaje=='S'){
    let producto = prompt('1-Chaqueta impermeable\n2-Gorro invierno\n3-Vestido flores verano\n4-Sandalias florales\n5-Set otoño');
    if(producto == '1'){
        alert('Chaqueta impermeable ... $ 99.900  AGREGADO AL CARRO!');
    }else if(producto == '2'){
        alert('Gorro invierno ... $ 50.000  AGREGADO AL CARRO!');
    }else if (producto == '3'){
        alert('Vestido flores verano ... $80.000 AGREGADO AL CARRO');
    }else if (producto == '4'){
        alert('Sandalias florales ... $100.000 AGREGADO AL CARRO');
    }else if(producto == '5'){
        alert('Set otoño ... $ 99.900  AGREGADO AL CARRO!');
    }else {
        alert('Codigo de producto inexistente')
    }
    mensaje = prompt('¿Desea comprar otro producto? (s-si / n-no)');
}

//Algoritmo matemático escogiendo todos los productos
let n1=99900;
let n2=50000;
let n3=80000;
let n4=100000;
let n5=99900;

let suma=n1 + n2 + n3 + n4 + n5;

console.log('Valor total: '+suma);

alert('Valor total: '+suma);*/

const productos = [
    {nombre: "Chaqueta impermeable", precio: 99900},
    {nombre: "Gorro invierno", precio: 50000},
    {nombre: "Vestido flores verano", precio: 80000},
    {nombre: "Sandalias florales", precio: 100000},
    {nombre: "Set otoño", precio: 99900},
];
let carrito = []

let seleccion = prompt("¡Hola! ¿Deseas comprar algun producto?")

while(seleccion != "si" && "no"){
    alert("Porfavor ingresa si o no")
    seleccion = prompt("¡Hola! deseas comprar algo si o no") 
}

if(seleccion == "si"){
    alert("Elige de los siguientes productos")
    let todoslosProductos = productos.map
    ((producto) => producto.nombre + "" + "$"+producto.precio );
    alert(todoslosProductos.join(" - "))
}

while(seleccion != "no"){
    let producto = prompt("¡Agrega un producto a tu carrito!")
    let precio = 0

    if(producto == "Chaqueta impermeable" || producto == "Gorro invierno" || producto == "Vestido flores verano" || producto == "Sandalias florales" || producto == "Set otoño"){
        switch(producto){
            case "Chaqueta impermeable":
            precio = 99900
            break
            case "Gorro invierno":
            precio = 100000
            break
            case "Vestido flores verano":
            precio = 80000
            break
            case "Sandalias florales":
            precio = 100000
            break
            case "Set otoño":
            precio = 99900
            break
        default:
            break
        }
    let unidades = parseInt(prompt ("Cuantas unidades necesita??"))
    
    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else {
        alert("No contamos con ese producto")
    }

    seleccion = prompt("Quiere algun otro producto??")
    
    while(seleccion === "no"){
    alert("¡Gracias por su compra! Vuelva pronto")
    carrito.forEach((carritoFinal) => {
        console.log(`productos: ${carritoFinal.producto}, unidades: ${carrito.unidades}, total a pagar por producto${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
    }
}
