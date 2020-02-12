// arrays of data
let blobs = [];
let reds = [];
let blues = [];
let greens = [];

let generations = 0;

// variables d'évolution :
let popI = 20;

let red = {
    initPop:0,  // initial population
    Brate: 0.3, // spontaneous birth rate
    Drate: 0.3, // spontaneous death rate
    Rrate: 0.1, // spontaneous replication rate
    toGreen:0.01,
}

let blue = {
    initPop:0,  // initial population
    Brate: 0.05, // spontaneous birth rate
    Drate: 0.02, // spontaneous death rate
    Rrate: 0.0, // spontaneous replication rate
    toGreen:0.20, // spontaneous green transformation rate
    toRed:0.0,
}

let green = {
    initPop:0,  // initial population
    Brate: 0.0, // spontaneous birth rate
    Drate: 0.5, // spontaneous death rate
    Rrate: 0.1, // spontaneous replication rate
}

function newGen(){
    // Population total
    blobs = reds.concat(blue, greens);

    // buffer :
    // keep a fork of X axis of 50 if generation is greater than 50
    if(myChart.data.labels.length > 50){
        myChart.options.scales.xAxes[0].ticks.min = generations - 50;
        myChart.options.scales.xAxes[0].ticks.max = generations + 1;
    }
    
    //add to the x axis the number of generation
    myChart.data.labels.push(generations);
    
    // Reds 
    myChart.data.datasets[0].data.push(reds.length);

    // Greens
    myChart.data.datasets[1].data.push(greens.length);
    
    // Blues 
    myChart.data.datasets[2].data.push(blues.length);
    
    myChart.update();

    // Blobs total :
    myChart.data.datasets[3].data.push(blobs.length);
    myChart.update();
    
    // count of the generations
    generations++;

    
    //------------------\
    // Reds generation  |
    //------------------/
    if(random(1) < red.Brate){
        let x = random(0, width);
        let y = random(0, height);
        let redBlob = new Blob(x, y, "red");
        reds.push(redBlob)
    }
    for(var i = 0; i < reds.length; i++){
        // Replication
        if(random(1) < red.Rrate){
            let x = reds[i].x;
            let y = reds[i].y;
            let redBlob = new Blob(x,y, "red");
            redBlob.xoff = random(reds[i].xoff, reds[i].xoff +1);
            redBlob.yoff = random(reds[i].yoff, reds[i].xoff +1);
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
            let x = reds[i].x;
            let y = reds[i].y;
            let greenBlob = new Blob(x, y, "green");
            greenBlob.xoff = random(reds[i].xoff, reds[i].xoff +1);
            greenBlob.yoff = random(reds[i].yoff, reds[i].xoff +1);
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
        let blueBlob = new Blob(x, y, "blue");
        blues.push(blueBlob)
    }
    for(var i = 0; i < blues.length; i++){
        // Replication
        if(random(1) < blue.Rrate){
            let x = blues[i].x;
            let y = blues[i].y;
            let blueBlob = new Blob(x, y, "blue");
            blueBlob.xoff = random(blues[i].xoff, blues[i].xoff +1);
            blueBlob.yoff = random(blues[i].yoff, blues[i].xoff +1);
            blues.push(blueBlob);
        }
        if(random(1) < blue.toGreen){
            let x = blues[i].x;
            let y = blues[i].y;
            let greenBlob = new Blob(x,y, "green");
            greenBlob.xoff = random(blues[i].xoff, blues[i].xoff +1);
            greenBlob.yoff = random(blues[i].yoff, blues[i].xoff +1);
            greens.push(greenBlob);
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
        
        
    }
    //------------------\
    // Greens generation  |
    //------------------/
    // birth :
    if(random(1) < green.Brate){
        let x = random(0, width);
        let y = random(0, height);
        let greenBlob = new Blob(x,y, "green");
        greens.push(greenBlob)
    }
    for(var i = 0; i < greens.length; i++){
        // Replication
        if(random(1) < green.Rrate){
            let x = greens[i].x;
            let y = greens[i].y;
            let greenBlob = new Blob(x,y, "green");
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
        reds.push(new Blob(x,y, "red"))
    }
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    createCanvas(500,500);
    frameRate(60);
    initialize(popI);
    setInterval(newGen, 500);
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

function mouseClicked(){
    blues.push(new Blob(mouseX, mouseY, random(["blue", "red", "green"])))
}