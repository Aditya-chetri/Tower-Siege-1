class Hexagon{
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution:0.4,
            friction:0.5,
            density:1.2,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
        this.image = loadImage("sprites/hexagon.png");
    }
    display(){
        var pos =this.body.position;
        //fill("blue");
        //ellipseMode(CENTER);
        //ellipse(pos.x, pos.y, this.radius*2);
        image(this.image, pos.x, pos.y, this.radius*1.2, this.radius*1.2);
    }
};