class Snow {
  constructor(x, y, r) {
    var options = {
      restitution: 0.1,
      friction: 0.001
    }
   
    this.r = r;
    this.r=5
    this.image = loadImage("snow5.webp")
    this.body = Bodies.circle(x, y, this.r/2, options);
    World.add(world, this.body);
  }
  Position(){     
    if(this.rain.position.y > height){

        Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
    }
}

  display(){
      fill("blue")
      ellipseMode(CENTER);
      ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
  }

}

  