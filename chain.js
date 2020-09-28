class Chain{
    constructor(Tanush,bodyB){
        var options={
            bodyA:Tanush,
            bodyB:bodyB,
            length:40,
            stiffness:0.04
        } 
        this.body=Constraint.create(options)
        World.add(world,this.body)
    }
    display(){
        strokeWeight(4);
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.body.bodyB.position.x,this.body.bodyB.position.y)
    }
}