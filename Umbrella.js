class Umbrella {
    constructor(x, y,radius) {
      var options = {
          isStatic:true,
          density:2
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.radius = radius;
      this.image = loadImage("images/Walk/walking_1.png");
      World.add(world, this.body);
    };
    display(){
        var pos =this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x, pos.y-5,250,250);
    };
  };