import { MercadoPagoConfig, Preference } from 'mercadopago';
import dotenv from 'dotenv';

dotenv.config();

// Cria o cliente Mercado Pago com o Access Token do .env
const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN,
});

// Função para criar preferência usando .then() e .catch()
export function criarPreferenceDireto(items) {
  const preference = new Preference(client);

  return preference.create({
    body: {
      items,
      back_urls: {
        success: `${process.env.FRONTEND_URL}/success.html`,
        failure: `${process.env.FRONTEND_URL}/failure.html`,
        pending: `${process.env.FRONTEND_URL}/pending.html`,
      },
    },
  })
  .then((result) => {
    console.log('Preferência criada com sucesso ✅');
    return result;
  })
  .catch((error) => {
    console.error('Erro ao criar preferência ❌', error);
    throw error;
  });
}

console.log('FRONTEND_URL =', process.env.FRONTEND_URL);

export default client;
