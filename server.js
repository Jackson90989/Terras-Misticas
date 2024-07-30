const express = require('express'); // Importa o módulo Express
const path = require('path'); // Importa o módulo Path para manipulação de caminhos
const app = express(); // Cria uma instância do aplicativo Express
const PORT = 3000; // Define a porta em que o servidor vai escutar

// Serve arquivos estáticos da pasta atual
app.use(express.static(__dirname));

// Define uma rota para a página inicial
app.get('/', (req, res) => {
  // Envia o arquivo 'index.html' localizado na pasta atual
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicia o servidor e escuta a porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});