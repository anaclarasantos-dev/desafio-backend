## 📌 Task Manager API

API REST desenvolvida em Node.js + Express para gerenciamento de tarefas com autenticação segura.

O sistema permite cadastro de usuários, login com JWT e controle de acesso por tipo de usuário (admin e comum). Cada usuário pode gerenciar apenas suas próprias tarefas, enquanto administradores possuem acesso global.

### 🔐 Recursos de segurança implementados

- Autenticação com JSON Web Token (JWT)
- Hash de senha com bcrypt
- Autorização baseada em papéis (admin/comum)
- Proteção de rotas
- Controle de acesso por proprietário da tarefa

### 📋 Funcionalidades

- Cadastro e login de usuários
- CRUD de tarefas
- Associação de tarefas ao usuário logado
- Listagem restrita por usuário
- Permissões especiais para administradores

### 🛠 Tecnologias utilizadas

- Node.js
- Express
- MySQL / MariaDB
- JSON Web Token (JWT)
- bcrypt
- Insomnia (testes de API)
