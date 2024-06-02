// Importa o módulo express
const express = require('express');
// Importa o módulo cors
const cors = require('cors');
// Importa o controlador que contém a lógica para a rota /api/prompt
const promptController = require('./controllers/prompt-controller');

// Cria um novo aplicativo Express
const app = express();

// Aplica o middleware CORS
app.use(cors());

// Cria um novo router do Express
const router = express.Router();

// Define uma rota POST para o caminho /api/prompt
router.post('/api/prompt', promptController.sendText);

// Usa o router no aplicativo Express
app.use(router);

// Exporta o aplicativo Express para ser usado em outro arquivo, como o arquivo principal do servidor
module.exports = app;
