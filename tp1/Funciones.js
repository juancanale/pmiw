//Dibujo en estado quieto 

function grilla ( PX,  PY,  Color) {

  //Columnas y filas
  let columnas = 20;
  let filas = 20;

  //Espacio entre circulos
  let espacioX = width / 2 / columnas;
  let espacioY = height / filas;

  //Tamaño de los circulos
  let TamMin = 0;
  let TamMax = min(espacioX, espacioY);

  //Centro
  let centroX = 600;
  let centroY = height / 2;




  for (let i = 0; i < columnas; i++) {
    for (let j = 0; j < filas; j++) {

      //Coordenadas del centro de cada circulo
      let x = 400 + i * espacioX + espacioX / 2;
      let y = j * espacioY + espacioY / 2;

      //Distancia al centro
      let d = dist(PX, PY, x, y);

      //Agrandamiento de circulos
      let Tam = map(d, 0, dist(400, 100, centroX, centroY), TamMin, TamMax);

      //Tamaño
      Tam = max(Tam, TamMin);

      //Circulos
      fill( Color );
      ellipse(x, y, Tam, Tam);
    }
  }
}



function generarColor() {
  
  //Generador de color
  ColorRandom = color(random(255), random(0), random(255));
  ColorRandom2 = color(random(255), random(255), random(0));
  
}



function reiniciar(){
 mouseY = height / 2;
 mouseX = 600;
 
}
