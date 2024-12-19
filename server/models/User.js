const db = require('../config/database'); // Kết nối cơ sở dữ liệu

const User = {
    findByEmail: async (email) => {
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0]; // Trả về người dùng
    },

    create: async (name, email, password) => {
        const [result] = await db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
        return result.insertId; // Trả về ID của người dùng mới
    },
};

module.exports = User;
