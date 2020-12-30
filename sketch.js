const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var spiderman;
var bgImg;
var web;
var ground;
var buildingWall;

var gameState;

var score; 

var robber;

var hp;

var bhp;

var robberytm;

var battlescore;

var leftRun, rightRun, Stand, spoodermen, jumporight, jumpoleft, jumper, jumpel;

var facing;

var standState;
var standl; 

function preload(){

  bgImg = loadImage("city.jpg");

  rightRun = loadAnimation("SpidermanImg/Spiderman1Fini.png", "SpidermanImg/Spiderman2FiniDone.png", "SpidermanImg/Spiderman3Fini.png", "SpidermanImg/Spiderman4Fini.png", "SpidermanImg/Spiderman5FiniRightDone.png", "SpidermanImg/Spiderman6Fini.png");

  leftRun = loadAnimation("SpidermanImg/Spiderman1FiniRightDone.png", "SpidermanImg/Spiderman2FiniRightDone.png", "SpidermanImg/Spiderman3FiniRightDone.png", "SpidermanImg/Spiderman4FiniRightDone.png", "SpidermanImg/Spiderman5FiniDone.png", "SpidermanImg/Spiderman6FiniRightDone.png" );

  jumporight = loadAnimation("SpidermanImg/SpidermanJump1Fini.png");

  jumpoleft = loadAnimation("SpidermanImg/SpidermanJumpRightDone.png");
  
  jumper = loadAnimation("SpidermanImg/SpidermanJump2Done (2).png");

  jumpel = loadAnimation("SpidermanImg/SpidermanJumpRightDone.png");

  Stand = loadAnimation("Spider-man-Standing.png");

  standl = loadAnimation("SpidermanStandingLeft.png");

}
function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;

  spiderman = new Spiderman(displayWidth/2-500, displayHeight/2, 100, 100); 

  ground = new Ground(displayWidth/2, displayHeight, displayWidth, 20);


  spoodermen = createSprite(100, 100, 10, 10);
  spoodermen.addAnimation("g", Stand);
  spoodermen.addAnimation("a", leftRun);
  spoodermen.addAnimation("b", rightRun);
  spoodermen.addAnimation("c", jumporight);
  spoodermen.addAnimation("d", jumpoleft);
  spoodermen.addAnimation("e", jumper);
  spoodermen.addAnimation("f", jumpel);
  spoodermen.addAnimation("h", standl);
  

  facing = "right"; 


  //robber = new thug(500, 100, 150, 100);

  score = 0;
  
  bhp = 0;
  
  robberytm = 1000;

  battlescore = 0;
  gameState = "Web";
  
}

