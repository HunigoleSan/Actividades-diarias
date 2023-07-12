const BTN_ENVIAR_HTML = document.getElementById("enviarComentario");
const CONTENEDOR_ACTVIDADES_HTML = document.getElementById("actividades");
const PUBLICACION_COMENTARIO_HTML = document.getElementById("publicacionComentario");
let limitarCaracterHTML = document.getElementById("limitarCaracter");
let limite = 200;
limitarCaracterHTML.innerHTML = limite
let comentario = ""
function nuevoElemento(actividad) {
  let lista = document.createElement("li");
  lista.className = "actividades";
  let actividadDiariaHtml = document.createTextNode(actividad);
  lista.appendChild(actividadDiariaHtml);
  CONTENEDOR_ACTVIDADES_HTML.appendChild(lista);
}

console.log(BTN_ENVIAR_HTML);
let almacenarComentarios = [];
/* Entrega la cantidad de letras encontradas en el campo
text-area */
cantidadDeLetrasEnElComentario();
function cantidadDeLetrasEnElComentario() {
  BTN_ENVIAR_HTML.addEventListener("click", function () {

    comentario = PUBLICACION_COMENTARIO_HTML.value;

    (comentario.length == 0)? console.log("Lista vacia, no registra nada"): agregarActividad();
  });
}
PUBLICACION_COMENTARIO_HTML.addEventListener("keydown", function(event) {
  // Aquí puedes realizar acciones cuando se presione una tecla
  let tecla = event.key;
  console.log(tecla)
  let validarKey = /^[a-zA-Z0-9;\s]$/.test(tecla);
  console.log(validarKey)
  if(!validarKey){
    (tecla == "Backspace")? 
    aumentarLimitador()
    : event.preventDefault();
    
    console.log("no descuenta limitador")
  }else{
    console.log("Tecla presionada: " + event.key);
    limite -= 1
    console.log(limite)
    limitarCaracterHTML.innerHTML = limite
  }
});
function aumentarLimitador(){
  limite +=1;
  limitarCaracterHTML.innerHTML = limite
  console.log("estamos aqui")
}
function agregarActividad() {
  nuevoElemento(comentario);
  console.log(comentario);
  almacenarComentarios.push(comentario);
  console.log("Cantidad de letras: ", comentario.length);
  PUBLICACION_COMENTARIO_HTML.value = "";
  limite = 200
  limitarCaracterHTML.innerHTML = limite
  console.log(almacenarComentarios);
};
