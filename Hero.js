class Hero{
constructor(x,y,r){

var options={
  density:1,
frictionAir:1
};

this.x=x;
this.y=y;
this.r=r
this.image=loadImage("Superhero-1.png")
this.body=Bodies.circle(this.x,this.y,(this.r)/2,options)

World.add(world,this.body)

}
display(){
    var heropos=this.body.position

    push ()
    translate(herorpos.x,heropos.y)
    rectMode(CENTER)
    strokeWeight(3)
    fill (225,0,225)
    ellipse(0,0,this.r,this.r)
    //imageMode(CENTER)
    //image(this.image,0,0,this.r,this.r)
    
    pop ()
}

}