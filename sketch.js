var fixedRect, movingRect,rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(600,600,80,30);
  rect1.shapeColor = "green";
  rect1.velocityX=-3;
  rect2 = createSprite(450,600,80,30);
  rect2.shapeColor = "green";
  rect2.velocityX=3;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounce(fixedRect,movingRect);
 bounce(rect1,rect2);
  drawSprites();
}
