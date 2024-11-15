// Video: https://youtu.be/zBMZocucMZo


let estado = 0;
let palabras = ["Rick y Morty quieren elegir su nueva aventura", "¿A que planeta deberian ir?", "Llegan al planeta de selva y empiezan a explorar", "Encuentran una tribu muy peligrosa en el planeta", "Luego de luchar contra la Tribu se convierten en los lideres de esta", "Deciden pasar un par de años conviviendo como sus lideres por mera diversion", "Corren con a toda velocidad hasta la nave", "Deciden que fue suficiente aventura por un dia y descansar para su proxima aventura", "Al llegar al planeta, bajan y deciden explorar", "Luego de un rato explorando, se pierden sin encontrar la nave", "¿Que deberian hacer?", "Deciden volver con su pistola de portales", "Despues de haber explorado un nuevo planeta y haberse perdido decidieron no volver jamas", "Ellos empiezan a buscar por toda la ciudad su Nave", "Por fin despues de tanto caminar encuentran su nave en un viejo taller, listos con su nave deciden volver a su casa", "Despues de esta experiencia deciden volver al planeta en un futuro para seguir explorando sus misterios", "Al llegar en su nave al planeta, aterrizan y se ponen a explorarlo", "luego de explorar un rato se aburren y deciden probar con otro planeta", "Presiona R para reiniciar"];
let Imagen = [];
let cancion
let cancionReproduciendose = false; 





function preload() {
  Inicio = loadImage('Data/Inicio.jpg'); 
  
    Imagen0 = loadImage('Data/Rick0.jpg');
    Imagen1 = loadImage('Data/Rick1.jpg');
    Imagen2 = loadImage('Data/Rick2.jpg');
    Imagen3 = loadImage('Data/Rick3.jpg');
    Imagen4 = loadImage('Data/Rick4.jpg');
    Imagen5 = loadImage('Data/Rick5.jpg');
    Imagen6 = loadImage('Data/Rick6.jpg');
    Imagen7 = loadImage('Data/Rick7.jpg');
    Imagen8 = loadImage('Data/Rick8.jpg');
    Imagen9 = loadImage('Data/Rick9.png');
    Imagen10 = loadImage('Data/Rick10.jpg');
    Imagen11 = loadImage('Data/Rick11.jpg');
    Imagen12 = loadImage('Data/Rick12.jpg');
  
  soundFormats('mp3', 'ogg');
  cancion = loadSound('Data/RickAudio.mp3');
  
}
  



function setup() {
  
  createCanvas( 640,480 ); 
  textSize(20);
  textAlign(CENTER, CENTER);
  
   cancion.setVolume(0.05);
   
}


