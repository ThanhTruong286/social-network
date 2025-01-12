const db = require('../config/database'); // Kết nối tới database.js

class User {
    constructor(user) {
        // Sử dụng destructuring để khởi tạo các trường
        const {
            user_id = null,
            username = null,
            password = null,
            email = null,
            phone_number = null,
            profile_image = null,
            is_active = 1,
            is_verified = 0,
            verification_token = null,
            password_reset_token = null,
            password_reset_expires = null,
            two_factor_enabled = 0,
            two_factor_secret = null,
            failed_login_attempts = 0,
            lockout_until = null,
            last_login_at = null,
            created_at = null,
            updated_at = null,
            ip_address = null,
            device_info = null
        } = user;

        // Gán các giá trị cho instance
        Object.assign(this, {
            user_id,
            username,
            password,
            email,
            phone_number,
            profile_image,
            is_active,
            is_verified,
            verification_token,
            password_reset_token,
            password_reset_expires,
            two_factor_enabled,
            two_factor_secret,
            failed_login_attempts,
            lockout_until,
            last_login_at,
            created_at,
            updated_at,
            ip_address,
            device_info
        });
    }

    async save() {
        try {
            const query = `
                INSERT INTO users 
                (username, password, email, phone_number, profile_image, is_active, is_verified, verification_token, 
                password_reset_token, password_reset_expires, two_factor_enabled, two_factor_secret, 
                failed_login_attempts, lockout_until, last_login_at, created_at, updated_at, ip_address, device_info) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), ?, ?)
            `;
            const values = this.toValuesArray();
            const [result] = await db.query(query, values);
            this.user_id = result.insertId; // Gán ID mới sau khi tạo
            return this.user_id;
        } catch (error) {
            console.error('Error saving user:', error.message);
            throw new Error('Error saving user'); // Ném lỗi để controller xử lý
        }
    }

    toValuesArray() {
        return [
            this.username,
            this.password,
            this.email,
            this.phone_number,
            this.profile_image,
            this.is_active,
            this.is_verified,
            this.verification_token,
            this.password_reset_token,
            this.password_reset_expires,
            this.two_factor_enabled,
            this.two_factor_secret,
            this.failed_login_attempts,
            this.lockout_until,
            this.last_login_at,
            this.ip_address,
            this.device_info,
        ];
    }

    static async findById(userId) {
        try {
            const query = `SELECT * FROM users WHERE user_id = ?`;
            const [rows] = await db.query(query, [userId]);
            return rows[0] ? new User(rows[0]) : null;
        } catch (error) {
            console.error('Error finding user by ID:', error.message);
            throw new Error('Error finding user'); // Ném lỗi để controller xử lý
        }
    }

    static async findByUsername(username) {
        try {
            const query = `SELECT * FROM users WHERE username = ?`;
            const [rows] = await db.query(query, [username]);
            return rows[0] ? new User(rows[0]) : null;
        } catch (error) {
            console.error('Error finding user by username', error.message);
            throw new Error('Error finding user');
        }
    }

    static async findByEmail(email) {
        try {
            const query = `SELECT * FROM users WHERE email = ?`;
            const [rows] = await db.query(query, [email]);
            return rows[0] ? new User(rows[0]) : null;
        } catch (error) {
            console.error('Error finding user by email:', error.message);
            throw new Error('Error finding user'); // Ném lỗi để controller xử lý
        }
    }

    async update() {
        try {
            const query = `
                UPDATE users 
                SET username = ?, password = ?, email = ?, phone_number = ?, profile_image = ?, is_active = ?, 
                    is_verified = ?, verification_token = ?, password_reset_token = ?, password_reset_expires = ?, 
                    two_factor_enabled = ?, two_factor_secret = ?, failed_login_attempts = ?, lockout_until = ?, 
                    last_login_at = ?, updated_at = NOW(), ip_address = ?, device_info = ? 
                WHERE user_id = ?
            `;
            const values = [...this.toValuesArray(), this.user_id]; // Thêm user_id vào cuối
            const [result] = await db.query(query, values);
            return result.affectedRows > 0; // Trả về true nếu cập nhật thành công
        } catch (error) {
            console.error('Error updating user:', error.message);
            throw new Error('Error updating user'); // Ném lỗi để controller xử lý
        }
    }

    async delete() {
        try {
            const query = `DELETE FROM users WHERE user_id = ?`;
            const [result] = await db.query(query, [this.user_id]);
            return result.affectedRows > 0; // Trả về true nếu xóa thành công
        } catch (error) {
            console.error('Error deleting user:', error.message);
            throw new Error('Error deleting user'); // Ném lỗi để controller xử lý
        }
    }
}

module.exports = User;
