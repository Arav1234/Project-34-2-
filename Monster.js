class Monster {
    constructor(x ,y, radius) {
        var options = {
            //frictionAir:1.0,
            density:5.0
        }
        this.radius = radius
        this.body = Bodies.circle(x ,y ,radius, options)
        this.image = loadImage("Monster-02.png")
        World.add(world,this.body)
    }
    display() {
        var pos = this.body.position
        push();
translate(pos.x,pos.y)
        ellipseMode(RADIUS)
        fill("red")
        imageMode(CENTER)
        image(this.image, 0, 0, this.radius, this.radius)
        pop();
    }
}