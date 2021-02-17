var movingRect,fixedRect
var go1,go2,go3,go4

function setup() {
  createCanvas(1200,800);
movingRect=createSprite(400,200,80,30)  
movingRect.shapeColor="green";
fixedRect=createSprite(600,400,80,30)  
fixedRect.shapeColor="green"

go1=createSprite(100,100,80,30)  
go1.shapeColor="green";
go2=createSprite(200,100,80,30)  
go2.shapeColor="green"

go3=createSprite(300,100,80,30)  
go3.shapeColor="green";
go4=createSprite(400,100,80,30)  
go4.shapeColor="green"

}

function draw() {
  background("pink");  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  
  drawSprites();
}
function isTouching(object1,object2){
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2  ){
  
      return true;
    }
else{
  return false;
}
}