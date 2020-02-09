function createTest(){
    for(var i = 0; i < 100; i++){
        let x = random(0, width);
        let y = random(0, height);
        let fam = random(["red", "green", "blue"]);
        if(fam == "red") reds.push(new Blob(x, y, fam));
        if(fam == "blue") blues.push(new Blob(x, y, fam));
        if(fam == "green") greens.push(new Blob(x, y, fam));
        blobs.push(new Blob(x, y, fam));
        
    }
}

// arrays of data
let blobs = [];

let reds = [];
let blues = [];
let greens = [];

// variables d'évolution :

let popI = 10;

let red = {
    initPop:0,  // initial population
    Brate: 0, // spontaneous birth rate
    Drate: 0.5, // spontaneous death rate
    Rrate: 0, // spontaneous replication rate
    toGreen:0,
}

let blue = {
    initPop:0,  // initial population
    Brate: 0.6, // spontaneous birth rate
    Drate: 0.1, // spontaneous death rate
    Rrate: 0.1, // spontaneous replication rate
    toGreen:0.1, // spontaneous green transformation rate
    toRed:0.0,
}

let green = {
    initPop:0,  // initial population
    Brate: 0.0, // spontaneous birth rate
    Drate: 0.1, // spontaneous death rate
    Rrate: 0.40, // spontaneous replication rate
}

function newGen(){
    //------------------\
    // Reds generation  |
    //------------------/
    if(random(1) < red.Brate){
        let x = random(0, width);
        let y = random(0, height);
        let redBlob = new Red(x, y);
        reds.push(redBlob)
    }
    for(var i = 0; i < reds.length; i++){
        // Replication
        if(random(1) < red.Rrate){
            let x = reds[i].x;
            let y = reds[i].y;
            let redBlob = new Red(x,y);
            reds.push(redBlob);
        }
        // Dead
        if(random(1) <= red.Drate){
            reds[i].dying = true;
        }
        // dead
        if(reds[i].dead == true){
            reds.splice(i, 1)
        }
        // Green mutation:
        if(random(1) < red.toGreen){
            console.log('fds');
            let x = reds[i].x;
            let y = reds[i].y;
            let greenBlob = new Green(x,y)
            greens.push(greenBlob);
        }
        
    }
    
    //------------------\
    // Blues generation  |
    //------------------/
    // birth :
    if(random(1) < blue.Brate){
        let x = random(0, width);
        let y = random(0, height);
        let blueBlob = new Blue(x, y);
        blues.push(blueBlob)
    }
    for(var i = 0; i < blues.length; i++){
        // Replication
        if(random(1) < blue.Rrate){
            let x = blues[i].x;
            let y = blues[i].y;
            let blueBlob = new Blue(x,y);
            blues.push(blueBlob);
        }
        // Dead
        if(random(1) <= blue.Drate){
            blues[i].dying = true;
        }
        // dead
        if(blues[i].dead == true){
            blues.splice(i, 1)
        }
        // Green mutation:
        if(random(1) < blue.toGreen){
            let x = blues[i].x;
            let y = blues[i].y;
            let greenBlob = new Green(x,y)
            greens.push(greenBlob);
        }
        
    }
    //------------------\
    // Greens generation  |
    //------------------/
    // birth :
    if(random(1) < green.Brate){
        let x = random(0, width);
        let y = random(0, height);
        let greenBlob = new Green(x, y);
        greens.push(greenBlob)
    }
    for(var i = 0; i < greens.length; i++){
        // Replication
        if(random(1) < green.Rrate){
            let x = greens[i].x;
            let y = greens[i].y;
            let greenBlob = new Green(x,y);
            greens.push(greenBlob);
        }
        // Dead
        if(random(1) <= green.Drate){
            greens[i].dying = true;
        }
        // dead
        if(greens[i].dead == true){
            greens.splice(i, 1)
        }
    }
}


// Population initialisation
function initialize(population){
    for(let i = 0; i < population; i++){
        let x = random(0, width);
        let y = random(0, height); 
        reds.push(new Red(x,y))
    }
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    frameRate(60);
    initialize(popI);
    setInterval(newGen, 2000);
}
function draw() {
    // Settings 
    background(80);
    let fps = floor(frameRate());
    text(fps,10, 15);
    
    // Actualisation
    // reds 
    for(var r=0; r < reds.length; r++){
        reds[r].update();
    }
    // blues
    for(var b=0; b < blues.length; b++){
        blues[b].update();
    }
    // greens
    for(var g=0; g < greens.length; g++){
        greens[g].update();
    }
}