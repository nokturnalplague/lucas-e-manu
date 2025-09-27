import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { criarPreferenceDireto } from './services/mercadopago.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors({
  origin: process.env.FRONTEND_URL
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// Rota para criar preferência de pagamento
app.post('/api/create-preference', (req, res) => {
  const { items } = req.body;

  // Se não vierem items do front, usa um exemplo fixo
  const lista = items || [
    {
      title: 'Meu produto',
      quantity: 1,
      unit_price: 200,
      currency_id: 'BRL',
    },
  ];

  criarPreferenceDireto(lista)
    .then((preference) => res.json(preference))
    .catch(() =>
      res.status(500).json({ error: 'Erro ao criar preferência' })
    );
});

app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
