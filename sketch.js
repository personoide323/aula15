function setup() {
  createCanvas(600, 400);
  background("pink")
}

function draw() {
  stroke("blue");
  fill("red");


if(mouseIsPressed){
  rect(mouseX,mouseY, 50, 40)
}
}