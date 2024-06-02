// Importa o aplicativo Express configurado do arquivo app.js
const app = require("./app");

// Define a porta para o servidor ouvir. Usa a variável de ambiente PORT, se disponível, ou 5000 como padrão
const port = process.env.PORT || 5000;

// Inicia o servidor para ouvir na porta especificada e registra uma mensagem no console quando o servidor estiver pronto
app.listen(port, () =>
  console.log(`Server listening on port ${port}`) // Mensagem exibida no console
);
