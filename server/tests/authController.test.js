// Import các module cần thiết
const request = require('supertest'); // Thư viện dùng để gửi yêu cầu HTTP cho các bài kiểm tra
const app = require('../server'); // Đường dẫn tới file server.js (hoặc app.js)
const db = require('../config/database'); // Kết nối tới cơ sở dữ liệu

// Khối kiểm tra cho Auth Controller
describe('Auth Controller', () => {
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

    // Khối kiểm tra cho endpoint POST /api/auth/register
    describe('POST /api/auth/register', () => {
        // Test trường hợp đăng ký một người dùng mới
        it('should register a new user', async () => {
            const response = await request(app) // Gửi yêu cầu POST đến endpoint
                .post('/api/auth/register')
                .send({
                    username: 'newuser', // Tên người dùng mới
                    email: 'newuser@example.com', // Email mới
                    password: 'password123', // Mật khẩu
                    confirmPassword: 'password123', // Xác nhận mật khẩu
                });
            expect(response.status).toBe(201); // Kiểm tra mã trạng thái trả về
            expect(response.body.user).toHaveProperty('id'); // Kiểm tra có id trong response.user
        });

        // Test trường hợp tên người dùng đã tồn tại
        it('should return an error if username already exists', async () => {
            // Đăng ký một người dùng mới
            await request(app)
                .post('/api/auth/register')
                .send({
                    username: 'existinguser', // Tên người dùng đã tồn tại
                    email: 'existing@example.com', // Email
                    password: 'password123', // Mật khẩu
                    confirmPassword: 'password123', // Xác nhận mật khẩu
                });

            // Gửi yêu cầu đăng ký với tên người dùng đã tồn tại
            const response = await request(app)
                .post('/api/auth/register')
                .send({
                    username: 'existinguser', // Tên người dùng đã tồn tại
                    email: 'newemail@example.com', // Email mới
                    password: 'password123', // Mật khẩu
                    confirmPassword: 'password123', // Xác nhận mật khẩu
                });
            expect(response.status).toBe(400); // Kiểm tra mã trạng thái trả về
            expect(response.body.message).toBe('Tên người dùng đã tồn tại.'); // Kiểm tra thông điệp lỗi
        });

        // Test trường hợp mật khẩu và xác nhận mật khẩu không khớp
        it('should return an error if passwords do not match', async () => {
            const response = await request(app)
                .post('/api/auth/register')
                .send({
                    username: 'newuser', // Tên người dùng mới
                    email: 'newuser@example.com', // Email mới
                    password: 'password123', // Mật khẩu
                    confirmPassword: 'differentpassword', // Xác nhận mật khẩu khác với mật khẩu
                });

            expect(response.status).toBe(400); // Kiểm tra mã trạng thái trả về
            expect(response.body.message).toBe('Mật khẩu và xác nhận mật khẩu không khớp.'); // Kiểm tra thông điệp lỗi
        });
    });
});
