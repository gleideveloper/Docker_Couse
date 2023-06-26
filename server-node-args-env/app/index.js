const http = require("http");

const servidor = http.createServer((req, res) => {
  res.end("<h1>Aplicacao em node rodando em docker </h1>");
});

const PORTA = process.env.PORTA;
servidor.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});
