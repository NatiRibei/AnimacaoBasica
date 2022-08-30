var menino, botaoAndar, botaoCorrer;
var imagemAndar, imagemCorrer, animeAndar, animeCorrer;

function preLoad(){
    //imagemAndar = loadImage ("andar.png");
    //imagemCorrer = loadImage ("correr.png");
    //animeAndar = loadAnimation ("andar1.png", "andar2.png", "andar3.png", "andar4.png", "andar5.png");
    //animeCorrer = loadAnimation ("correr1.png", "correr2.png", "correr3.png", "correr4.png", "correr5.png", "correr6.png", "correr7.png");
}

function setup(){
    menino = createSprite(50, 280);
    menino.addAnimation('animeAndar',"andar1.png","andar5.png");
    menino.addAnimation('animeCorrer',"correr1.png","correr7.png");

    botaoAndar = createSprite(100, 100);
    botaoAndar.addAnimation("imagemAndar","andar.png");
    botaoAndar.scale = 0.3;
    
    botaoCorrer = createSprite(300, 100);
    botaoCorrer.addAnimation("imagemCorrer","correr.png");
    botaoCorrer.scale = 0.3;
}

function draw() {
  background("#ec5a30");
  menino.nextFrame();
  menino.x = menino.x + 5;
  World.frameRate = 5;
  drawSprites();
  if (menino.x > 400) {
    menino.x = 0;
  }
  fill("white");
  textSize(18);
  text("Clique na imagem para mudar a animação", 30, 20);
  if (mousePressedOver(botaoAndar)) {
    menino.changeAnimation("animeAndar");
  }
  if (mousePressedOver(botaoCorrer)) {
    menino.changeAnimation("animeCorrer");
  }
}
