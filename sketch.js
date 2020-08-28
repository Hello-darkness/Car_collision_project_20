
var call, wall;
var speed, weight;
var deformity;



function setup() {

  createCanvas(1600, 400);


  speed = random(1, 200);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height / 2);

  car.velocityX = speed;
}

function draw() {

  background(0, 0, 0);

  if (car.collide(wall)) {
    deformity = (0.5 * speed * weight) / 300;
  }

  if (deformity <= 100) {
    car.shapeColor = "green";
    textSize(20);
    textFont("Georgia");
    textStyle(BOLD);
    text("This car collision is considered good", 300, 300);
  }
  else if (deformity > 100 && deformity < 180) {
    car.shapeColor = "yellow";
    textSize(20);
    textFont("Georgia");
    textStyle(BOLD);
    text("This car collision is considered average", 300, 300);
  }
  else if (deformity >= 180) {
    textSize(20);
    textFont("Georgia");
    textStyle(BOLD);
    car.shapeColor = "red";
    text("This car collision is lethal for passangers", 300, 300);
  }




  textSize(18);
  textFont("Georgia");
  textStyle(BOLD);


  text("CGSO Car Collision simulator", 300, 30);

  text("Deformation: " + Math.round(deformity), 900, 30);

  text("Speed: " + Math.round(speed), 1100, 30);

  text("Weight: " + Math.round(weight), 1300, 30);



  drawSprites();
}