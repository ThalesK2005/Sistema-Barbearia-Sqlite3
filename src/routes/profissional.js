const express = require('express');
const router = express.Router();
const db = require('../db');


router.post('/', (req, res) => {
  const { nome, especialidade } = req.body;
  db.run("INSERT INTO Profissional (nome, especialidade) VALUES (?, ?)", [nome, especialidade], function(err) {
    if (err) return res.status(500).send(err.message);
    res.status(201).json({ id: this.lastID });
  });
});


router.get('/', (req, res) => {
  db.all("SELECT * FROM Profissional", (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
});


router.put('/:id', (req, res) => {
  const { nome, especialidade } = req.body;
  db.run("UPDATE Profissional SET nome = ?, especialidade = ? WHERE id_profissional = ?", [nome, especialidade, req.params.id], function(err) {
    if (err) return res.status(500).send(err.message);
    res.json({ changes: this.changes });
  });
});

router.delete('/:id', (req, res) => {
  db.run("DELETE FROM Profissional WHERE id_profissional = ?", [req.params.id], function(err) {
    if (err) return res.status(500).send(err.message);
    res.json({ deleted: this.changes });
  });
});

module.exports = router;
