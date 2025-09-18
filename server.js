const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());             // opcional se front e back forem origins diferentes
app.use(express.json());     // para receber JSON no body
app.use(express.urlencoded({ extended: true })); // para forms urlencoded

// Servir arquivos estáticos (HTML/CSS/JS)
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
