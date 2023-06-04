/* Al inicio hay un retardo de un segundo y otro segundo para el armado de la obra.
Sosteniendo apretado el botón del mouse se dibujan cuadrados hasta soltarlo y con la letra "a" las líneas se ponen rojas y con la letra "z"
vuelven a ser negraseew */

////////////////////////////////////////////////////////////////////////

let elCuadrado, elCuadrado1;
let radioMayor =60;
let x = radioMayor;
let y = radioMayor;
let velocidadX = 8;
let velocidadY = 8.5;
let direccionX = 1;
let direccionY = 1;

function setup() {
  scale(2.0);
  createCanvas(620, 690);

  background(30, 1, 1);

  scale(2.0);
  fill(120, 10, 10);
  rect(50, 80, 230);
  frameRate(2);
}

function draw() {
  scale(2.0);
  //if (keyIsPressed){
  if (key == "a") {
    stroke(255, 0, 0, 200);
  } else if (key == "z") {
    stroke(0, 0, 0);
  }
  if (mouseIsPressed) {
    elCuadrado = pmouseX;
    elCuadrado1 = pmouseY;

    scale(2.0);
    rect(elCuadrado, elCuadrado1 + 50, 50, 50);
  }
  //Rectangulo interno

  fill(120, 10, 10);
  rect(50, 80, 230);

  //círculos concentricos

  fill(255, 180, 80);
  ellipse(90, 90, 110);

  if (key == "d") {
    fill(120, 20, 20);
    background(0)
  }

  // mouse
  if (key == "e") {
    fill(180, 10, 10);
    ellipse(90, 90, 85);
    background(0)
  }
  if (key == "r") {
    fill(50, 10, 10);
    ellipse(90, 90, 50);
  
  }
  fill(120, 10, 10);
  ellipse(90, 90, 70);
  fill(50, 10, 10);
  ellipse(90, 90, 50);
  fill(190,160,50)
ellipse(180, 150, 60, 40);
  //Elípses sobre el tíangulo
push();
 
  translate(x, y);
  rotate(radians(x));
  noStroke(0);
  
  fill(250, 130, 90);
  ellipse(180, 150, 70, 50);
  //background(0)
  fill(160, 130, 90);
  ellipseMode(189, 150, 70, 50);
  translate(x, y);
 
  ellipse(0, 0, radioMayor, radioMayor);

   x += velocidadX * direccionX
  if((x > width -radioMayor)||(x < radioMayor)){
    direccionX = -direccionX;
   
  }
  if((y > height - radioMayor)|| (y < radioMayor)){
  direccionY = - direccionY; 
 
  }
  console.log(x)
pop();
  
  fill(255, 160, 90);
  ellipse(170, 170, 70, 50);
  ellipse(160, 190, 70, 50);


  //Tríangulo
  if (key == "f") {
    fill(155, 180, 60);
  }
  triangle(180, 210, 90, 300, 130, 180);

  //Paralelas que cruzan el tríangulo

  line(200, 290, 70, 215);
  line(210, 300, 80, 225);
  line(220, 310, 90, 235);
  //Figura del ángulo inferior derecho

  push();
    for (let i = 220; i < 250; i += 10) {
    rect(210, i, 10);
  }
  pop();
  /* rect(210, 220, 10);
  rect(210, 230, 10);
  rect(210, 240, 10);
  rect(210, 250, 10);*/

  fill(255, 90, 0);
  rect(220, 230, 10);
  rect(220, 240, 10);
  rect(220, 250, 10);
  rect(220, 260, 10);
}
document.oncontextmenu = function () {
  return false;
};
