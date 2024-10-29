// opciones de debajo

const pantallaGrande = document.getElementById('btn-fullscreen');

// pantalla inactiva

const play = document.getElementById('btn-play');
const pantalla = document.getElementById('pantalla-juego');
const pantallaActiva = document.getElementById('pantalla-juego-activa');

// botones pantalla principal

const btnJugarSolo = document.getElementById('solo');
const btnMultijugador = document.getElementById('multijugador');
const btnOpciones = document.getElementById('btn-opciones');
const pantallaOpciones = document.getElementById('pantalla-juego-opciones');

// botones opciones

const opcionUno = document.getElementById('opcion-1');
const opcionDos = document.getElementById('opcion-2');
const volverAtras = document.getElementById('volver');

play.addEventListener('click', () =>{
    pantalla.style.display = 'none';
    pantallaActiva.style.display = 'flex';
 });

btnOpciones.addEventListener('click', () => {
    pantallaActiva.style.display = 'none';
    pantallaOpciones.style.display = 'flex';
})

volverAtras.addEventListener('click', () => {
    pantallaOpciones.style.display = 'none';
    pantallaActiva.style.display = 'flex';
})

