var canvas;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var form, player, game;
function preload(){
  boyImg = loadImage("boy.png");
  girlImg = loadImage("girl.png");
  keyImg = loadImage("key.png");
  monster1Img = loadImage("monster1.png");
  Monster2Img = loadImage("monster2.png");
}
function setup() {
  createCanvas(1200,600);


  
}

function draw() {
  background("white");  
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  drawSprites();
}