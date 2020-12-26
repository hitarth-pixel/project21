
var wall,thickness;
var bullet,weight,speed;




function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(45,100);
  weight=random(400,1500);
  bullet=createSprite(50, 200, 50, 15);
  wall=createSprite(1200, 200, thickness , height/2);
  wall.shapeColor= color(80,80,80);
  bullet.shapeColor="white";
  bullet.velocityX=speed;
    }

function draw() {
  background("black");  
   wall.visible=true;
  if(isCollide(wall,bullet)){
      bullet.velocityX=0;
      var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
      if(damage>10){
        wall.shapeColor=color(255,0,0)
      }
    
      if(damage<10){
        wall.shapeColor="green";
      }
    
  }
  drawSprites();
}
  function isCollide(wall,bullet)
  {
    bulletRightEdge=bullet.x + bullet.width;
    wallLeftEdge=wall.x;
    if(bulletRightEdge>=wallLeftEdge){

      return true;
    }
    return false; 
  }