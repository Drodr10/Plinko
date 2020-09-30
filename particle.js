class Particle{
    constructor(x, y){
        var options = {
            restitution: 1,
            friction: 1,
            density: 1
          }
    
          this.body = Bodies.circle(x, y, 5, options);
          this.color = color(random(0,255),random(0,255),random(0,255));
          this.radius = 10;
          
          World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        fill(this.color);
        translate(pos.x,pos.y);
        rotate(angle);
        ellipse(0,0,this.radius, this.radius);
        pop();
    }
}