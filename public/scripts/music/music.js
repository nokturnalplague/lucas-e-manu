export function music() {
  const musicas = [
    { nome: "Sailor Song", arquivo: "./music/sailor-song.mp3" },
    { nome: "Stargazing", arquivo: "./music/stargazing.mp3" },
    { nome: "Yellow", arquivo: "./music/yellow.mp3" },
  ];

  let indice = Math.floor(Math.random() * musicas.length);

  const audio = document.getElementById("audio");
  audio.volume = 0.7;

  const modal = document.getElementById("modal");
  const sim = document.getElementById("sim");
  const nao = document.getElementById("nao");

  const musicIcon = document.getElementById("musicIcon");

  const player = document.getElementById("player");
  const titulo = document.getElementById("tituloMusica");
  const prev = document.getElementById("prev");
  const play = document.getElementById("play");
  const pause = document.getElementById("pause");
  const next = document.getElementById("next");

  function atualizarTitulo() {
    titulo.textContent = musicas[indice].nome;
  }

  function carregarMusica() {
    audio.src = musicas[indice].arquivo;
    atualizarTitulo();
  }

  function tocarMusica() {
    audio.play();
    atualizarTitulo();
  }

  sim.addEventListener("click", () => {
    modal.style.display = "none";
    carregarMusica();
    tocarMusica();
  });

  nao.addEventListener("click", () => {
    modal.style.display = "none";
    carregarMusica();
  });

  play.addEventListener("click", () => audio.play());
  pause.addEventListener("click", () => audio.pause());
  next.addEventListener("click", () => trocarMusica(1));
  prev.addEventListener("click", () => trocarMusica(-1));

  function trocarMusica(direcao) {
    indice = (indice + direcao + musicas.length) % musicas.length;
    carregarMusica();
    tocarMusica();
  }

  musicIcon.addEventListener("click", () => {
    player.style.display = "flex";
  });

  document.addEventListener("click", (e) => {
    if (
      player.style.display === "flex" &&
      !player.contains(e.target) &&
      !musicIcon.contains(e.target)
    ) {
      player.style.display = "none";
    }
  });

  audio.addEventListener("ended", () => {
    trocarMusica(1);
  });
}
