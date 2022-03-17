var score =0;
var sp_ship, en_ship, en_ship2, en_ship3, en_ship4, en_ship5, bg, bullet, bg2

var enemy;

var sp_1, sp_2, meteor, enemy_img, crystal, bulletImg, bg2_img, en_img, en2_img, en3_img, en4_img, en5_img

var enemySpaceGroup, meteorGroup, bulletGroup


var life =3;
var score=0;
var gameState=1

function preload(){

 en_img = loadImage("spaceShip1.png")
 en3_img = loadImage("spaceShip3.png")
 en4_img = loadImage("spaceShip4.png")
 bg2_img = loadImage("bg2.jpeg")
 sp_1 = loadImage("L6.png")
 sp_2 = loadImage("L7.png")
 meteor = loadImage("L4.png")
 enemy_img = loadImage("spaceShip2.png")
 crystal = loadImage("L1.png")
 bulletImg = loadImage("L2.png")
}
function setup() {
  createCanvas(800, 800);

  
  sp_ship= createSprite(100, height/2, 50,50);
  sp_ship.addImage(sp_1)
  sp_ship.scale=0.2
  
  enemySpaceGroup = new Group();     
  meteorGroup = new Group();   
  bulletGroup = new Group();
  
  heading= createElement("h1");
  scoreboard= createElement("h1");
}

function draw() {
  background(bg2_img);
  
  heading.html("Life: "+life)
  heading.style('color:red'); 
  heading.position(150,20)

  scoreboard.html("Score: "+score)
  scoreboard.style('color:red'); 
  scoreboard.position(width-200,20)

 // if(gameState===1){
    sp_ship.y=mouseY  

    //if (frameCount % 80 === 0) {
    //  drawenemySpaceShip();
   // }

   // if (frameCount % 100 === 0) {
   //   drawrenemySpaceShip2();
   //  }

    if(keyDown("space")){
      shootBullet();
    }

    spawnEnemyShips();
    //if (blueBubbleGroup.collide(sp_ship)){
    //  handleGameover(enemySpaceGroup);
    //}
    
    //if (redBubbleGroup.collide(sp_ship2)) {
    //  handleGameover(enemySpaceGroup);
   // }
    
    /*if(blueBubbleGroup.(bulletGroup)){
      handleBubbleCollision(blueBubbleGroup);
    }*/

   // if(enemySpaceGroup.collide(bulletGroup)){
     // handleCollision();
   //  score = score+1
   //  enemySpaceGroup.destroyEach()
  //  bulletGroup.destroyEach()
  //  }
    
    /*if(blueBubbleGroup.collide()){
      handleBubbleCollision(blueBubbleGroup);
    }*/
    
   // if(blueBubbleGroup.collide(bulletGroup)){
    //  handleBubbleCollision(blueBubbleGroup);
   // }

   // if(redBubbleGroup.collide(bulletGroup)){
   //   handleBubbleCollision(redBubbleGroup);
  //  }

 // for (var i = 0; i < enemySpaceGroup.length; i++) {
  //  if (enemySpaceGroup.get(i).isTouching(bullet)) {
  //      enemySpaceGroup.get(i).destroy();
  //      score =score+1;
  //  }
 // }


    drawSprites();
 // }
    
  
}

//function drawenemySpaceShip(){
  //en_ship = createSprite(800,random(20,780),40,40);
  //en_ship.addImage(sp_2);
 // en_ship.scale = 0.2;
 // en_ship.velocityX = -8;
 // en_ship.lifetime = 400;
 // enemySpaceGroup.add(en_ship);
//}
//function drawrenemySpaceShip2(){
 // en_ship2 = createSprite(800,random(20,780),40,40);
 // en_ship2.addImage(enemy);
//  en_ship2.scale = 0.2;
// en_ship2.velocityX = -8;
//  en_ship2.lifetime = 400;
// enemySpaceGroup2.add(en_ship2);
//}

function shootBullet(){
  bullet= createSprite(150, width/2, 50,20)
  bullet.y= sp_ship.y-20
  bullet.addImage(bulletImg)
  bullet.scale=0.12
  bullet.velocityX= 7
  bulletGroup.add(bullet)
}

function handleCollision(bulletGroup){
    if (life > 0) {
       score=score+1;
    }

   //  blast= createSprite(bullet.x+60, bullet.y, 50,50);
    //blast.addImage(blastImg) 

    /* blast= sprite(bullet.x+60, bullet.y, 50,50);
    blast.addImage(blastImg) */

    /* blast= createSprite(bullet.x+60, bullet.y, 50,50);
    blast.add(blastImg) */

    /* blast= createSprite(bullet.x+60, bullet.y, 50,50);
    image(blastImg) */
    
  //  blast.scale=0.3
  //  blast.life=20
    bulletGroup.destroyEach()
    enemySpaceGroup.destroyEach()
  }
//}

 function spawnEnemyShips(){
   if(frameCount % 60 === 0){
     var y= Math.round(random(30,750))
     var enemy = createSprite(700,y,10,40)
     
     enemy.velocity.x = -10;

     var rand = Math.round(random(1,5))
     console.log(rand)
     switch(rand) {
        case 1: enemy.addImage(en_img)
                break;
        case 2: enemy.addImage(en3_img)
                break;
        case 3: enemy.addImage(en4_img)
                break;
        case 4: enemy.addImage(en2_img)
                break;
        case 5: enemy.addImage(enemy_img)
                break;
        default: break;  
       
     }
    
     enemy.scale = 0.2;
     enemy.lifetime = 800;
     enemySpaceGroup.add(enemy);

   }
 }


 //(function handleGameover(bubbleGroup){
  
  //  life=life-1;
  //  bubbleGroup.destroyEach();
    

 //   if (life === 0) {
  //    gameState=2
      
  //    swal({
  //      title: `Game Over`,
  //      text: "Oops you lost the game....!!!",
   //     text: "Your Score is " + score,
    //    imageUrl:
    //      "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
   //     imageSize: "100x100",
   //     confirmButtonText: "Thanks For Playing"
  //    });
  //  }
//}