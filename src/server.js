const express = require('express');
const app = express();
require('./db'); 
app.use(express.json());


app.use('/clientes', require('./routes/cliente'));
app.use('/profissionais', require('./routes/profissional'));
app.use('/servicos', require('./routes/servico'));
app.use('/agendamentos', require('./routes/agendamento'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
const path = require('path');
app.use(express.static(path.join(__dirname, '../public')));
