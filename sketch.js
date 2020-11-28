var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(200,690,1600,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	box1 = new Box(400,675,200,20);
	box2 = new Box(305,634,20,100);
	box3 = new Box(505,634,20,100);

	

	packageBody = Bodies.rectangle(width/2 ,200 ,10,10 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(200,690, 1600, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  groundSprite.x= ground.position.x;
  groundSprite.y= ground.position.y;

  console.log(box2.body.position.x);
  console.log(box2.body.position.y);
  console.log(box2.body.angle);
  
  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
    
  }

 
}



