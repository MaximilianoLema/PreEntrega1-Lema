class Producto {
    constructor(id, tipo, marca, modelo, memoria, info, precio){
        this.id = id;
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.memoria = memoria;
        this.info = info;
        this.precio = precio;
    }
}

//Intereses bancos
const interesesPorBanco = {
    "santander": 15,
    "bbva": 20,
    "galicia": 9,
    "itau": 10,
    "nacion": 2
};

//Funcion para calcular el precio de las cuotas segun la cantidad introducida
function calcularCuotas (precio, cuotas, banco) {
    const interesPorcentaje = interesesPorBanco[banco] || 0;
    const interes = precio * (interesPorcentaje / 100);
    const totalConInteres = precio + interes;
    const valorCuota = totalConInteres / cuotas;
    return valorCuota;
}

const productos = [
    new Producto(1, 'Placa de Video', 'AMD', 'VIDEO RADEON RX 6500 XT 4GB SAPPHIRE PULSE GAMING OC', '4 GB', 'La tarjeta de video Radeon RX 6500 XT Sapphire Pulse Gaming OC cuenta con 4 GB de memoria y un diseño de enfriamiento personalizado con doble ventilador. Ofrece un rendimiento sólido para los juegos más recientes y una experiencia de juego fluida gracias a su tecnología AMD FreeSync. Además, cuenta con varias características de software para personalizar la configuración de la tarjeta y optimizar el rendimiento. En general, esta tarjeta de video está diseñada para mejorar la experiencia de juego para los jugadores que buscan una tarjeta de video de gama media.', 154840 ),
    new Producto(2, 'Placa de Video', 'NVIDIA', 'VIDEO GEFORCE RTX 4090 24GB GIGABYTE AORUS MASTER', '24 GB', 'La tarjeta de video GeForce RTX 4090 de Gigabyte Aorus Master es una de las tarjetas de video más potentes del mercado, con 24 GB de memoria GDDR6X y un diseño personalizado de enfriamiento con ventiladores triples. Ofrece un rendimiento excepcional para los juegos más exigentes y aplicaciones intensivas, como la edición de video y diseño gráfico. Además, cuenta con características avanzadas de software, como RGB Fusion 2.0 y AORUS Engine, para personalizar la configuración de la tarjeta y maximizar el rendimiento. En general, esta tarjeta de video está diseñada para aquellos que buscan la mejor experiencia de juego y rendimiento en aplicaciones intensivas.', 1538730 ),
    new Producto(3, 'Placa de Video', 'NVIDIA', 'VIDEO GEFORCE RTX 4080 16GB ASUS ROG STRIX GAMING WHITE', '16 GB', 'La tarjeta de video GeForce RTX 4080 de ASUS ROG Strix Gaming White OC es una tarjeta de video de alta gama con 16 GB de memoria GDDR6X y un diseño personalizado de enfriamiento con ventiladores triples. Ofrece un rendimiento potente y una experiencia de juego fluida en resoluciones ultraaltas y juegos exigentes. Además, cuenta con características avanzadas de software, como Aura Sync y GPU Tweak II, para personalizar la configuración de la tarjeta y optimizar el rendimiento. En general, esta tarjeta de video está diseñada para aquellos que buscan la mejor experiencia de juego y rendimiento en una tarjeta de video de gama alta con un diseño elegante y llamativo en blanco.', 1132580 ),
    new Producto(4, 'Placa de Video', 'NVIDIA', 'VIDEO GEFORCE RTX 4080 16GB ASUS ROG STRIX GAMING', '16 GB', 'La tarjeta de video GeForce RTX 4080 de ASUS ROG Strix Gaming es una tarjeta de video de alta gama con 16 GB de memoria GDDR6X y un diseño personalizado de enfriamiento con ventiladores triples. Ofrece un rendimiento potente y una experiencia de juego fluida en resoluciones ultraaltas y juegos exigentes. Además, cuenta con características avanzadas de software, como Aura Sync y GPU Tweak II, para personalizar la configuración de la tarjeta y optimizar el rendimiento. En general, esta tarjeta de video está diseñada para aquellos que buscan la mejor experiencia de juego y rendimiento en una tarjeta de video de gama alta.', 1047930 ),
    new Producto(5, 'Placa de Video', 'NVIDIA', 'VIDEO GEFORCE RTX 3060 TI 8GB MSI VENTUS 2X LHR', '8 GB', 'La tarjeta de video GeForce RTX 3060 Ti de MSI Ventus 2X LHR cuenta con 8 GB de memoria y tecnología LHR (limitación de tasa de hash), lo que la hace adecuada para los juegos y la minería de criptomonedas. La tarjeta tiene un diseño de doble ventilador que proporciona un enfriamiento eficiente y un rendimiento potente. En general, esta tarjeta de video está diseñada para mejorar la experiencia de juego y minería de criptomonedas con un buen equilibrio entre precio y rendimiento.', 294730 ),
    new Producto(6, 'Placa de Video', 'NVIDIA', 'VIDEO GEFORCE RTX 3060 TI 8GB MSI GAMING X LHR', '8 GB', 'La tarjeta de video GeForce RTX 3060 Ti de MSI Gaming X LHR cuenta con 8 GB de memoria y tecnología LHR (limitación de tasa de hash), lo que la hace adecuada para los juegos y la minería de criptomonedas. La tarjeta ofrece un rendimiento potente y un enfriamiento eficiente gracias a su diseño de ventilador doble. En resumen, esta tarjeta de video está diseñada para mejorar la experiencia de juego y minería de criptomonedas.', 311280 ),
];

