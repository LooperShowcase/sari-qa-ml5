let player;
let bgImage;
let playerImage1;
let playerImage2;
let playerImage3;
let obstacleImage;
let obstacles = [];
let wordClassifier;

function preload() {
  bgImage = loadImage("background.jpg");
  playerImage1 = loadImage("Dino1.png");
  playerImage2 = loadImage("Dino2.png");
  playerImage3 = loadImage("Dino3.png");

  obstacleImage = loadImage("obstacle.png");
  let options = {
    probabilityThreshold: 0.85,
  };
  wordClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(800, 400);
  player = new Player();
  wordClassifier.classify(heardWord);
}

function heardWord(error, result) {}
function keyPressed() {
  if (key === " ") {
    player.jump();
    console.log("up");
  }
}

function draw() {
  if (random(1) < 0.005) {
    obstacles.push(new Obstacle());
  }
  background(bgImage);

  for (let obs of obstacles) {
    obs.show();
    obs.move();
    if (player.collieded(obs) === true) {
      console.log("GAME OVER!");
      noLoop();
    }
  }
  player.show();
  player.move();
  player.frameCounter++;
}
