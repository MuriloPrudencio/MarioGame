const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const reset = document.querySelector(".reset");

//função para pular recebendo um evento para pegar a telca Espaço..
const jump = (e) => {
  mario.classList.add("jump");

  //função para remover a classe Jump, para o mario voltar a pular
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 600);
};

//Criando função para verificar quando é game-over.
const loop = setInterval(() => {
  //pegando o deslocamento do pipe
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  //verificando a posição
  if (pipePosition <= 60 && pipePosition > 0 && marioPosition < 46) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${pipePosition}px`;

    mario.src = "./img/game-over.png";
    mario.style.width = "40px";
    mario.style.marginLeft = "15px";

    clouds.style.animation = "none";

    reset.style.display = "block";

    clearInterval(loop);
  }
}, 10);

const reiniciar = reset.addEventListener("click", () => {
  location.reload();
});

//Criando o evento para o Mario pular
document.addEventListener("keydown", jump);
