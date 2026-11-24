// elementos que voy a usar
const contenedor = document.getElementById("contenedor");
const botonTema = document.getElementById("tema");
const cuerpo = document.querySelector("body");
const formulario = document.querySelector("#miFormulario");
const mensajeGracias = document.querySelector("#mensajeGracias");


// trae los datos del json y arma una tarjeta por cada tostador
// ahora cada tarjeta va adentro de una columna de bootstrap
const cargarTarjetas = async () => {
    let res = await fetch("datos.json");
    let datos = await res.json();

    let htmlAcumulado = "";

    datos.forEach(item => {
        htmlAcumulado += `<div class="col-12 col-md-6 col-lg-3">`;
        htmlAcumulado += `<div class="tarjeta h-100 p-3 border border-2 rounded d-flex flex-column">`;
        htmlAcumulado += `<h3>${item.titulo}</h3>`;
        htmlAcumulado += `<p>${item.descripcion}</p>`;
        htmlAcumulado += `<p class="detalles mt-auto mb-0">${item.detalles}</p>`;
        htmlAcumulado += `</div>`;
        htmlAcumulado += `</div>`;
    });

    contenedor.innerHTML = htmlAcumulado;
}


// cambia entre tema claro y oscuro poniendo/sacando la clase del body
function cambiarTema() {
    cuerpo.classList.toggle("dark");
}


// validacion del formulario del modal, si esta todo bien muestro el mensaje de gracias
formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    if (!formulario.checkValidity()) {
        event.stopPropagation();
        formulario.classList.add("was-validated");
        return;
    }

    formulario.classList.add("d-none");
    mensajeGracias.classList.remove("d-none");

});


botonTema.addEventListener("click", cambiarTema);

cargarTarjetas();
