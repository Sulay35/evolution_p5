class Blob{
    constructor(x1,y1, fam){
        this.pos= createVector(x1,y1);

        this.velocity = createVector(2,1);

        this.xoff = random(0,width*2);
        this.yoff = random(0,height*2);

        this.fam = fam;
        
        this.radius = 0;
 
        this.borning = true;
        this.borned = false;

        this.dying = false;
        this.dead = false;
    }
    draw(){
        push()
        stroke(255,100);
        if(this.fam == "red") fill(255,0,0,220);
        else if(this.fam == "green") fill(0,255,0,220);
        else if(this.fam == "blue") fill(0,0,255,220);
        else if (this.fam == undefined) fill(255,220)
        circle(this.pos.x, this.pos.y, this.radius); 
        pop()
    }
    update(){

        if(this.borning == true && this.borned == false){
            this.radius += 0.9;
            if(this.radius > 30){
                this.borned = true;
            }
        }
        if(this.dying == true && this.dead == false && this.borned == true){
            this.radius -= 0.5;
            if(this.radius < 0){
                this.dead = true;
            }
        }
        

        this.pos.x = map(noise(this.xoff),0,1,0-40,width+50);
        this.pos.y = map(noise(this.yoff),0,1,0-40,height+50);

        if(this.fam == "red") {this.xoff += 0.005; this.yoff += 0.005}
        else if(this.fam == "green") {this.xoff += 0.003; this.yoff += 0.003}
        else if(this.fam == "blue"){ this.xoff += 0.001; this.yoff += 0.001}

        
        this.draw();
    }
}
