class Rope{
    constructor(bodyA,pointB){    
        var con={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length:8 
             
          }
          this.pointB=pointB;
          this.rope=Constraint.create(con);
          World.add(world,this.rope);  
    }

    display(){
     var pointA=this.rope.bodyA.position;
     var pointB=this.pointB;
     push();
     strokeWeight(5);
     stroke("red");
     line(pointA.x,pointA.y,pointB.x,pointB.y); 
     pop();  
    }
}