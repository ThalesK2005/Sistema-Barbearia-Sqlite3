const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const db = new sqlite3.Database('./barbearia.sqlite3');


const schema = fs.readFileSync('./db/database.sql', 'utf-8');
db.exec(schema, (err) => {
  if (err) console.error("Erro ao criar o banco:", err.message);
  else console.log("Banco de dados criado/carregado com sucesso!");
});

module.exports = db;
