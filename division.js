class Division {
    constructor(x, y, width) {
      var options = {
        isStatic : true
      }

      this.body = Bodies.rectangle(x, y, width, 300, options);
      this.width = width;
      this.height = 300;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      
    }
  }
  