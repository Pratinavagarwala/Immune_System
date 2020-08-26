var canvas;
var w = window.innerWidth;
var h = window.innerHeight;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var advisory,login1,newUser,userData;


function setup(){
  canvas = createCanvas(w,h);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function preload(){
  immunity=loadImage("images/immunity_1300.png");
}


function draw(){
  //background(immunity);
 
  
}

window.onresize = function() {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;  
  canvas.size(w,h);
}
