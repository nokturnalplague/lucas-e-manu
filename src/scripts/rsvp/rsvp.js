export function rsvp() {
  console.log('rsvp')
  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault()

    const nome = document.getElementById('nome').value
    const telefone = document.getElementById('telefone').value
    const email = document.getElementById('email').value
    const adultos = document.getElementById('adultos').value
    const observacoes = document.getElementById('observacoes').value

    const texto = [
      'Confirmação de Presença',
      `Nome: ${nome}`,
      `Telefone: ${telefone}`,
      `E-mail: ${email}`,
      `Quantidade de adultos: ${adultos}`,
      `Observações: ${observacoes || '—'}`
    ].join('\n')

    const numeroDestino = '5548984655802';
    const mensagemCodificada = encodeURIComponent(texto);

    const mobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);
    const link = mobile
      ? `https://wa.me/${numeroDestino}?text=${mensagemCodificada}`
      : `https://web.whatsapp.com/send?phone=${numeroDestino}&text=${mensagemCodificada}`;

    window.open(link, '_blank')
  })
}