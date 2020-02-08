class Blob{
    constructor(x1,y1){
        this.pos= createVector(x1,y1);

        this.velocity = createVector(2,1);
        this.xoff = random(0,width*2);
        this.yoff = random(0,height*2);
    }
    draw(){
        circle(this.pos.x, this.pos.y, 10); 
    }
    update(){

        this.pos.x = map(noise(this.xoff),0,1,0,width);
        this.pos.y = map(noise(this.yoff),0,1,0,height);

        this.xoff += 0.005;
        this.yoff += 0.005;

        
        this.draw();
    }
}
