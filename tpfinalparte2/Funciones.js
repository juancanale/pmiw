

function mostrarPantallaInicio() {
  image(Imagen0, 0, 0, width, height);  
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
    // choque
    fill(255);
    textSize(32);
    text("¡Perdiste, presiona R para reiniciar!", 300, 450);
    noLoop();  // Detiene el juego
  }

  laberinto.mostrar();

  // Triang Recolectados
  if (laberinto.todosRecolectados()) {
    estadoJuego = 'creditos';  
  }
}

function mostrarCreditos() {
  image(Imagen1, 0, 0, width, height);  
  fill(255);
  textAlign(CENTER);
  textSize(20);
  
  text("Créditos:", width / 2, height / 3);
  textSize(16);
  text("Juan Canale y Gaspi Bernal", width / 2, height / 2);
  text("Presiona 'R' para volver al inicio", width / 2, height / 2 + 60);
}
