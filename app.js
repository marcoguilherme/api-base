var app = require('./config/server');

app.listen(process.env.PORT || 80, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 80}`);
});
