//Precios base placas de video
const precioRx6500 = 154840 //VIDEO RADEON RX 6500 XT 4GB SAPPHIRE PULSE GAMING OC
const precioRtx4090 = 1538730 //VIDEO GEFORCE RTX 4090 24GB GIGABYTE AORUS MASTER
const precioRtx4080 = 1132580 //VIDEO GEFORCE RTX 4080 16GB ASUS ROG STRIX GAMING WHITE
const precioRtx40802 = 1047930 //VIDEO GEFORCE RTX 4080 16GB ASUS ROG STRIX GAMING
const precioRtx3060ti = 294730 //VIDEO GEFORCE RTX 3060 TI 8GB MSI VENTUS 2X LHR  
const precioRtx3060ti2 = 311280 //VIDEO GEFORCE RTX 3060 TI 8GB MSI GAMING X LHR  

// Constante de impuesto y descuento
const impuestoPorcentaje = 10;
const descuentoPorcentaje = 20;

//Intereses bancos
const interesesPorBanco = {
    "Santander": 15,
    "BBVA": 20,
    "Galicia": 9,
    "ITAU": 10,
    "Nacion": 2
};

//Funcion calcular el impuesto
function calcularImpuesto (precio){
    return precio * (impuestoPorcentaje / 100);
}

//Funcion calcular el descuento
function calcularDescuento (precio){
    return precio * (descuentoPorcentaje / 100);
}

//Funcion calcular el valor total luego del descuento y el impuesto
function calcularValorTotal (precio){
    const impuesto = calcularImpuesto(precio);
    const descuento = calcularDescuento(precio);
    const valorTotal = precio + impuesto - descuento;
    return valorTotal; 
}

//Funcion para calcular el precio de las cuotas segun la cantidad introducida
function calcularCuotas (precio, cuotas, banco) {
    const interesPorcentaje = interesesPorBanco[banco] || 0;
    const interes = precio * (interesPorcentaje / 100);
    const totalConInteres = precio + interes;
    const valorCuota = totalConInteres / cuotas;
    return valorCuota;
}


//Condicional while para determinar el producto, el banco y la cantidad de cuotas y aplicar las funciones y realizar la operacion matematica.
let seleccionValida = false;

while (!seleccionValida){
    alert("Hola bienvenido a mi tienda, lamentablemente solo tenemos 6 productos en stock, aqui podras calcular el precio del producto y el costo de las cuotas que indiques. \n Adelante.")
    const seleccion = parseInt(prompt("Estos son nuestros productos, te pido porfavor que indiques, con el numero correspondiente, que producto estabas buscando? : \n 1: VIDEO RADEON RX 6500 XT 4GB SAPPHIRE PULSE GAMING OC \n 2: VIDEO GEFORCE RTX 4090 24GB GIGABYTE AORUS MASTER \n 3: VIDEO GEFORCE RTX 4080 16GB ASUS ROG STRIX GAMING WHITE \n 4: VIDEO GEFORCE RTX 4080 16GB ASUS ROG STRIX GAMING \n 5: VIDEO GEFORCE RTX 3060 TI 8GB MSI VENTUS 2X LHR \n 6: VIDEO GEFORCE RTX 3060 TI 8GB MSI GAMING X LHR"));
    debugger
    const banco = prompt("Trabajamos unicamente con 5 bancos, te pido porfavor que indiques con que banco abonarias el producto: \n Santander\n BBVA\n Galicia \n ITAU \n Nacion");
    const cuotas = parseInt(prompt("Porfavor, indica la cantidad de cuotas: "))

    if(cuotas > 12){
        alert("Como maximo podemos ofrecerte 12 cuotas. Vuelve a introducir una cantidad correspondiente de cuotas: ")
        const cuotas = parseInt(prompt("Porfavor, indica la cantidad de cuotas: "))
    }

    if(seleccion === 1 && cuotas > 0 && interesesPorBanco[banco]){
        const valorFinal = calcularValorTotal(precioRx6500);
        const valorCuota = calcularCuotas(valorFinal, cuotas, banco);

        alert(`El valor total de la VIDEO RADEON RX 6500 XT 4GB SAPPHIRE PULSE GAMING OC es de $${valorFinal} y el valor de cada una de las ${cuotas} cuotas es de $${valorCuota.toFixed(2)}`);
        alert("Muchas gracias por utilizar nuestra tienda de placas de video. \nHasta siempre")
        seleccionValida = true;
        
    }else if(seleccion === 2 && cuotas > 0 && interesesPorBanco[banco]){
        const valorFinal = calcularValorTotal(precioRtx4090);
        const valorCuota = calcularCuotas(valorFinal, cuotas, banco)

        alert(`El valor total de la VIDEO GEFORCE RTX 4090 24GB GIGABYTE AORUS MASTER es de $${valorFinal} y el valor de cada una de las ${cuotas} cuotas es de $${valorCuota.toFixed(2)}`)
        alert("Muchas gracias por utilizar nuestra tienda de placas de video. \nHasta siempre")
        seleccionValida = true;
        
    }else if(seleccion === 3 && cuotas > 0 && interesesPorBanco[banco]){
        const valorFinal = calcularValorTotal(precioRtx4080);
        const valorCuota = calcularCuotas(valorFinal, cuotas, banco)

        alert(`El valor total de la VIDEO GEFORCE RTX 4080 16GB ASUS ROG STRIX GAMING WHITE es de $${valorFinal} y el valor de cada una de las ${cuotas} cuotas es de $${valorCuota.toFixed(2)}`)
        alert("Muchas gracias por utilizar nuestra tienda de placas de video. \nHasta siempre")
        seleccionValida = true;
    
    }else if(seleccion === 4 && cuotas > 0 && interesesPorBanco[banco]){
        const valorFinal = calcularValorTotal(precioRtx40802);
        const valorCuota = calcularCuotas(valorFinal, cuotas, banco)

        alert(`El valor total de la VIDEO GEFORCE RTX 4080 16GB ASUS ROG STRIX GAMING es de $${valorFinal} y el valor de cada una de las ${cuotas} cuotas es de $${valorCuota.toFixed(2)}`)
        alert("Muchas gracias por utilizar nuestra tienda de placas de video. \nHasta siempre")
        seleccionValida = true;
    
    }else if(seleccion === 5 && cuotas > 0 && interesesPorBanco[banco]){
        const valorFinal = calcularValorTotal(precioRtx3060ti);
        const valorCuota = calcularCuotas(valorFinal, cuotas, banco)

        alert(`El valor total de la VIDEO GEFORCE RTX 3060 TI 8GB MSI VENTUS 2X LHR es de $${valorFinal} y el valor de cada una de las ${cuotas} cuotas es de $${valorCuota.toFixed(2)}`)
        alert("Muchas gracias por utilizar nuestra tienda de placas de video. \nHasta siempre")
        seleccionValida = true;
    
    }else if(seleccion === 6 && cuotas > 0 && interesesPorBanco[banco]){
        const valorFinal = calcularValorTotal(precioRtx3060ti2);
        const valorCuota = calcularCuotas(valorFinal, cuotas, banco)

        alert(`El valor total de la VIDEO GEFORCE RTX 3060 TI 8GB MSI GAMING X LHR es de $${valorFinal} y el valor de cada una de las ${cuotas} cuotas es de $${valorCuota.toFixed(2)}`)
        alert("Muchas gracias por utilizar nuestra tienda de placas de video. \nHasta siempre")
        seleccionValida = true;
    
    }

    else {
        alert("Seleccion no valida, porfavor ingrese un dato correspondiente.")
    }
}