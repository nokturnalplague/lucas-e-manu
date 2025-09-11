export function music() {
  const musicas = [
    { nome: "Sailor Song", arquivo: "./src/music/sailor-song.mp3" },
    { nome: "Stargazing", arquivo: "./src/music/stargazing.mp3" },
    { nome: "Yellow", arquivo: "./src/music/yellow.mp3" }
  ]

  let indice = Math.floor(Math.random() * musicas.length)
  
  const audio = document.getElementById('audio')

  const modal = document.getElementById('modal')
  const sim = document.getElementById('sim')
  const nao = document.getElementById('nao')

  function carregarMusica() {
    audio.src = musicas[indice].arquivo
  }

  function tocarMusica() {
    audio.play()
  }

  sim.addEventListener('click', () => {
      modal.style.display = 'none'
      carregarMusica()
      tocarMusica()
  })

  console.log(audio.src = musicas[indice].arquivo)
}