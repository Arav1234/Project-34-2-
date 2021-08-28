class Box {
    constructor(x ,y) {
        var options = {
            restitution:0.8,
            friction:1.0,
            density:0.04
        }
        this.width = 70
        this.height = 70
        this.body = Bodies.rectangle(x ,y ,70, 70, options)
        World.add(world,this.body)
    }
    display() {
        var pos = this.body.position
        push();
translate(pos.x,pos.y)
        rectMode(CENTER)
        fill("cyan")
        rect(0, 0, this.width, this.height)
        pop();
    }
}