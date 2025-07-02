const express = require('express');
const router = express.Router();
const db = require('../db');


router.post('/', (req, res) => {
  const { nome_servico, preco } = req.body;
  db.run("INSERT INTO Servico (nome_servico, preco) VALUES (?, ?)", [nome_servico, preco], function(err) {
    if (err) return res.status(500).send(err.message);
    res.status(201).json({ id: this.lastID });
  });
});


router.get('/', (req, res) => {
  db.all("SELECT * FROM Servico", (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
});


router.put('/:id', (req, res) => {
  const { nome_servico, preco } = req.body;
  db.run("UPDATE Servico SET nome_servico = ?, preco = ? WHERE id_servico = ?", [nome_servico, preco, req.params.id], function(err) {
    if (err) return res.status(500).send(err.message);
    res.json({ changes: this.changes });
  });
});


router.delete('/:id', (req, res) => {
  db.run("DELETE FROM Servico WHERE id_servico = ?", [req.params.id], function(err) {
    if (err) return res.status(500).send(err.message);
    res.json({ deleted: this.changes });
  });
});

module.exports = router;
