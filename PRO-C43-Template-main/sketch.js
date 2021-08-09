var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  
  

  function clues(){
    fill ("white");
    textSize ("15");
    text("R E V B A I L A",100,60);
    fill("lightblue");
    text("hint:Always changing , not constant!!",100,80);
    fill("white")
    textSize("15")
    text("C U T N I F O N",700,160);
    fill("lightblue");
    text("hint:Performs a perticular task !!",700,180);
    fill("white")
    textSize("15")
    text("A T A B S A E ",100,280);
    fill("lightblue");
    text("hint:Stores all informationn!!",100,300)

    }

  drawSprites()
}