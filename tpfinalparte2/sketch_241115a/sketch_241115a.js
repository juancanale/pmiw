//Juan Canale y Gaspi Bernal

//Video: https://youtu.be/P70oeAFk9Xo



let jugador;
let laberinto;
let estadoJuego = 'inicio';
let tiempoCreditos = 0;
let Imagen0, Imagen1;
let escalaX = 640 / 400;
let escalaY = 480 / 400;
let cancion;
let cancionReproduciendose = false;

function preload() {
  Imagen0 = loadImage('Data/inicio.png');
  Imagen1 = loadImage('Data/fin.png');
  soundFormats('mp3', 'ogg');
  cancion = loadSound('Data/RickAudio.mp3');
}

function setup() {
  createCanvas(640, 480);
  jugador = new Jugador(50, 50);
  laberinto = new Laberinto();
}

function draw() {
  background(236, 159, 53);

  if (estadoJuego === 'inicio') {
    mostrarPantallaInicio();
  } else if (estadoJuego === 'jugando') {
    jugar();
  } else if (estadoJuego === 'creditos') {
    mostrarCreditos();
  }
}

function keyPressed() {
  if (key === ' ' && estadoJuego === 'inicio') {
    estadoJuego = 'jugando';

    // Reproducir el audio solo cuando el usuario presione espacio
    if (!cancionReproduciendose) {
      cancion.loop();  // Reproduce la canción en bucle
      cancionReproduciendose = true;
    }
  }
  if (key === 'r' && estadoJuego === 'creditos') {
    estadoJuego = 'inicio';
    tiempoCreditos = 0;
  }
}
