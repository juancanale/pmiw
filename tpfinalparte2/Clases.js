// Jugador
class Jugador {
  constructor(x, y) {
    this.x = x * escalaX;  // Aplicar escala X
    this.y = y * escalaY;  // Aplicar escala Y
    this.tamano = 15 * escalaX; // Tamaño ajustado en X
  }

  mostrar() {
    fill(251, 255, 109);
    ellipse(this.x, this.y, this.tamano);
  }

  mover() {
    if (keyIsDown(UP_ARROW)) this.y -= 2 * escalaY;   // Mover en Y con escala
    if (keyIsDown(DOWN_ARROW)) this.y += 2 * escalaY;  // Mover en Y con escala
    if (keyIsDown(LEFT_ARROW)) this.x -= 2 * escalaX;  // Mover en X con escala
    if (keyIsDown(RIGHT_ARROW)) this.x += 2 * escalaX; // Mover en X con escala
  }
}

// Clase Triangulo
class Triangulo {
  constructor(x, y) {
    this.x = x * escalaX;  // Aplicar escala X
    this.y = y * escalaY;  // Aplicar escala Y
    this.tamano = 15 * escalaX;  // Tamaño ajustado
    this.recolectado = false;
  }

  mostrar() {
    if (!this.recolectado) {
      fill(255, 0, 0);
      triangle(this.x, this.y - this.tamano, this.x - this.tamano, this.y + this.tamano, this.x + this.tamano, this.y + this.tamano);
    }
  }

  verificarRecoleccion(jugador) {
    let d = dist(this.x, this.y, jugador.x, jugador.y);
    if (d < this.tamano + jugador.tamano / 2) {
      this.recolectado = true;
      return true;
    }
    return false;
  }
}

// Pared
class Pared {
  constructor(x, y, ancho, alto) {
    this.x = x * escalaX;               // Ajustado a la resolución
    this.y = y * escalaY;               // Ajustado a la resolución
    this.ancho = ancho * escalaX;       // Ancho ajustado en X
    this.alto = alto * escalaY;         // Alto ajustado en Y
  }

  mostrar() {
    fill(103, 73, 107);
    rect(this.x, this.y, this.ancho, this.alto);
  }

  verificarColision(jugador) {
    return jugador.x > this.x && jugador.x < this.x + this.ancho &&
           jugador.y > this.y && jugador.y < this.y + this.alto;
  }
}

// laberinto
class Laberinto {
  constructor() {
    this.paredes = [];
    this.triangulos = [];
    this.crearElementos();
  }

  crearElementos() {
// paredes borde
this.paredes.push(new Pared(0, 0, 640, 10));               // borde superior
this.paredes.push(new Pared(0, 0, 10, 480));               // borde izquierdo
this.paredes.push(new Pared(390, 0, 10, 400));             // borde derecho
this.paredes.push(new Pared(0, 390, 400, 10));             // borde inferior





    //paredes obstaculos
    this.paredes.push(new Pared(100, 50, 200, 10));   // hori
    this.paredes.push(new Pared(200, 100, 10, 200));  // ver
    this.paredes.push(new Pared(150, 200, 200, 10));  // horiz
    this.paredes.push(new Pared(50, 250, 150, 10));   // hori
    this.paredes.push(new Pared(300, 150, 10, 100));  // ver
    this.paredes.push(new Pared(50, 150, 10, 100));   // ver
    this.paredes.push(new Pared(250, 50, 10, 200));   // ver
    this.paredes.push(new Pared(100, 300, 200, 10));  // hori
    this.paredes.push(new Pared(300, 300, 10, 50));   // ver
    this.paredes.push(new Pared(150, 300, 10, 50));   // ver

    // triangulos
    this.triangulos.push(new Triangulo(150, 150));
    this.triangulos.push(new Triangulo(250, 250));
    this.triangulos.push(new Triangulo(300, 100));
    this.triangulos.push(new Triangulo(50, 300));
    this.triangulos.push(new Triangulo(350, 200));
  }

  mostrar() {
    for (let pared of this.paredes) {
      pared.mostrar();
    }
    for (let triangulo of this.triangulos) {
      triangulo.mostrar();
    }
  }

  verificarColisiones(jugador) {
    for (let pared of this.paredes) {
      if (pared.verificarColision(jugador)) {
        return true;
      }
    }
    return false;
  }

  recolectarTriangulos(jugador) {
    for (let triangulo of this.triangulos) {
      triangulo.verificarRecoleccion(jugador);
    }
  }

  todosRecolectados() {
    return this.triangulos.every(triangulo => triangulo.recolectado);
  }
}
