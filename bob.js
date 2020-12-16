class Bob{

    constructor(x,y){

        var op={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.rectangle(x,y,80,80,op);
        this.width=80;
        this.height=80;
        World.add(world,this.body);
    }
   

    display(){
        var pos=this.body.position;
        push();
        fill("red");
        ellipse(pos.x,pos.y,this.width,this.height);
        pop();
        
    }
 

}