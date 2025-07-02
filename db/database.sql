CREATE TABLE IF NOT EXISTS Cliente (
  id_cliente INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  telefone TEXT
);

CREATE TABLE IF NOT EXISTS Profissional (
  id_profissional INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  especialidade TEXT
);

CREATE TABLE IF NOT EXISTS Servico (
  id_servico INTEGER PRIMARY KEY AUTOINCREMENT,
  nome_servico TEXT NOT NULL,
  preco REAL
);

CREATE TABLE IF NOT EXISTS Agendamento (
  id_agendamento INTEGER PRIMARY KEY AUTOINCREMENT,
  data_hora TEXT,
  id_cliente INTEGER,
  id_profissional INTEGER,
  id_servico INTEGER,
  FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente),
  FOREIGN KEY (id_profissional) REFERENCES Profissional(id_profissional),
  FOREIGN KEY (id_servico) REFERENCES Servico(id_servico)
);