function mostrarProductoPorId(id) {
    const producto = productos.find(prod => prod.id === id);
    
    if (producto) {
        const infoProducto = `
ID: ${producto.id}

Tipo: ${producto.tipo}

Marca: ${producto.marca}

Modelo: ${producto.modelo}

Memoria: ${producto.memoria}

Información: ${producto.info}

Precio: $${producto.precio.toLocaleString('es-AR')} ARS  

        `; // esta linea: Precio: $${producto.precio.toLocaleString('es-AR')} ARS la busque en internet para que aparezcan como precios y no como numeros enteros comunes.
        
        alert(`Esta es la descripcion del producto seleccionado:\n${infoProducto}`);
    } else {
        alert(`No se encontró un producto con el ID ${id}`);
    }
}

function seleccionarBanco() {
    const bancoIngresado = prompt(`Selecciona el banco para el pago:\n${Object.keys(interesesPorBanco).join(", ")}`); //esta linea tambien la busque por internet
    const bancoElegido = bancoIngresado.toLowerCase();
    
    if(interesesPorBanco.hasOwnProperty(bancoElegido)){
        return bancoElegido
    }else{
        alert ("Porfavor Ingresa un banco correspondiente.")
        return seleccionarBanco();
    }
    
}

function seleccionarCuotas() {
    let cuotas;
    do{
        cuotas = parseInt(prompt("Porfavor, ingrese la cantidad de cuotas que desea abonar, solo tenemos entre 1, 3, 6 y 12 cuotas"))
        if (cuotas != 1 && cuotas != 3 && cuotas != 6 && cuotas != 12){
            alert("Recuerda ingresar un numero valido de cuotas: 1 / 3 / 6 / 12")
        }
    } while(isNaN(cuotas) || (cuotas != 1 && cuotas != 3 && cuotas != 6 && cuotas != 12));
    
    return cuotas;
}

function mostrarProductos() {
    let continuar = true
    while(continuar){
    alert("Bienvenidos a la tienda de componentes de Maximiliano Ariel Lema")
    let lista = "Esta es la lista de productos que tenemos disponibles: \n \n"

    for (const producto of productos) {
        lista += `${producto.id}  -  ${producto.modelo} \n `
    }
    const idInicial = parseInt(prompt(lista + '\n Indica el ID del producto del cual quieras saber su precio y descripción: \n O presiona 0 si no deseas continuar.'));
    const productoSeleccionado = productos.find(prod => prod.id === idInicial);
    

    if (idInicial === 0){
        alert("Estaremos aqui para cuando quieras calcular el precio de algunos de nuestros productos. Hasta la proxima! :D")
        return continuar = false
    } else if (productoSeleccionado) {
        mostrarProductoPorId(idInicial);

        const banco = seleccionarBanco();
        const cuotas = seleccionarCuotas();

        const valorCuota = calcularCuotas(productoSeleccionado.precio, cuotas, banco);
        alert(`El valor de cada cuota será de: $${valorCuota.toLocaleString('es-AR')} ARS`);
    // }  else if (productoSeleccionado === 0){
    //     alert("Estaremos aqui para cuando quieras calcular el precio de algunos de nuestros productos. Hasta la proxima! :D")
    //     return continuar = false
    } else {
        alert(`No se encontró un producto con el ID ${idInicial}`);
    }

    continuar = volverInicio();

    function volverInicio(){
        const siono = prompt("Deseas volver al inicio? (si/no) ")
        if (siono === "no"){
            alert("Muchas gracias por utilizar nuestra plataforma para consultar los precios de algunos productos, proximamente tendremos un carrito completamente funcional")
            return continuar = false;
        } else if (siono === "si"){
            return mostrarProductos();
        } else {
            alert("Porfavor ingresa si o no:");
            return volverInicio();
        }
    }
    
}
}
mostrarProductos();





