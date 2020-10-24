class Box {
  constructor(x,y,width,height,color) {
    var options = {
        isStatic: false,
        
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    
    this.color=color;
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;

    push();
    
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    var pos =this.body.position;
    rectMode(CENTER);
    stroke("red");
    fill(this.color);
    rect(0,0, this.width, this.height);
    pop();
  }
};