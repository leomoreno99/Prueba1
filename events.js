// // EVENTO MODELO ACTUAL
// const titulo = document.getElementById("titulo1");

// titulo.addEventListener("click", mostrarContenido);
// titulo.addEventListener("click", cambiarTexto);
// titulo.addEventListener("click", cambiarFondo);
// //titulo.addEventListener("mouseover", cambiarFondo);

// function mostrarContenido() {
//   console.log(titulo.innerHTML);
//   titulo.removeEventListener("click", mostrarContenido);
// }

// function cambiarTexto() {
//   titulo.innerHTML = "cambio texto de ejemplo";
// }

// function cambiarFondo() {
//   titulo.style.background = "yellow";
// }

//EL OBJETO EVENTO
//Cuando se produce un evento, se crea dinámicamente un objeto evento y
//es pasado secuencialmente a los escuchadores (listners) para la gestion del evento

// const input = document.getElementById("entrada1");

// input.addEventListener("keydown", function (evento) {
//   console.log(evento);
//   console.log(evento.key);
//   console.log(evento.target);
// });

//PROPAGACION (burbujeo)
const html = document.querySelector("html");
const body = document.querySelector("body");
const ul = document.querySelector("ul");
const li = document.querySelector("li");
const a = document.querySelector("a");

html.addEventListener("click", nombreEtiqueta);
body.addEventListener("click", nombreEtiqueta);
ul.addEventListener("click", nombreEtiqueta, true);
li.addEventListener("click", nombreEtiqueta);
a.addEventListener("click", nombreEtiqueta);

function nombreEtiqueta(evento) {
  evento.preventDefault();
  //evento.stopPropagation();
  console.log(this.tagName);
}
