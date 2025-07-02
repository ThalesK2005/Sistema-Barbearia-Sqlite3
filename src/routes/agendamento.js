const express = require('express');
const router = express.Router();
const db = require('../db');


router.post('/', (req, res) => {
  const { data_hora, id_cliente, id_profissional, id_servico } = req.body;
  db.run("INSERT INTO Agendamento (data_hora, id_cliente, id_profissional, id_servico) VALUES (?, ?, ?, ?)",
    [data_hora, id_cliente, id_profissional, id_servico],
    function(err) {
      if (err) return res.status(500).send(err.message);
      res.status(201).json({ id: this.lastID });
    });
});


router.get('/', (req, res) => {
  db.all("SELECT * FROM Agendamento", (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
});


router.put('/:id', (req, res) => {
  const { data_hora, id_cliente, id_profissional, id_servico } = req.body;
  db.run("UPDATE Agendamento SET data_hora = ?, id_cliente = ?, id_profissional = ?, id_servico = ? WHERE id_agendamento = ?",
    [data_hora, id_cliente, id_profissional, id_servico, req.params.id],
    function(err) {
      if (err) return res.status(500).send(err.message);
      res.json({ changes: this.changes });
    });
});


router.delete('/:id', (req, res) => {
  db.run("DELETE FROM Agendamento WHERE id_agendamento = ?", [req.params.id], function(err) {
    if (err) return res.status(500).send(err.message);
    res.json({ deleted: this.changes });
  });
});

module.exports = router;
