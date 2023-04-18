
var dragon1, dragon2;
var fireballGroup;
var edges;
var life1 = "green"
var life2 = "green"
var life3 = "green"
var life = 185

function preload(){
  dragon1Animation = loadAnimation("Dragon1.png")
  dragon2Animation = loadAnimation("Dragon2.png")
  ArenaImg = loadImage("Arena.jpg")
  Dragon1_idle = loadAnimation("Dragon1Idle.png")
  fireball1 = loadAnimation("Fireball.png")
  BackwardFireball = loadAnimation("BackwardFireball.png")
}


function setup(){
   createCanvas(1200,800)
   dragon1 = createSprite(200,600)
   dragon1.addAnimation("ABC1",Dragon1_idle)
   dragon1.addAnimation("ABC12",dragon1Animation)
   dragon1.scale = 2
   dragon2 = createSprite(1000,600)
   dragon2.addAnimation("ABC",dragon2Animation)
   dragon2.scale = 2
   dragon2.velocityY = -3
   playerHealth = createSprite(1000,100, 185, 30)
   playerHealth.shapeColor = "green"
   playerHealth2 = createSprite(200,100,185,30)
   playerHealth2.shapeColor = "green"
  
 
   fireball = createSprite(0,0,1,1)
   edges = createEdgeSprites()
   fireballGroup=createGroup()
   EfireballGroup=createGroup()
}

function draw(){
  background(ArenaImg)
  //fill(life1)
  // rect(200,150,70,30)
  // fill(life2)
  //rect(270,150,70,30)
  //fill(life3)
  //rect(340,150,70,30)
  if(keyDown(UP_ARROW)){
    dragon1.y = dragon1.y -10
  }

  if(keyDown(DOWN_ARROW)){
    dragon1.y = dragon1.y +10
  }

  if(keyWentDown("space")){
    dragon1.changeAnimation("ABC12",dragon1Animation)
    fireballs()
    Efireballs()
  }

  if(keyWentUp("space")){
    dragon1.changeAnimation("ABC1",Dragon1_idle)
    
  }

  if(EfireballGroup.isTouching(dragon1)){
    if(playerHealth2.width > 0){
      playerHealth2.width -= 185/8
      dragon1.x = 200
    dragon1.y = 600
    EfireballGroup[0].destroy()
    }
  }

  if(playerHealth2.width <= 0){
    EfireballGroup.destroyEach()
    fireballGroup.destroyEach()
    dragon1.velocityX = 0
    dragon1.velocityY = 0
    dragon2.velocityX = 0
    dragon2.velocityY = 0
    dragon1.destroy()
    playerHealth2.destroy()
    background(0)
    textSize(25)
    fill("red")
    text("Game over",500,400)
    
  }
  
  if(fireballGroup.isTouching(dragon2)){
    if(playerHealth.width > 0){
      playerHealth.width -= 185/8
      dragon2.x = 1000
    dragon2.y = 600
    fireballGroup[0].destroy()
    }
  }

  if(playerHealth.width <= 0){
    EfireballGroup.destroyEach()
    fireballGroup.destroyEach()
    dragon1.velocityX = 0
    dragon1.velocityY = 0
    dragon2.velocityX = 0
    dragon2.velocityY = 0
    dragon2.destroy()
    playerHealth.destroy()
    background(0)
    textSize(25)
    fill("Green")
    text("You Win!",500,400)
  }

 
  if(dragon1.x > 600){
    dragon1.x = 200
    dragon1.y = 600
  }

  if(keyDown(RIGHT_ARROW)){
    dragon1.x = dragon1.x +10
  }

  if(keyDown(LEFT_ARROW)){
    dragon1.x = dragon1.x - 10
  }
  
// if(fireballGroup.isTouching(dragon2)){
//   fireballGroup[0].destroy()
  
  
  
// }

// if(EfireballGroup.isTouching(dragon1)){
//   EfireballGroup[0].destroy()
// }


if(life <= 0){
  console.log("Game Over")
  background(0)
}

  drawSprites()
  

  dragon2.bounceOff(edges)


}

function fireballs(){
  if(frameCount % 1 === 0){
    fireball = createSprite(300,300)
    fireball.addAnimation("ABC3",fireball1)
    fireball.velocityX = +7
    fireball.y = dragon1.y
    fireball.scale = 0.5;
    fireball.debug = true;
    fireball.setCollider("rectangle", 0,0,200,300)
fireballGroup.add(fireball)
  }
  
}

function  Efireballs(){
  if(frameCount % 1 === 0){
    Efireball = createSprite(900,300)
    Efireball.addAnimation("ABC3",BackwardFireball)
    Efireball.velocityX = -7
    Efireball.y = dragon2.y
    Efireball.scale = 0.5;
    //fireball.debug = true;
    //fireball.setCollider("rectangle", 0,0,200,300)
EfireballGroup.add(Efireball)
  }
  
}


