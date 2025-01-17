const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
});

// Sử dụng Promise để thuận tiện với async/await
const db = pool.promise();

async function checkDatabaseConnection() {
    try {
        // Thực hiện truy vấn đơn giản để kiểm tra kết nối
        await db.query('SELECT 1');
        console.log('Kết nối tới cơ sở dữ liệu thành công!');
    } catch (error) {
        console.error('Không thể kết nối tới cơ sở dữ liệu:', error.message);
    }
}

checkDatabaseConnection();

// Xuất đối tượng db để sử dụng trong các tệp khác
module.exports = db;
