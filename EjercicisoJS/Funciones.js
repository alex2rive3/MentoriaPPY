//Funciones

//Escribe una función que tome dos números como argumentos y devuelva su suma.
function sumar(numero1, numero2) {
    return numero1 + numero2
}
console.log(`La suma de 10 + 15  es ${sumar(10, 15)}`)
//Escribe una función que tome un número como argumento y devuelva true si es par o false si es impar.
function isPar(numero) {
    if (numero % 2 === 0) {
        return true
    }
    return false
}
console.log(`El numero 10 es par?: ${isPar(10)}`)
console.log(`El numero 5 es par?: ${isPar(5)}`)
//Escribe una función que tome un array de números como argumento y devuelva la suma de sus elementos.
function sumarArray(array) {
    let resultado = 0
    for (let index = 0; index < array.length; index++) {
        resultado += array[index]
    }
    return resultado
}
let arreglo = [1, 2, 3, 4, 5]
console.log(`La suma de ${arreglo} es: ${sumarArray(arreglo)}`)
//Escribe una función que tome un array de strings como argumento y devuelva la longitud del string más largo.
function stringMasLargo(array) {
    let masLargo = 0
    for (let index = 0; index < array.length; index++) {
        if (array[index].length > masLargo) {
            masLargo = array[index].length
        }
    }
    return masLargo;
}
let palabras = ["hola", "chau", "noseee", "algunacosarara"]
console.log(`El string mas largo del arreglo tiene ${stringMasLargo(palabras)} letras`)

//Escribe una función que tome un objeto como argumento y devuelva un array con los valores de todas sus propiedades.
function ObjetoaArray(objeto) {
    let arreglo = []
    for (const key in objeto) {
        //verifica que la llave que esta pasando existe en el objeto para que no exista conflictos 
        if (Object.hasOwnProperty.call(objeto, key)) {
            const element = objeto[key];
            arreglo.push(element)
        }
    }
    return arreglo
}
let info = {
    uno: 1,
    dos: "dos",
    tres: 3,
    flaso: false,
    verdadero: true
}
console.log(`El Array resulante del objeto es el siguiente ${ObjetoaArray(info)}`)
