let pagina = 1;

let botoes = {};

function setup() {

  createCanvas(800, 600);

  textAlign(CENTER, CENTER);

  

  botoes.proxima = { x: width - 120, y: height - 60, w: 100, h: 40 };

  botoes.voltar = { x: 20, y: 20, w: 100, h: 40 };

}

function draw() {

  background(220);

  

  desenhaBotoes();

  desenhaConteudo();

}

function desenhaBotoes() {

  // Botão Voltar (não aparece na página 1)

  if (pagina > 1) {

    fill(180);

    rect(botoes.voltar.x, botoes.voltar.y, botoes.voltar.w, botoes.voltar.h, 10);

    fill(0);

    text("Voltar", botoes.voltar.x + botoes.voltar.w/2, botoes.voltar.y + botoes.voltar.h/2);

  }

  

  // Botão Próxima (não aparece na página 5)

  if (pagina < 5) {

    fill(180);

    rect(botoes.proxima.x, botoes.proxima.y, botoes.proxima.w, botoes.proxima.h, 10);

    fill(0);

    text("Próxima", botoes.proxima.x + botoes.proxima.w/2, botoes.proxima.y + botoes.proxima.h/2);

  }

}

function desenhaConteudo() {

  textSize(32);

  fill(0);

  

  if (pagina == 1) {

    text("Festejando a conexão Campo e Cidade", width/2, 60);

    textSize(24);

    text("Projeto Agrinho 2025", width/2, height/2);

    

  } else if (pagina == 2) {

    text("Campo", width/2, 60);

    textSize(24);

    text("A vida no campo é essencial para produção de alimentos.", width/2, height/2);

    

  } else if (pagina == 3) {

    text("Cidade", width/2, 60);

    textSize(24);

    text("A cidade é onde acontece a comercialização e consumo.", width/2, height/2);

    

  } else if (pagina == 4) {

    text("Quiz: O que conecta campo e cidade?", width/2, 60);

    textSize(20);

    text("A) Tecnologia\nB) Comércio\nC) Transporte\nD) Todas as alternativas", width/2, height/2);

    

  } else if (pagina == 5) {

    text("Sobre o Desenvolvedor", width/2, 60);

    textSize(24);

    text("Riquelme Timoteo dos Santos\n15 anos\nColégio Helena Proerf", width/2, height/2);

  }

}

function mousePressed() {

  // Botão Próxima

  if (mouseX > botoes.proxima.x && mouseX < botoes.proxima.x + botoes.proxima.w &&

      mouseY > botoes.proxima.y && mouseY < botoes.proxima.y + botoes.proxima.h) {

    if (pagina < 5) pagina++;

  }

  

  // Botão Voltar

  if (pagina > 1 &&

      mouseX > botoes.voltar.x && mouseX < botoes.voltar.x + botoes.voltar.w &&

      mouseY > botoes.voltar.y && mouseY < botoes.voltar.y + botoes.voltar.h) {

    pagina--;

  }

}