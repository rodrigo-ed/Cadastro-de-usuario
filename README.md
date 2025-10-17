cadUsuario/
├── node_modules/         <-- Dependências do Node.js (gerenciadas pelo npm)
├── public/               <-- Nosso front-end (acessível publicamente)
│   ├── index.html
│   ├── script.js
│   └── validation.js
├── src/                  <-- Código-fonte do nosso servidor (back-end)
│   ├── config/
│   │   └── db.js         <-- Configuração da conexão com o banco de dados
│   ├── controllers/
│   │   └── userController.js <-- Lógica de negócio (cadastrar, listar, etc.)
│   └── routes/
│       └── userRoutes.js <-- Definição das rotas da API (ex: /cadastrar)
├── .gitignore            <-- Arquivo para ignorar pastas como node_modules
├── package.json          <-- Define o projeto e suas dependências
└── server.js             <-- Ponto de entrada do nosso servidor
