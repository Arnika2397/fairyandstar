var starImg,bgImg;
var star, starBody;
var sound,fairy,fairyimg;
var body;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, object;

function preload()
{
	starImg = loadImage("images/starImage.png");
	bgImg = loadImage("images/starryNight.jpg");
	//load animation for fairy here
	fairyimg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
	
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy

	engine = Engine.create();
	world = engine.world;

	
	fairy = createSprite(200, 200);
	fairy.addAnimation("HI", fairyimg);
	fairy.scale=0.3;
	

	body = Bodies.rectangle(200, 200, 5, {restitution:0.5, isStatic:true});
	World.add(world,body);



	star = createSprite(700,60);
	star.addImage(starImg);
	star.scale = 0.1;


	

	starBody = Bodies.circle(700 , 60 , 5, {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

	

}


function draw() {
  background(bgImg);

  Engine.update(engine);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  fairy.x=body.position.x
  fairy.y=body.position.y
  

  //write code to stop star in the hand of fairy
  if(star.y > 470 && starBody.position.y > 470){
	  matter.body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//write code to move fairy left and right

}