function draw() {
  background(bgImg);

  spoodermen.x = spiderman.body.position.x; 
  spoodermen.y = spiderman.body.position.y; 

  Engine.update(engine);
  //spiderman.display();
  ground.display();
  
  /*(keyCode === 32){
          
    web = new constraint(spiderman.body, {x: spiderman.body.position.x + 25, y: 75});
    web.display();
    
    
  }
*/

  /*if(keyDown("up") && facing === "left"){

    spoodermen.changeAnimation("c", jumporight);

  }
  else{
    spoodermen.changeAnimation("e", jumper);
  }
  /*if(keyWentUp("up") && facing === "left"){

    standState = "falleft";

  }

  if(standState === "falleft"){
    

  }
*/
  if(keyDown("up") && facing === "right"){

    

  }
  else{
    spoodermen.changeAnimation("f", jumpel);

  }
  /*if(keyWentUp("up") && facing === "right"){

    standState = "fallright";

  }
  if(standState === "fallright"){

    
  }*/
  if(keyDown("left")){
            
    

    
}


    
      
      
if(keyDown("right")){
          
  Matter.Body.setVelocity(spiderman.body, {x: 5, y:0});
  spoodermen.changeAnimation("b", leftRun);
  facing = "left";
  
}
else if(keyDown("left")){

  Matter.Body.setVelocity(spiderman.body, {x: -5, y:0});
  spoodermen.changeAnimation("a", leftRun);
  facing = "right";

}
else if(keyDown("up") && facing === "right"){

  spoodermen.changeAnimation("d", jumpoleft);

}

else if(keyDown("up") && facing === "left"){

  spoodermen.changeAnimation("c", jumporight);

}

else if(facing === "left"){

  spoodermen.changeAnimation("g", Stand);

}
else if(facing === "right"){

  spoodermen.changeAnimation("h", standl);

}



/*if(keyWentUp("right") && facing === "right"){

  standState = "runright";

}

if(standState === "runright"){
  
}
*/
if(keyDown("up")){
          
Matter.Body.setVelocity(spiderman.body, {x: 0, y:-10});

}
  
  
  if(gameState === "Web"){

    if(frameCount % 500 === 0){

      buildingWall = new building(displayWidth, displayHeight/2+250, 600, 800);
      
    }
    textSize(15);
    text("Swing over the buildings and get to the robbery site", displayWidth/2, 200);
    text(score, 100, 100);

    if(buildingWall !== undefined){
      buildingWall.display();
    }
    
    score = score + Math.round(getFrameRate()/60);

    
    if(score > 2500){
      
      gameState = "Battle"
      console.log("1");
    }
  }

  if(gameState === "Battle"){

    console.log("2");
    World.remove(world, buildingWall.body);

    textSize(15);
    text("Score:  " + battlescore, 100, 100);
    text("HP:  " + hp, 100, 150);
    text("Defeat as many Robbers as you can until time is up", displayWidth/2, 200);
    text("Click A to attack", 200, 50);

    text("Time Left:   " + robberytm, 100, 200);

    robberytm = robberytm - Math.round(getFrameRate()/60);

    if(keyWentDown("space")){

      robber = new thug(random(500, 1000), 100, 150, 100);
      battlescore = battlescore + 50;

      bhp = bhp + 100;
      hp = bhp;
      if(bhp > 1000){

        hp = Math.round(random(0, 1000));

      }

    }

    

    if(robber !== undefined){
      
      robber.display();
      var Mpos4 = robber.body.position;
      var Spos = spiderman.body.position;
    
    var distance = dist(Spos.x, Spos.y, Mpos4.x, Mpos4.y);
    
      
      if(distance <= robber.width + spiderman.width && keyWentDown("a")){
              
        hp = hp - 100;        
            
      }

      if(hp <= 0){

        console.log("3");
        robber.destroy();
        World.remove(world, robber.body);       
        

      }

    }

    if(robberytm <= 0 ){

        gameState = "End"

    }
    
  }

  if(gameState === "End"){

    if(score < 500){

      text("You did not stop the Robbery", displayWidth/2, 200);

    }

    else{

      text("Congratulations, You have stopped the robbery", displayWidth/2, 200);

    }

    

  }
    
  // robber.display();
  

  
  
  drawSprites();

  
}

function keyPressed(){
  
if(keyCode === 40){
            
  Matter.Body.setVelocity(spiderman.body, {x: 0, y:1});
  
}
/*if(keyCode === 74){
            
    spiderman.walk();
  
}

if(keyCode === 75){
            
  spiderman.wer();
  
}
*/

if(keyWentUp("r")){

  
  web.letgo();

}

}

function mouseDragged(){

  Matter.Body.setPosition(spiderman.body, {x: mouseX, y: mouseY});


}



/*function isTouching(object1, object2){



  if(object1.position.x - object2.position.x <= object1.width/2 + object2.width/2 &&
    object2.position.x - object1.position.x <= object2.width/2 + object1.width/2 &&
    object1.position.y - object2.position.y <= object1.height/2 + object2.height/2 && 
    object2.position.y - object1.position.y <= object2.height/2 +  object1.height/2){
    
    return true;

Il y a sept personnes dans ma famille. J'ai deux soeurs. je n'ai pas des freres. ma mere a un frere. mon pere a une soeur. Je suis plus age. Mes grandparents ont (idk even know anymore) petite-enfants


  }

  else{

    return false;

  }
}
*/