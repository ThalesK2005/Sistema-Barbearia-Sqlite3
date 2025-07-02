# 💈 Sistema de Agendamento para Barbearia

Este projeto é um sistema completo de agendamentos com:

- Cadastro e gerenciamento de clientes, profissionais e serviços
- Agendamento de horários
- Painel de visualização com todos os dados cadastrados
- Interface simples em HTML + JavaScript
- API com Node.js e SQLite



## 🛠️ Como rodar o programa

### 1. Pré-requisitos

Você precisa ter instalado:

- [Node.js]
- [npm](vem junto com o Node)


### 2. Instalar dependências

Abra o terminal na pasta do projeto e rode:

npm install

### 3. Iniciar o Projeto

Cole esse comando no terminal:

node src/server.js

Você verá a mensagem:

"Banco de dados criado/carregado com sucesso!
Servidor rodando em http://localhost:3000"

Abra seu navegador e vá para:

http://localhost:3000/index.html

### 4. Usar o sistema

Você pode:

Cadastrar novos clientes, profissionais e serviços

Agendar horários

Visualizar tudo na aba Painel

Excluir registros com os botões 🗑️


🧠 Observações
O banco de dados (barbearia.sqlite3) é gerado automaticamente ao rodar o servidor.

Todo o SQL está embutido nos arquivos de rota (routes/) — sem uso de ORM.

Não é necessário criar as tabelas manualmente.


