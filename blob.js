class Blob{
    constructor(x1,y1){
        this.pos= createVector(x1,y1);

        this.velocity = createVector(2,1);
        this.xoff = 0;
        this.yoff = 1000;
    }
    draw(){
        circle(this.pos.x, this.pos.y, 10); 
    }
    update(){
        console.log(this.pos.x);
        //this.pos.add(this.velocity);

        this.pos.x = map(noise(this.xoff),0,1,0,width);
        this.pos.y = map(noise(this.yoff),0,1,0,height);

        this.xoff += 0.005;
        this.yoff += 0.005;

        
        this.draw();
    }
}
