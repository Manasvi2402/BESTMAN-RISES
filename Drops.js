class Drops{
    constructor(x,y,radius){
        var options = {
           //isStatic:false,
             fricton:0.1,
             restitution:0.5
        }
        this.radius = radius;
        this.rain = Bodies.circle(x,y,radius,options);
        World.add(world,this.rain);
    }
    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }
    }
    display() {
        var pos = this.rain.position;
     
       fill("blue");
       ellipseMode(CENTER)
       ellipse(pos.x,pos.y,this.radius);
    }
}