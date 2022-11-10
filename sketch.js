
function setup() {
  createCanvas(400,400);
  background("yellow");
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  

  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    
  }
 



  
  drawSprites();
}

