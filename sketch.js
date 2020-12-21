var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var position;
var database;
var form, player, game;

var distance, distance2 

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;
var leftEdge, rightEdge, downEdge

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  car1 = createSprite(200,200);
    car1.addImage("car1",car1_img);
    car2 = createSprite(400,200);
    car2.addImage("car2",car2_img);
    //car3 = createSprite(600,200);
    //car3.addImage("car3",car3_img);
    //car4 = createSprite(800,200);
    //car4.addImage("car4",car4_img);
  car1.x = 200;
    car2.x = 400;
    //car3.x = 600;
    //car4.x = 800;
  
}


function draw(){
  
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

  
}
