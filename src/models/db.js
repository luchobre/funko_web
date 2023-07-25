// models/db.js

const { createPool } = require('mysql2/promise');

// Configura la conexión a la base de datos
const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

module.exports = pool;
