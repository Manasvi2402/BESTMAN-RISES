class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
            
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 70;
        World.add(world, this.umbrella)
        //load Image for BestMan
        this.bestManImg = loadImage("bat/Bestman-01.png");
        this.visibility = 255;
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        if(frameCount >= 200){
            image(this.bestManImg,pos.x,pos.y+70,200,300);
            this.visibility = this.visiblity-5
            tint(255,this.visibility);
            image(this.image,pos.x,pos.y,300,300)
        }else{
        image(this.image,pos.x,pos.y+70,300,300);
        }
    }
}