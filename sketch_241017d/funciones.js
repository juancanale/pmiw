


function botonInicio(x, y, w, h) {
  fill(100);
  rect(x, y, w, h);
  fill(255);
  text("Inicio", x + w / 2, y + h / 2);
  
}




function botonC(x, y, w, h, ) {
  fill(100);
  rect(x, y, w, h);
  fill(255);
  text("continuar", x + w / 2, y + h / 2);
}

function botonP1(x, y, w, h, t) {
  fill(100);
  rect(x, y, w, h);
  fill(255);
  text(t, x + w / 2, y + h / 2);
}




function zonabtn(x, y, size) {
  return dist(mouseX, mouseY, x, y) < size / 2;
}
