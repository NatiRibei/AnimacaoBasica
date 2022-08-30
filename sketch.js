var menino, botaoAndar, botaoCorrer;
var imagemAndar, imagemCorrer, animeAndar, animeCorrer;

function preLoad(){
    //imagemAndar = loadImage ("andar.png");
    //imagemCorrer = loadImage ("correr.png");
    //animeAndar = loadAnimation ("andar1.png", "andar2.png", "andar3.png", "andar4.png", "andar5.png");
    //animeCorrer = loadAnimation ("correr1.png", "correr2.png", "correr3.png", "correr4.png", "correr5.png", "correr6.png", "correr7.png");
}

function setup(){
  //cria o sprite do menino e define suas animações
  menino = createSprite(50, 280);
  menino.addAnimation('animeAndar',"andar1.png","andar5.png");
  menino.addAnimation('animeCorrer',"correr1.png","correr7.png");

  //cria o sprite  do botão Andar e define sua animação
  botaoAndar = createSprite(100, 100);
  botaoAndar.addAnimation("imagemAndar","andar.png");
  botaoAndar.scale = 0.3;
  
  //cria o sprite do botão Correr e define sua animação
  botaoCorrer = createSprite(300, 100);
  botaoCorrer.addAnimation("imagemCorrer","correr.png");
  botaoCorrer.scale = 0.3;
}

function draw() {
  //define cor do plano de fundo
  background("#ec5a30");
  //muda o quadro
  menino.nextFrame();
  //faz o sprite do menino se movimentar no eixo x
  menino.x = menino.x + 5;
  //define o número de quadros em 5
  World.frameRate = 5;
  //desenha os sprites na tela
  drawSprites();
  //verifica se a posição x do menino é maior que 400 para que ele apareça na tela novamente
  if (menino.x > 400) {
    menino.x = 0;
  }
  //texto explicativo
  fill("white");
  textSize(18);
  text("Clique na imagem para mudar a animação", 30, 20);
  //verifica se o botão Andar foi clicado, se sim, muda a animação
  if (mousePressedOver(botaoAndar)) {
    menino.changeAnimation("animeAndar");
  }
  //verifica se o botão correr foi clicado, se sim, muda a animação
  if (mousePressedOver(botaoCorrer)) {
    menino.changeAnimation("animeCorrer");
  }
}
