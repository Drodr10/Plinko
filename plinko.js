class Plinko{
    constructor(x, y){
        var options = {
            restitution: 1,
            friction: 1,
            density: 1,
            isStatic: true
          }
    
          this.body = Bodies.circle(x, y, 10, options);
          this.radius = 10;
          
          World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        fill("white");
        translate(pos.x,pos.y);
        rotate(angle);
        ellipse(0,0,this.radius*2, this.radius*2);
        pop();
    }
}