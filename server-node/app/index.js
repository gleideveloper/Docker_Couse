const http = require("http");

const servidor = http.createServer((req, res) => {
  res.end("<h1>Aplicacao em node rodando em docker </h1>");
});

servidor.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
