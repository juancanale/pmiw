
// Función para mostrar la pantalla de inicio
function mostrarPantallaInicio() {
  image(Imagen0, 0, 0, width, height);  // Mostrar imagen de inicio
  textAlign(CENTER);
  fill(255);
  textSize(32);
  text("Bienvenido al Laberinto", width / 2, height / 3);
  
  textSize(20);
  text("Presiona espacio para comenzar", width / 2, height / 2);
}

function jugar() {
  jugador.mover();
  laberinto.recolectarTriangulos(jugador);

  if (!laberinto.verificarColisiones(jugador)) {
    jugador.mostrar();
  } else {
    // Manejo de colisión, por ejemplo, detener al jugador
    fill(255, 0, 0);
    textSize(32);
    text("¡Perdiste!", 100, 200);
    noLoop();  // Detiene el juego
  }

  laberinto.mostrar();

  // Verificar si todos los triángulos han sido recolectados
  if (laberinto.todosRecolectados()) {
    estadoJuego = 'creditos';  // Cambia a la pantalla de créditos
  }
}

function mostrarCreditos() {
  image(Imagen1, 0, 0, width, height);  // Mostrar imagen de créditos
  fill(255);
  textAlign(CENTER);
  textSize(20);
  
  text("Créditos:", width / 2, height / 3);
  textSize(16);
  text("Juan Canale y Gaspi Bernal", width / 2, height / 2);
  text("Presiona 'R' para volver al inicio", width / 2, height / 2 + 60);
}
