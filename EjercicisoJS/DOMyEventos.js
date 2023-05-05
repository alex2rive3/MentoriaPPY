
//DOM y eventos
console.log("cargando.... ")
//Crea un archivo HTML con un botón y un div vacío. Usa JavaScript para agregar un mensaje al div cuando se hace clic en el botón.
var pizzarra = document.getElementById("mensaje")
function mensaje() {
    pizzarra.innerHTML = "HOLA MUNDO CON UN EVENTO"
}
//Crea una función que cambie el color de fondo de un elemento HTML a rojo cuando el mouse se mueve sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior.

pizzarra.addEventListener("mouseover", cambiarColorFondo);

pizzarra.addEventListener("mouseout", fondoNormal);
function fondoNormal() {
    document.getElementById("fondo").style.backgroundColor = "transparent"
}
function cambiarColorFondo() {
    document.getElementById("fondo").style.backgroundColor = "red"
}
//Crea una función que cambie el tamaño de fuente de un elemento HTML cuando se presiona una tecla en el teclado. Agrega esta función como un listener de evento para el div del ejercicio anterior.
document.addEventListener('keydown', cambiarTamañoLetras, false);
function cambiarTamañoLetras(event) {
    var keyValue = event.key;
    if (keyValue == "Enter") {
        pizzarra.style.fontSize = "24px"
    } else if (keyValue == "s") {
        pizzarra.style.fontSize = "10px"
    }
}
//Crea una función que cambie el contenido de un elemento HTML cuando se hace doble clic sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior.
pizzarra.addEventListener('dblclick', cambiarContenido, false)
function cambiarContenido() {
    pizzarra.innerHTML = "SE REALIZLO UN CAMBIO EN EL CONTENIDO "
}
//Crea una función que cambie la imagen de fondo de un elemento HTML cuando se carga la página. Agrega esta función como un listener de evento para el body del documento.
function cambiarFondo() {
    document.body.style.backgroundImage = "url(https://media.revistagq.com/photos/5d93360c2c50100008b21511/1:1/w_2259,h_2259,c_limit/peaky%20blinders.jpg)";
    document.body.style.backgroundSize = "cover";

}

document.addEventListener('DOMContentLoaded', cambiarFondo);
