// Variables y Constantes
var puntajeUsuario = 0;
var puntajeIA = 0;
const spanUsuario_Puntaje = document.getElementById("puntaje_usuario");
const spanIA_Puntaje = document.getElementById("puntaje_ia");
const tablaPuntajes_Div = document.querySelector(".puntaje");
const resultado_p = document.querySelector(".resultado > p");
const opcionRoca = document.getElementById("piedra");
const opcionPapel = document.getElementById("papel");
const opcionTijeras = document.getElementById("tijeras");

// Obtener la seleccion de la IA
function obtenerOpcion_IA() {
    const opciones = ['Piedra', 'Papel', 'Tijeras'];
    const numeroAleatorio = Math.floor(Math.random() * 3);
    return opciones[numeroAleatorio];
}

// Convertirlos ID´s en Palabras
function convertirPalabra (word) {
    if (word === "Piedra") return "Piedra";
    if (word === "Papel") return "Papel";
    return "Tijeras";
}

// Usuario Gana
function gana(opcion_Usuario, opcion_IA) {
    puntajeUsuario++;
    spanUsuario_Puntaje.innerHTML = puntajeUsuario;
    spanIA_Puntaje.innerHTML = puntajeIA;
    const usuarioPequeño = "Usuario".fontsize(3);
    const iaPequeño = "IA".fontsize(3);
    resultado_p.innerHTML = `${convertirPalabra(opcion_Usuario)}` + " vs " + `${convertirPalabra(opcion_IA)}` + "<b style='color: #9ACAEE'> <u>Has Ganado </u></b>";
};

// Usuario pierde
function pierde(opcion_Usuario, opcion_IA) {
    puntajeIA++;
    spanUsuario_Puntaje.innerHTML = puntajeUsuario;
    spanIA_Puntaje.innerHTML = puntajeIA;
    resultado_p.innerHTML = `${convertirPalabra(opcion_Usuario)}` + " vs " + `${convertirPalabra(opcion_IA)}` + "<b style='color: #9ACAEE'> <u>Has Perdido </u></b>";
};

// Empate
function empate(opcion_Usuario, opcion_IA) {
    resultado_p.innerHTML = "Ha habido un empate";
};

// En caso de
function game(opcion_Usuario) {
    const opcion_IA = obtenerOpcion_IA();
    switch(opcion_Usuario + opcion_IA) {
        case "PiedraTijeras":
        case "PapelPiedra":
        case "TijerasPapel":
            gana(opcion_Usuario, opcion_IA);
            break;
        case "TijerasPiedra":
        case "PiedraPapel":
        case "PapelTijeras":
            pierde(opcion_Usuario, opcion_IA);
            break;
        case "TijerasTijeras":
        case "PapelPapel":
        case "PiedraPiedra":
            empate(opcion_Usuario, opcion_IA);
            break;
    };
};

// Acciones del Juego
function main() {
    opcionRoca.addEventListener('click', function btn_Roca() {
        game("Piedra");
    });
    
    opcionPapel.addEventListener('click', function btn_Papel() {
        game("Papel");
    });
    
    opcionTijeras.addEventListener('click', function btn_Tijeras() {
        game("Tijeras");
    });    
}


// Llamar el juego
main();