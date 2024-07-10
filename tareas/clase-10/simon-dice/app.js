let nroRonda = 1;
let estado = "Apretá en 'Comenzar' para jugar."; // indicará "Apretá en 'Comenzar' para jugar.", "Es el turno de la máquina" o "Es tu turno de jugar!"

console.log("Juego Simon dice");


function iniciarJuego() {
    reiniciarEstado();
    actualizarBoton("Reiniciar");
    manejarTurno();
}

function reiniciarEstado() {
    nroRonda = 1;
    estado = "Apretá en 'Comenzar' para jugar.";
}

function manejarTurno() {
    //Turno Maquina
    turnoMaquina();
    
}
