document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid");
  var cartasSeleccionadas = []; //va a ser un array de los índices de cada tarjeta seleccionada
  var contadorGanados = 0;
  const resultado = document.getElementById("resultado"); //para mostrar los resultados a medida se encuentran los pares
  const soundClic = document.getElementById("click-sound")
  const API_KEY = "gXpyB9onYGrEKU5Tcc7KWawW33OhH9x6m4oUBmMFNxk"
  //console.log(tarjetas)
  // vamos a ver que esta imprimiendo
  let tarjetas = []
  ObtenerImagenes(API_KEY, 6)
    .then(data => {
      tarjetas = data; // Asigna el valor de imágenes a la variable de imágenes declarada fuera de la función
      tarjetas = tarjetas.concat(tarjetas);

      //este es el algoritmo de mezcla Fisher-Yates
      function revolverTarjetas(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];    //para el intercambio se utiliza una variable auxiliar
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }

      tarjetas = revolverTarjetas(tarjetas);
      //armamos el tablero de forma dinamica
      function armarTablero() {
        for (let i = 0; i < tarjetas.length; i++) {
          //creamos un elemento de tipo <img />
          const tarjeta = document.createElement("img");
          //seteamos la imagen de patron por defecto
          //seteamos la imagen de patron por defecto
          tarjeta.setAttribute(
            "src",
            "images/pattern.png"
          );
          tarjeta.setAttribute("name", tarjetas[i].id);
          tarjeta.setAttribute("data-index", i);
          //esto es para agregar las clases al objeto "tarjeta"
          tarjeta.classList.add("imagen");
          tarjeta.addEventListener("click", voltearTarjeta);
          // agregamos el elemento creado a la grilla
          grid.appendChild(tarjeta);
        }
      }
      function voltearTarjeta() {
        //obtenemos el índice del array de perros
        let index = this.getAttribute("data-index");
        soundClic.play()
        cartasSeleccionadas.push(index);
        this.setAttribute("src", tarjetas[index].url);
        //cada 2 tarjetas se hacen las validaciones
        if (cartasSeleccionadas.length === 2) {
          setTimeout(validarTarjetasSeleccionadas, 500);
        }
      }
      function validarTarjetasSeleccionadas() {
        const listaTarjetas = document.querySelectorAll("img");
        const primeraTarjetaSeleccionadaIndex = cartasSeleccionadas[0];
        const segundaTarjetaSeleccionadaIndex = cartasSeleccionadas[1];
        if (primeraTarjetaSeleccionadaIndex == segundaTarjetaSeleccionadaIndex) {
          alert("¡Es la misma tarjeta!");
          //ponemos de vuelva a ambas la imagen del patron por defecto
          listaTarjetas[primeraTarjetaSeleccionadaIndex].setAttribute(
            "src",
            "images/pattern.png"
          );
          listaTarjetas[segundaTarjetaSeleccionadaIndex].setAttribute(
            "src",
            "images/pattern.png"
          );
        } else if (listaTarjetas[primeraTarjetaSeleccionadaIndex].name === listaTarjetas[segundaTarjetaSeleccionadaIndex].name) {
          //el atributo "name" guarda el nombre de la raza, si son iguales entonces es correcto
          alert("¡Correcto!");
          //cambiar la imagen por la del patron de finalizacion
          listaTarjetas[primeraTarjetaSeleccionadaIndex].setAttribute(
            "src",
            "images/pattern-inverted.png"
          );
          listaTarjetas[segundaTarjetaSeleccionadaIndex].setAttribute(
            "src",
            "images/pattern-inverted.png"
          );
          //evitamos que se pueda volver a hacer click en las mismas
          listaTarjetas[primeraTarjetaSeleccionadaIndex].removeEventListener("click", voltearTarjeta);
          listaTarjetas[segundaTarjetaSeleccionadaIndex].removeEventListener("click", voltearTarjeta);
          contadorGanados = contadorGanados + 2; //sumamos 2 porque fueron 2 las cartas correctas
        } else {
          listaTarjetas[primeraTarjetaSeleccionadaIndex].setAttribute(
            "src",
            "images/pattern.png"
          );
          listaTarjetas[segundaTarjetaSeleccionadaIndex].setAttribute(
            "src",
            "images/pattern.png"
          );
        }
        cartasSeleccionadas = [];
        if (contadorGanados === tarjetas.length) {
          resultado.textContent = "¡Felicidades! ¡Los encontraste a todos!";
        } else {
          resultado.textContent = (contadorGanados / 2) + " pares encontrados"; //hay 2n pares, por ende hay n elementos distintos
        }
      }
      armarTablero();

      const REINICIAR = document.getElementById("reiniciar")
      REINICIAR.addEventListener("click", reiniciarJuego)
      function reiniciarJuego() {
        // Reiniciamos las variables
        cartasSeleccionadas = [];
        contadorGanados = 0;
        resultado.textContent = (contadorGanados / 2) + " pares encontrados";
        // Eliminamos todas las tarjetas
        grid.innerHTML = "";
        // Volvemos a mezclar las tarjetas y las armamos de nuevo
        tarjetas = revolverTarjetas(tarjetas);
        armarTablero();
      }
    })
    .catch(error => {
      console.log('Hubo un error', error);
    });


  //funcion para obtener las imagenes 
  async function ObtenerImagenes(apiKey, count) {
    const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const images = data.map(photo => {
        return {
          id: photo.id,
          url: photo.urls.regular
        };
      });
      return images;
    } catch (error) {
      console.log('Hubo un error', error);
    }
  }
});