export function pagamento() {
  // Seleciona todos os botões de pagamento
  const botoes = document.querySelectorAll(".btn-pagar");

  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      const title = botao.dataset.title;
      const price = parseFloat(botao.dataset.price);

      // Faz a requisição para criar a preferência
      fetch("https://emanuele-e-lucas.com.br/api/create-preference", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: [
            {
              title,
              quantity: 1,
              unit_price: price,
              currency_id: "BRL"
            }
          ]
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.init_point) {
            window.location.href = data.init_point; // redireciona pro checkout
          } else {
            alert("Erro ao criar pagamento!");
          }
        })
        .catch(err => {
          console.error("Erro na requisição:", err);
          alert("Erro ao processar pagamento!");
        });
    });
  });
}