function draw() {
   //inicio
    if (estado === 0) {
     image(Inicio, 0, 0 ); 
     botonInicio(430, 375, 200, 100);
     text("Juan Canale", 60, 40 );
     text("Gaspar Bernal", 66, 60 );
     
 
    if (!cancionReproduciendose) {
      cancion.loop();
      cancionReproduciendose = true; 
    }

  


}  //Pantalla 1
   else if (estado === 1) {
  image(Imagen0, 0, 0);
  fill(0);
  text(palabras[0], 10, 10, 580, 100);
  botonC(220, 400, 200, 50);


 //Pantalla Decision 1
}
   else if (estado === 2) {
  image(Imagen1, 0, 0);
  fill(255);
  text(palabras[1], 10, 10, 580, 100);
  botonP1(10, 380, 200, 50, "Planeta Selva");
  botonP1(220, 380, 200, 50, "Planeta Tecnologico");
  botonP1(430, 380, 200, 50, "Planeta Desierto");
  
   }
   //Planeta selva 1
      else if (estado === 3) {
  image(Imagen10, 0, 0);
  fill(255);
  text(palabras[2], 10, 10, 580, 100);
   botonC(220, 400, 200, 50);
  
   }
  //Planeta selva 2
      else if (estado === 4) {
  image(Imagen8, 0, 0);
  fill(255);
  text(palabras[3], 10, 10, 580, 100);
  botonP1(10, 380, 200, 50, "Pelear");
  botonP1(420,380, 200, 50, "Huir");
 
   }
    //Planeta selva 3 PELEAR
      else if (estado === 5) {
  image(Imagen9, 0, 0);
  fill(255);
  text(palabras[4], 10, 10, 580, 100);
   botonC(220, 400, 200, 50);
  
 
   }
   
     //Planeta selva 3 PELEAR Final 1
      else if (estado === 6) {
  image(Imagen9, 0, 0);
  fill(255);
  text(palabras[5], 10, 10, 580, 100);
  rect(230, 385, 130, 50);
  fill(0);
  text("Final 1", 10, 360, 580, 100);
  text(palabras[18], 480, 460);
  
 
   }
   
   //Planeta selva 4 HUIR
      else if (estado === 7) {
  image(Imagen11, 0, 0);
  fill(255);
  text(palabras[6], 10, 10, 580, 100);
   botonC(220, 400, 200, 50);
  
 
   }
    //Planeta selva 4 HUIR Final 2
        else if (estado === 8) {
  image(Imagen7, 0, 0);
  fill(255);
  text(palabras[7], 10, 10, 580, 100);
 
  rect(230, 385, 130, 50);
  fill(0);
  text("Final 2", 10, 360, 580, 100);
  text(palabras[18], 480, 460);
   
   }   
      //Planeta Tecnologico
        else if (estado === 9) {
  image(Imagen4, 0, 0);
  fill(0);
  text(palabras[8], 10, 10, 580, 100); 
  botonC(220, 400, 200, 50);
   }   
      //Planeta Tecnologico 2
        else if (estado === 10) {
  image(Imagen5, 0, 0);
  fill(255);
  text(palabras[9], 10, 10, 580, 100); 
  botonC(220, 400, 200, 50);
  
   }
   
         //Planeta Tecnologico Perdidos
        else if (estado === 11) {
  image(Imagen5, 0, 0);
  fill(255);
  text(palabras[10], 10, 10, 580, 100); 
  botonP1(10, 380, 200, 50, "Buscar la nave");
  botonP1(420,380, 200, 50, "Volver con el portal");
  
   }
   
         //Planeta Tecnologico PORTAL
        else if (estado === 12) {
  image(Imagen12, 0, 0);
  fill(255);
  text(palabras[11], 10, 10, 580, 100); 
  botonC(220, 400, 200, 50);
  
   }
   
           //Planeta Tecnologico PORTAL 2 FINAL
        else if (estado === 13) {
  image(Imagen7, 0, 0);
  fill(255);
  text(palabras[12], 10, 10, 580, 100); 
  rect(230, 385, 130, 50);
  fill(0);
  text("Final 3", 10, 360, 580, 100);
  text(palabras[18], 480, 460);
 


}
         //Planeta Tecnologico NAVE
        else if (estado === 14) {
  image(Imagen5, 0, 0);
  fill(255);
  text(palabras[13], 10, 10, 580, 100); 
   botonC(220, 400, 200, 50);
  
   }
            //Planeta Tecnologico NAVE 2
        else if (estado === 15) {
  image(Imagen6, 0, 0);
  fill(255);
  text(palabras[14], 10, 10, 580, 100); 
   botonC(220, 400, 200, 50);
  
   }
              //Planeta Tecnologico PORTAL 2 FINAL
        else if (estado === 16) {
  image(Imagen7, 0, 0);
  fill(255);
  text(palabras[15], 10, 10, 580, 100); 
  rect(230, 385, 130, 50);
  fill(0);
  text("Final 4", 10, 360, 580, 100);
  text(palabras[18], 480, 460);
  }
  
           else if (estado === 17) {
  image(Imagen2, 0, 0);
  fill(255);
  text(palabras[16], 10, 10, 580, 100); 
   botonC(220, 400, 200, 50);
  
   }
              else if (estado === 18) {
  image(Imagen3, 0, 0);
  fill(255);
  text(palabras[17], 10, 10, 580, 100); 
   botonC(220, 400, 200, 50);
  
   }
   
    //Pantalla Decision 2
   else if (estado === 19) {
  image(Imagen1, 0, 0);
  fill(255);
  text(palabras[1], 10, 10, 580, 100);
  botonP1(10, 380, 200, 50, "Planeta Selva");
  botonP1(430, 380, 200, 50, "Planeta Tecnologico");

  
   }

   
   
}

function mousePressed() { 
  if (estado === 0 && zonabtn(460, 400, 250)) {
    estado = 1;
     cancion.play();
   
  }

  else if (estado === 1 && zonabtn(220, 360, 250, 150)) {
    estado = 2;
  }
  
   else if (estado === 2 && zonabtn(10, 380, 250, 100)) {
    estado = 3;
  }
  
   else if (estado === 3 && zonabtn(220, 360, 250, 150)) {
    estado = 4;
  }
  
    else if (estado === 4 && zonabtn(10, 380, 250, 100)) {
    estado = 5;
  }
    else if (estado === 5 && zonabtn(220, 360, 250, 150)) {
    estado = 6;
  }
  
   else if (estado === 4 && zonabtn(420, 380, 250, 150)) {
    estado = 7;
  }
  
   else if (estado === 7 && zonabtn(420, 380, 250, 150)) {
    estado = 8;
  }
  
    else if (estado === 2 && zonabtn(220, 380, 250, 150)) {
    estado = 9;
  }
  
   else if (estado === 9 && zonabtn(220, 380, 250, 150)) {
    estado = 10;
  }
     else if (estado === 10 && zonabtn(220, 380, 250, 150)) {
    estado = 11;
  }
  
     else if (estado === 11 && zonabtn(420, 380, 250, 150)) {
    estado = 12;
  }
    else if (estado === 12 && zonabtn(220, 380, 250, 150)) {
    estado = 13;
  }
     else if (estado === 11 && zonabtn(10, 380, 250, 150)) {
    estado = 14;
  }
      else if (estado === 14 && zonabtn(220, 380, 250, 150)) {
    estado = 15;
  }
       else if (estado === 15 && zonabtn(220, 380, 250, 150)) {
    estado = 16;
  }
       else if (estado === 2 && zonabtn(430, 380, 250, 150)) {
    estado = 17;
  }
       else if (estado === 17 && zonabtn(220, 380, 250, 150)) {
    estado = 18;
  }
       else if (estado === 18 && zonabtn(220, 380, 250, 150)) {
    estado = 19;
  }
        else if (estado === 19 && zonabtn(10, 380, 250, 150)) {
    estado = 3;
  }
       else if (estado === 19 && zonabtn(420, 380, 250, 150)) {
    estado = 9;
  }
  
}

function keyTyped() {
  if (key === 'r') {
      estado = 1;
  cancionReproduciendose = false;  
  }
}
