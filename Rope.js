class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX =  offsetX
        this.offsetY = offsetY

        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
           pointB:{x:this.offsetX, y:this.offsetY}

        }
    this.rope= Constraint.create(options);
    World.add(world,this.rope);
        
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        stroke("white")
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        
    }
}