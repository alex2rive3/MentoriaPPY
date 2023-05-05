/*Decisiones en javascript (if,if else, switch)*/

//Escribe un programa que tome un número como entrada y muestre un mensaje en la consola indicando si es mayor, menor o igual a 10.
let number = 8;
if (number === 10) {
    console.log("El numero es igual a 10")
} else if (number < 10) {
    console.log("El numero es menor a 10")
} else {
    console.log("El numero es mayor que 10")
}
//Escribe un programa que solicite al usuario que ingrese un número y verifique si es par o impar.
//let numeroIngresado = parseInt(prompt("Ingresa un número:"));
let numeroIngresado = 12;

if (numeroIngresado % 2 === 0) {
    console.log("El numeor es Par")
} else {
    console.log("El numero es Impar")
}
//Escribe un programa que solicite al usuario que ingrese una letra y verifique si es una vocal o una consonante.
let caracter = "a"
caracter = caracter.toLowerCase()
if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u") {
    console.log(`La letra "${caracter}" es una vocal`)
} else {
    console.log(`La letra "${caracter}" es una consonante`)
}

//Escribe un programa que solicite al usuario que ingrese una edad y verifique si es mayor o menor de edad.
let edad = 17
if (edad >= 18) {
    console.log("Ya eres Mayor de Edad ")
} else {
    console.log("Aun eres Menor de Edad")
}

//Escribe un programa que solicite al usuario que ingrese un número del 1 al 7 y muestre un mensaje en la consola indicando el día de la semana correspondiente.
let diaDeSemana = 1
switch (diaDeSemana) {
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Lunes")
        break;
    case 3:
        console.log("Martes")
        break;
    case 4:
        console.log("Miercoles")
        break;
    case 5:
        console.log("Jueves")
        break;
    case 6:
        console.log("Viernes")
        break;
    case 7:
        console.log("Sabado")
        break;
    default:
        console.log("El numero que ingreso no corresponde a ningun dia de la semana")
        break;
}
