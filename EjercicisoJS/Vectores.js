//Vectores

//Escribe una función que tome un array de números como argumento y devuelva el número más grande.
function Mayor(array) {
    let mayor = 0
    for (let index = 0; index < array.length; index++) {
        if (array[index] >= mayor) {
            mayor = array[index]
        }
    }
    return mayor
}
console.log(`El numero mayor de la lista es: ${Mayor([1, 2, 5, 3, 9, 10, 15, 0, 2, 3])}`)
//Escribe una función que tome un array de números como argumento y devuelva un array con los números ordenados de menor a mayor.
function OrdenarArray(arr) {
    // Obtenemos la longitud del arreglo
    var len = arr.length;
    // Comenzamos el primer bucle que recorre el arreglo
    for (var i = 0; i < len; i++) {
        // Comenzamos el segundo bucle que recorre el arreglo desde la primera posición hasta la penúltima
        for (var j = 0; j < len - 1; j++) {
            // Comparamos cada par de elementos adyacentes y si están en el orden equivocado, los intercambiamos
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr
}
console.log(`El array ordenado se ve así: ${OrdenarArray([5, 7, 3, 5, 1, 6, 14, 2, 8])}`)
//Escribe una función que tome dos arrays como argumentos y devuelva un array que contenga los elementos comunes entre ambos.
function elementosComunes(array1, array2) {
    let combinado = []
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                combinado.push(array1[i])
            }
        }
    }
    return combinado
}
let result = elementosComunes([1, 2, 3, 4, 5, 6, 8, 10, 35], [10, 1, 12, 18, 2, 4, 15])
console.log(`Los elementos comunes en ambos array son: ${result}`)
//Escribe una función que tome un array de strings como argumento y devuelva un nuevo array que contenga los strings convertidos a mayúsculas.
function combertirAMayusculas(listaDePalabras) {
    let palabrasMayusculas = []
    for (let index = 0; index < listaDePalabras.length; index++) {
        const palabra = listaDePalabras[index].toUpperCase()
        palabrasMayusculas.push(palabra)
    }
    return palabrasMayusculas
}

console.log(`Así se ve la lista con todas las palbras en mayusculas ${combertirAMayusculas(["hola", "como", "rayos", "que", "bueno"])}`)
//Escribe una función que tome un array de números como argumento y devuelva un nuevo array que contenga la suma acumulativa de sus elementos.
function sumaAcumulativa(arr) {
    let acumulador = 0
    let sumaAcumulada = []
    for (let index = 0; index < arr.length; index++) {
        acumulador += arr[index];
        sumaAcumulada.push(acumulador)
    }
    return sumaAcumulada
}
console.log(`Este es arreglo con las sumas acumuladas de todos los elementos ${sumaAcumulativa([1, 2, 3, 4, 5, 6, 7, 8])}`)