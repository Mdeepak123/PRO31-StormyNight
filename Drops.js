class Drops{
    constructor(x,y){

        var options={
            isStatic:false,
            restitution:0.5,
            friction:0
        }
        this.drop = Bodies.circle(x,y,5)
        this.radius = 5;

        World.add(world,this.drop);
    }
    update(){
        var pos=this.drop.position;
        if(pos.y>height){
            Body.setPosition(this.drop,{x:random(0,500),y:random(0,400)})
        }
    }
    display(){
        var pos=this.drop.position;
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius)
    }

}
