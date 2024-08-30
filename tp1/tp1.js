 //TP1 

//Video: https://www.youtube.com/watch?v=RMfjx6C5sys&ab_channel=JuanCanale


function preload() {
  IlusionImagen = loadImage("data/Ilusion.jpg");
}
  
// Estados
let estado = 'menu';

// colorrandom

let ColorRandom //= color(random(255), random(0), random(255));
let ColorRandom2 //= color(random(255), random(255), random(0));

function setup(){
  createCanvas( 800, 400 ); 
  estado = "Inicio";
 
  background( 0 );

  image(IlusionImagen, 0, 0);
 
  noStroke(); 
  
  
  grilla( 600, height / 2, 255 );  
}

function draw(){
  
  
  if (estado === "Movimiento") {
    background( 0 );
    grilla(mouseX, mouseY, 255);
    image(IlusionImagen, 0, 0);
  }      

  if (estado === "MovimientoColor") { 
    background(ColorRandom2);
    grilla(mouseX, mouseY, ColorRandom);
    image(IlusionImagen, 0, 0);
  }
}


function keyPressed() { 
  if (estado === "Movimiento" && key == ' ') {
    estado = "MovimientoColor";
    generarColor();  
  }

  if (estado === "Movimiento" && key == 'r') {  
    reiniciar();
  }

  if (estado === "MovimientoColor" && key == 'r') {
    reiniciar();
  }
}

function mouseClicked() { 
  estado = "Movimiento";
}
