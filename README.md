## 📌 Task Manager API

API REST desenvolvida em Node.js + Express para gerenciamento de tarefas com autenticação segura.

O sistema permite cadastro de usuários, login com JWT e controle de acesso por tipo de usuário (admin e comum). Cada usuário pode gerenciar apenas suas próprias tarefas, enquanto administradores possuem acesso global.

Video executando a API: https://www.linkedin.com/posts/anaclarasantos-dev_projeto-backend-api-de-task-manager-estou-activity-7429199527372546050-9qXi?utm_source=share&utm_medium=member_desktop&rcm=ACoAADHMlsIBIxdSPAHuh3E9SkBEPyIU2NRbo9U

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

### 📡 Endpoints principais
🔹 Usuários

- POST /register — cadastro
- POST /login — autenticação

🔹 Tarefas

- GET /tasks — listar tarefas
- POST /tasks — criar tarefa
- PUT /tasks/:id — atualizar
- DELETE /tasks/:id — excluir

### Como executar o projeto

1. Antes de iniciar, é necessário ter instalado:
    - Node.js
    - npm
    - XAMPP (ou MySQL/MariaDB)
    - Insomnia ou Postman (para testes da API)

2. Iniciar o banco de dados:
   - Abra o XAMPP
   - Inicie o serviço MySQL
   - Crie o banco de dados no MySQL/MariaDB
   - Execute os scripts SQL disponíveis na pasta /bd do projeto para criar as tabelas

3. Instalar as dependencias do projeto:
    - express
    - cors
    - mysql
    - jsonwebtoken (JWT)
    - bcrypt
    - dotenv

4. Executar o servidor:
    node index.js



