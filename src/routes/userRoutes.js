// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { cadastrarUsuario } = require('../controllers/userController');

// Rota POST para /api/users/cadastrar
router.post('/cadastrar', cadastrarUsuario);

module.exports = router;

