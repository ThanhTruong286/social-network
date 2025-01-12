const bcrypt = require('bcryptjs');

/**
 * Hàm mã hóa mật khẩu.
 * @param {string} password - Mật khẩu gốc của người dùng.
 * @returns {Promise<string>} - Trả về mật khẩu đã được mã hóa.
 */
const hashPassword = async (password) => {
    if (!password) {
        throw new Error('Password không được để trống.');
    }
    return await bcrypt.hash(password, 10);
};

/**
 * Hàm kiểm tra mật khẩu.
 * @param {string} password - Mật khẩu người dùng nhập.
 * @param {string} hashedPassword - Mật khẩu đã được mã hóa.
 * @returns {Promise<boolean>} - Trả về `true` nếu khớp, ngược lại `false`.
 */
const verifyPassword = async (password, hashedPassword) => {
    if (!password || !hashedPassword) {
        throw new Error('Password và hashedPassword không được để trống.');
    }
    return await bcrypt.compare(password, hashedPassword);
};

module.exports = {
    hashPassword,
    verifyPassword,
};
