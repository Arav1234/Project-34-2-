class Hero {
    constructor(x ,y, radius) {
        var options = {
            frictionAir:1.0,
            density:1.0
        }
        this.radius = radius
        this.body = Bodies.circle(x ,y ,radius, options)
        this.image = loadImage("My Hero-1.png")
        World.add(world,this.body)
    }
    display() {
        var pos = this.body.position
        push();
translate(pos.x,pos.y)
        ellipseMode(RADIUS)
        fill("cyan")
        image(this.image, 0, 0, this.radius, this.radius)
        pop();
    }
}