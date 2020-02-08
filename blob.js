class Blob{
    constructor(x1,y1, fam){
        this.pos= createVector(x1,y1);

        this.velocity = createVector(2,1);

        this.xoff = random(0,width*2);
        this.yoff = random(0,height*2);

       

        this.fam = fam;
    }
    draw(){
        push()
        stroke(255,100);
        if(this.fam == "red") fill(255,0,0,220);
        else if(this.fam == "green") fill(0,255,0,220);
        else if(this.fam == "blue") fill(0,0,255,220);
        circle(this.pos.x, this.pos.y, 15); 
        pop()
    }
    update(){

        this.pos.x = map(noise(this.xoff),0,1,0-50,width+50);
        this.pos.y = map(noise(this.yoff),0,1,0-50,height+50);

        if(this.fam == "red") {this.xoff += 0.005; this.yoff += 0.005}
        else if(this.fam == "green") {this.xoff += 0.003; this.yoff += 0.003}
        else if(this.fam == "blue"){ this.xoff += 0.001; this.yoff += 0.001}

        
        this.draw();
    }
}
