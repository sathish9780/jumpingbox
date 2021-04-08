var canvas;
var music;
var block1,block2,block3,block4;
var ball;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";
    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "red";
    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "green";
    block4 = createSprite(780,580,220,30);
    block4.shapeColor = "yellow";
    

    //create box sprite and give velocity
    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "brown";
    ball.velocityY=3;
    ball.velocityX=2;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);
    

    //add condition to check if box touching surface and make it box

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "red";
        music.stop();
    }
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "green";
       // music.play();
    }
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "yellow";
        music.play();
    }
drawSprites();
}
