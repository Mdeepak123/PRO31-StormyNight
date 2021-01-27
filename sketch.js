const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maxDrops = 200;
var drops = [];

var manImage, thunder1,thunder2,thunder3,thunder4, umbrella;

function preload(){

    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    createCanvas(500,950)

    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(200,820,100);

    if(frameCount%10===0){
        for(var i=0;i<maxDrops;i++){
            drops.push(new Drops(random(0,500),random(0,400)));
        }
    }

}

function draw(){
    background("black");
    Engine.update(engine);

    var rand = Math.round(random(1,3));
  if(frameCount%80===0){
   switch(rand){
     case 1 : image(thunder1,random(10,370),random(10,30));
     break;
     case 2 : image(thunder2,random(10,370),random(10,30));
     break;
     case 3 : image(thunder3,random(100,300),random(10,30));
     break;
     default : break;
   }
}

    //console.log(drops);

    umbrella.display();

    for(var i=0; i<maxDrops;i++){
        drops[i].display();
        drops[i].update();
      }


}