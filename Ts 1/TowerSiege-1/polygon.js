class Polygon{
    constructor(x, y) {
        var options = {
            'restitution':0.4,
            'friction':0,
            //'density':0,
            isStatic:false 
        }
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
          this.body.position.x = mouseX
          this.body.position.y = mouseY
          fill("blue")
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0,30, 40);
        pop();
      }
}