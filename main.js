noseX=0;
//Defina a posição do nariz para 0

function preload() {
  //Utilize o código 'loadImage' para carregar uma imagem
  clown_nose = ???('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
  //Utilize o código que cria um canva de 300 de largura e 300 de altura
  canvas = ???
  canvas.center();
  //Utilize o código 'createCapture(VIDEO);'para iniciar uma câmera de video na tela
  video = ???
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video);
  poseNet.on('pose', gotPoses);
}


function gotPoses(results)
{
  if(results.length > 0)
  {
  
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-15;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  //Adicione as variáveis que guarda o nariz e as posições
  image(clown_nose, noseX, noseY, 30, 30);
}

//Programe o seguinte...
//1. Crie uma função que se chama 'take_snapshot'
//2. Coloque o nome do código que salva uma imagem
//3. Coloque entre parênteses e aspas o nome que essa imagem terá
???