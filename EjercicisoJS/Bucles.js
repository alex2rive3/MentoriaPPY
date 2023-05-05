//Bucles

//Escribe un bucle for que imprima en la consola los números del 1 al 10.
for (let index = 1; index <= 10; index++) {
    console.log(index)
}
//Escribe un bucle while que imprima en la consola los números del 1 al 5.
console.log("While")
var i = 1
while (i <= 5) {
    console.log(i)
    i++
}
//Crea un vector con los números del 1 al 5. Escribe un bucle for que imprima en la consola cada uno de los elementos del vector.
let vector = []
for (let index = 1; index <= 5; index++) {
    vector.push(index);
}
console.log(`vector listo: ${vector}`)
console.log("Elementos del vector")
for (let index = 0; index < vector.length; index++) {
    console.log(vector[index])
}
//Crea una función que reciba un número n y devuelva la suma de todos los números del 1 al n. Utiliza un bucle for para calcular la suma y muestra el resultado en la consola.
function sumarNnumeros(n) {
    let suma = 0
    for (let index = 1; index <= n; index++) {
        suma += index
    }
    return suma
}
var numero = 10
console.log(`La suma de los numeros del 1 al ${numero} es ${sumarNnumeros(numero)}`)
//Crea una función que reciba un vector y devuelva la suma de todos sus elementos. Utiliza un bucle while para calcular la suma y muestra el resultado en la consola.
function sumarVector(arr) {
    let i = 0
    let suma = 0
    while (i < arr.length) {
        suma += arr[i]
        i++
    }
    return suma
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(`La suma de los elememtos del vector ${arr} es ${sumarVector(arr)}`)