// Import các module cần thiết
const db = require('../config/database'); // Kết nối tới cơ sở dữ liệu
const User = require('../models/User'); // Mô hình người dùng

// Khối kiểm tra cho mô hình người dùng
describe('User Model', () => {
    // Dọn dẹp database trước khi chạy các test
    beforeAll(async () => {
        // Tạo bảng users nếu nó chưa tồn tại
        await db.query(`
        CREATE TABLE IF NOT EXISTS users (
            user_id INT AUTO_INCREMENT PRIMARY KEY, // ID người dùng tự động tăng
            username VARCHAR(255) UNIQUE, // Tên người dùng phải là duy nhất
            email VARCHAR(255) UNIQUE, // Email phải là duy nhất
            password VARCHAR(255), // Mật khẩu người dùng
            phone_number VARCHAR(255), // Số điện thoại (nếu cần)
            profile_image VARCHAR(255), // Hình ảnh đại diện (nếu cần)
            is_active TINYINT, // Trạng thái hoạt động (1 hoặc 0)
            is_verified TINYINT, // Trạng thái xác minh (1 hoặc 0)
            verification_token VARCHAR(255), // Token xác minh
            password_reset_token VARCHAR(255), // Token đặt lại mật khẩu
            password_reset_expires DATETIME, // Thời gian hết hạn đặt lại mật khẩu
            two_factor_enabled TINYINT, // Trạng thái xác thực hai yếu tố (1 hoặc 0)
            two_factor_secret VARCHAR(255), // Mã bí mật xác thực hai yếu tố
            failed_login_attempts INT, // Số lần đăng nhập thất bại
            lockout_until DATETIME, // Thời gian khóa tài khoản (nếu có)
            last_login_at DATETIME, // Thời gian đăng nhập lần cuối
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP, // Thời gian tạo bản ghi
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, // Thời gian cập nhật bản ghi
            ip_address VARCHAR(255), // Địa chỉ IP người dùng
            device_info VARCHAR(255) // Thông tin thiết bị
        )
        `);
    });

    // Sau mỗi test, xóa tất cả người dùng trong database
    afterEach(async () => {
        await db.query('DELETE FROM users'); // Xóa mọi bản ghi trong bảng users
    });

    // Sau khi tất cả các test đã hoàn thành, xóa bảng users
    afterAll(async () => {
        await db.query('DROP TABLE users'); // Xóa bảng users khỏi cơ sở dữ liệu
    });

    // Test trường hợp lưu người dùng mới
    it('should save a new user', async () => {
        // Tạo một đối tượng người dùng mới
        const user = new User({
            username: 'testuser',
            email: 'test@example.com',
            password: 'password123',
        });

        // Lưu người dùng vào cơ sở dữ liệu
        const userId = await user.save();
        expect(userId).toBeDefined(); // Kiểm tra xem ID của người dùng được định nghĩa
    });

    // Test trường hợp tìm người dùng theo tên người dùng
    it('should find a user by username', async () => {
        // Tạo và lưu người dùng
        const user = new User({
            username: 'testuser',
            email: 'test@example.com',
            password: 'password123',
        });

        await user.save(); // Lưu người dùng vào cơ sở dữ liệu

        // Tìm người dùng theo tên người dùng
        const foundUser = await User.findByUsername('testuser');
        expect(foundUser).toBeInstanceOf(User); // Kiểm tra xem đối tượng tìm thấy có phải là một instance của User không
        expect(foundUser.username).toBe('testuser'); // Kiểm tra tên người dùng
    });

    // Test trường hợp cập nhật thông tin người dùng
    it('should update a user', async () => {
        // Tạo và lưu người dùng
        const user = new User({
            username: 'testuser',
            email: 'test@example.com',
            password: 'password123',
        });

        const userId = await user.save(); // Lưu người dùng
        user.user_id = userId; // Gán ID cho đối tượng người dùng
        user.username = 'updateduser'; // Cập nhật tên người dùng

        // Cập nhật người dùng trong cơ sở dữ liệu
        const result = await user.update();
        expect(result).toBe(true); // Kiểm tra xem kết quả trả về có phải là true không

        // Tìm người dùng đã cập nhật
        const updatedUser = await User.findById(userId);
        expect(updatedUser.username).toBe('updateduser'); // Kiểm tra tên người dùng đã được cập nhật
    });

    // Test trường hợp xóa người dùng
    it('should delete a user', async () => {
        // Tạo và lưu người dùng
        const user = new User({
            username: 'testuser',
            email: 'test@example.com',
            password: 'password123',
        });

        const userId = await user.save(); // Lưu người dùng
        user.user_id = userId; // Gán ID cho đối tượng người dùng

        // Xóa người dùng
        const result = await user.delete();
        expect(result).toBe(true); // Kiểm tra xem kết quả trả về có phải là true không

        // Kiểm tra xem người dùng đã bị xóa chưa
        const deletedUser = await User.findById(userId);
        expect(deletedUser).toBeNull(); // Kiểm tra xem đối tượng người dùng là null
    });
});
