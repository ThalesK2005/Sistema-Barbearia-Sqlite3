const express = require('express');
const router = express.Router();
const db = require('../db');


router.post('/', (req, res) => {
  const { nome, telefone } = req.body;
  db.run("INSERT INTO Cliente (nome, telefone) VALUES (?, ?)", [nome, telefone], function(err) {
    if (err) return res.status(500).send(err.message);
    res.status(201).json({ id: this.lastID });
  });
});


router.get('/', (req, res) => {
  db.all("SELECT * FROM Cliente", (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
});


router.put('/:id', (req, res) => {
  const { nome, telefone } = req.body;
  db.run("UPDATE Cliente SET nome = ?, telefone = ? WHERE id_cliente = ?", [nome, telefone, req.params.id], function(err) {
    if (err) return res.status(500).send(err.message);
    res.json({ changes: this.changes });
  });
});


router.delete('/:id', (req, res) => {
  db.run("DELETE FROM Cliente WHERE id_cliente = ?", [req.params.id], function(err) {
    if (err) return res.status(500).send(err.message);
    res.json({ deleted: this.changes });
  });
});

module.exports = router;
