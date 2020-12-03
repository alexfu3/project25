class Paper{

    constructor(x,y,radius){
       
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
       
        this.body = Bodies.circle(x,y,radius,options)
        this.width = width;
        this.height = height-21;
        this.radius = radius;
        this.image = loadImage("paper.png")
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        //circle(pos.x,pos.y+10,this.radius)
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+37,100,100);
    }
    
}