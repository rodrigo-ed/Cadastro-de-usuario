// src/controllers/userController.js
const { sql } = require('../config/db');
const bcrypt = require('bcryptjs');

const cadastrarUsuario = async (req, res) => {
  try {
    // 1. Extrair e validar dados do corpo da requisição
    const { nome, sobrenome, email, senha, cep, rua, bairro, cidade, estado, numero, complemento } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({ success: false, message: 'Nome, email e senha são obrigatórios.' });
    }

    // 2. Criptografar a senha
    const salt = await bcrypt.genSalt(10);
    const senhaHash = await bcrypt.hash(senha, salt);

    // 3. Executar a query SQL usando template literals seguros do @vercel/postgres
    // Isso previne SQL Injection automaticamente.
    await sql`
      INSERT INTO usuarios (nome, sobrenome, email, senha_hash, cep, rua, bairro, cidade, estado, numero, complemento) 
      VALUES (${nome}, ${sobrenome}, ${email}, ${senhaHash}, ${cep}, ${rua}, ${bairro}, ${cidade}, ${estado}, ${numero}, ${complemento});
    `;

    // 4. Enviar resposta de sucesso
    res.status(201).json({ success: true, message: 'Cadastro realizado com sucesso!' });

  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    // Trata erro de email duplicado (ER_DUP_ENTRY)
    if (error.code === '23505') { // Código de erro do PostgreSQL para violação de unicidade
      return res.status(409).json({ success: false, message: 'Este e-mail já está cadastrado.' });
    }
    // Erro genérico do servidor
    res.status(500).json({ success: false, message: 'Erro no servidor ao tentar cadastrar.' });
  }
};

module.exports = {
  cadastrarUsuario,
};
