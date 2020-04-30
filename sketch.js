var fR, mR;

function setup() {
  createCanvas(1200,800);
  fR = createSprite(400, 100, 50, 80);
  fR.debug = true;
  fR.shapeColor = "turquoise";
  mR = createSprite(400, 800, 80, 30);
  mR.debug = true;
  mR.shapeColor = "turquoise";
  fR.velocityY = 5;
  mR.velocityY = -5;
}

function draw() {
  background(0, 0, 0);
  //mR.x = World.mouseX;
  //mR.y = World.mouseY;
  if (mR.x - fR.x < fR.width/2 + mR.width/2 && fR.x - mR.x < fR.width/2 + mR.width/2){
    mR.velocityX = mR.velocityX * -1;
    fR.velocityX = fR.velocityX * -1;
  }
    if(mR.y - fR.y < fR.height/2 + mR.height/2 && fR.y - mR.y < fR.height/2 + mR.height/2) {
    mR.velocityY = mR.velocityY * -1;
    fR.velocityY = fR.velocityY * -1;
  }
  drawSprites();
}