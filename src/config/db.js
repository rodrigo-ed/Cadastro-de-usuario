// src/config/db.js
const { sql } = require('@vercel/postgres');

// O pacote @vercel/postgres lê automaticamente as variáveis de ambiente
// (POSTGRES_URL, etc.) fornecidas pela Vercel. Nenhuma configuração manual é necessária.
// Para desenvolvimento local, você precisará criar um arquivo .env com as credenciais
// que a Vercel fornece no dashboard do seu banco de dados.

console.log('Configurado para usar Vercel Postgres.');

module.exports = { sql };