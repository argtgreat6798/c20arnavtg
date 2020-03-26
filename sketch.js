var fixedRect,moveRect;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400,100,50,80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  moveRect = createSprite(400, 800, 80, 30);
  moveRect.shapeColor = "Yellow";
  moveRect.debug = true;
  moveRect.velocityY = -5;
  fixedRect.velocityY = +5;


}

function draw() {
  background(0,0,0);  
 if (moveRect.x-fixedRect.x<fixedRect.width/2 + moveRect.width/2 && fixedRect.x-moveRect.x< fixedRect.width/2 + moveRect.width/2) {
   moveRect.velocityX = moveRect.velocityX*(-1);
   fixedRect.velocityX = fixedRect.velocityX*(-1);
 }
  if (  moveRect.y-fixedRect.y < moveRect.height/2 +fixedRect.height/2&&
     fixedRect.y-moveRect.y < moveRect.height/2 +fixedRect.height/2) {
      moveRect.velocityX = moveRect.velocityY*(-1);
      fixedRect.velocityX = fixedRect.velocityY*(-1);
  }
  
  
  drawSprites();
}