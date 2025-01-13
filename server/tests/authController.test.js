// Import các module cần thiết
const request = require('supertest'); // Thư viện dùng để gửi yêu cầu HTTP cho các bài kiểm tra
const app = require('../server'); // Đường dẫn tới file server.js (hoặc app.js)
const db = require('../config/database'); // Kết nối tới cơ sở dữ liệu
const User = require('../models/User'); // Đường dẫn tới model User
const { verifyPassword } = require('../utils/passwordUtils'); // Đường dẫn tới hàm verifyPassword
const jwt = require('jsonwebtoken'); // Thư viện JSON Web Token

jest.mock('../models/User'); // Mock model User
jest.mock('../utils/passwordUtils'); // Mock hàm verifyPassword

// Khối kiểm tra cho Auth Controller
describe('Auth Controller', () => {
    // Dọn dẹp database trước khi chạy các test
    beforeAll(async () => {
        // Tạo bảng users nếu nó chưa tồn tại
        await db.query(`
            CREATE TABLE IF NOT EXISTS users (
                user_id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(255) UNIQUE,
                email VARCHAR(255) UNIQUE,
                password VARCHAR(255),
                phone_number VARCHAR(255),
                profile_image VARCHAR(255),
                is_active TINYINT,
                is_verified TINYINT,
                verification_token VARCHAR(255),
                password_reset_token VARCHAR(255),
                password_reset_expires DATETIME,
                two_factor_enabled TINYINT,
                two_factor_secret VARCHAR(255),
                failed_login_attempts INT,
                lockout_until DATETIME,
                last_login_at DATETIME,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                ip_address VARCHAR(255),
                device_info VARCHAR(255)
            )
        `);
    });

    // Sau mỗi test, xóa tất cả người dùng trong database
    afterEach(async () => {
        await db.query('DELETE FROM users'); // Xóa mọi bản ghi trong bảng users
    });

    // Sau khi tất cả các test đã hoàn thành, xóa bảng users
    afterAll(async () => {
        await db.query('DROP TABLE IF EXISTS users'); // Xóa bảng users khỏi cơ sở dữ liệu nếu tồn tại
        await db.end(); // Đóng kết nối cơ sở dữ liệu
    });

    // Khối kiểm tra cho endpoint POST /api/auth/register
    describe('POST /api/auth/register', () => {
        // Test trường hợp đăng ký một người dùng mới
        it('should register a new user', async () => {
            const response = await request(app)
                .post('/api/auth/register')
                .send({
                    username: 'newuser',
                    email: 'newuser@example.com',
                    password: 'Truong123@',
                    confirmPassword: 'Truong123@',
                });
            expect(response.status).toBe(201);
            expect(response.body.user).toHaveProperty('id');
        });

        // Test trường hợp tên người dùng đã tồn tại
        it('should return an error if username already exists', async () => {
            // Đăng ký một người dùng mới
            await request(app)
                .post('/api/auth/register')
                .send({
                    username: 'existinguser',
                    email: 'existing@example.com',
                    password: 'Truong123@',
                    confirmPassword: 'Truong123@',
                });

            // Gửi yêu cầu đăng ký với tên người dùng đã tồn tại
            const response = await request(app)
                .post('/api/auth/register')
                .send({
                    username: 'existinguser',
                    email: 'newemail@example.com',
                    password: 'Truong123@',
                    confirmPassword: 'Truong123@',
                });
            expect(response.status).toBe(400);
            expect(response.body.message).toBe('Tên người dùng đã tồn tại.');
        });

        // Test trường hợp email người dùng đã tồn tại
        it('should return an error if email already exists', async () => {
            // Đăng ký một người dùng mới
            await request(app)
                .post('/api/auth/register')
                .send({
                    username: 'user',
                    email: 'existing@example.com',
                    password: 'Truong123@',
                    confirmPassword: 'Truong123@',
                });

            // Gửi yêu cầu đăng ký với email đã tồn tại
            const response = await request(app)
                .post('/api/auth/register')
                .send({
                    username: 'newuser', // Sử dụng tên người dùng khác
                    email: 'existing@example.com', // Email đã tồn tại
                    password: 'Truong123@',
                    confirmPassword: 'Truong123@',
                });
            expect(response.status).toBe(400);
            expect(response.body.message).toBe('Email đã tồn tại.');
        });

        // Test trường hợp mật khẩu và xác nhận mật khẩu không khớp
        it('should return an error if passwords do not match', async () => {
            const response = await request(app)
                .post('/api/auth/register')
                .send({
                    username: 'newuser', // Tên người dùng mới
                    email: 'newuser@example.com', // Email mới
                    password: 'Truong123@',
                    confirmPassword: 'differentpassword', // Xác nhận mật khẩu khác
                });

            expect(response.status).toBe(400);
            expect(response.body.message).toBe('Mật khẩu và xác nhận mật khẩu không khớp.');
        });

        // Test trường hợp mật khẩu không đủ mạnh khi không có ký tự viết hoa
        it('should return an error if password does not include upper case', async () => {
            const response = await request(app)
                .post('/api/auth/register')
                .send({
                    username: 'newuser',
                    email: 'newuser@example.com',
                    password: 'truong123@', // Mật khẩu không có ký tự viết hoa
                    confirmPassword: 'truong123@'
                });
            expect(response.status).toBe(400);
            expect(response.body.message).toBe('Mật khẩu phải chứa ít nhất 6 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.');
        });

        // Test trường hợp mật khẩu không đủ mạnh khi không có ký tự đặc biệt
        it('should return an error if password does not include special character', async () => {
            const response = await request(app)
                .post('/api/auth/register')
                .send({
                    username: 'newuser',
                    email: 'newuser@example.com',
                    password: 'Truong123', // Mật khẩu không có ký tự đặc biệt
                    confirmPassword: 'Truong123'
                });
            expect(response.status).toBe(400);
            expect(response.body.message).toBe('Mật khẩu phải chứa ít nhất 6 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.');
        });

        // Test trường hợp mật khẩu không đủ mạnh khi không có ký tự số
        it('should return an error if password does not include number character', async () => {
            const response = await request(app)
                .post('/api/auth/register')
                .send({
                    username: 'newuser',
                    email: 'newuser@example.com',
                    password: 'Truong@', // Mật khẩu không có ký tự số
                    confirmPassword: 'Truong@'
                });
            expect(response.status).toBe(400);
            expect(response.body.message).toBe('Mật khẩu phải chứa ít nhất 6 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.');
        });
    });

    //Khối kiểm tra cho endpoint POST /api/auth/login
    describe('POST /api/auth/login', () => {
        it('should login user successfully and return token', async () => {
            // Mock thông tin người dùng
            const userMock = {
                user_id: 1,
                username: 'testuser',
                email: 'testuser@example.com',
                password: 'hashedPassword', // Giả sử đây là mật khẩu đã được băm
            };

            User.findByEmail.mockResolvedValue(userMock); // Giả lập hàm tìm người dùng
            verifyPassword.mockResolvedValue(true); // Giả lập hàm xác thực mật khẩu

            const response = await request(app)
                .post('/api/auth/login')
                .send({
                    email: 'testuser@example.com',
                    password: 'correctPassword', // Mật khẩu đúng
                });

            expect(response.status).toBe(200); // Kiểm tra mã trạng thái trả về
            expect(response.body.message).toBe('Đăng nhập thành công.'); // Kiểm tra thông điệp
            expect(response.body).toHaveProperty('token'); // Kiểm tra có token trong response
            expect(response.body.user).toEqual({ // Kiểm tra thông tin người dùng trả về
                id: userMock.user_id,
                username: userMock.username,
                email: userMock.email,
            });
        });

        it('should return an error if user does not exist', async () => {
            User.findByEmail.mockResolvedValue(null); // Giả lập không tìm thấy người dùng

            const response = await request(app)
                .post('/api/auth/login')
                .send({
                    email: 'nonexistent@example.com',
                    password: 'somePassword',
                });

            expect(response.status).toBe(401); // Kiểm tra mã trạng thái trả về
            expect(response.body.message).toBe('Email hoặc mật khẩu không đúng.'); // Kiểm tra thông điệp lỗi
        });

        it('should return an error if password is invalid', async () => {
            const userMock = {
                user_id: 1,
                username: 'testuser',
                email: 'testuser@example.com',
                password: 'hashedPassword',
            };

            User.findByEmail.mockResolvedValue(userMock); // Giả lập tìm thấy người dùng
            verifyPassword.mockResolvedValue(false); // Giả lập mật khẩu không đúng

            const response = await request(app)
                .post('/api/auth/login')
                .send({
                    email: 'testuser@example.com',
                    password: 'wrongPassword', // Mật khẩu sai
                });

            expect(response.status).toBe(401); // Kiểm tra mã trạng thái trả về
            expect(response.body.message).toBe('Email hoặc mật khẩu không đúng.'); // Kiểm tra thông điệp lỗi
        });
    });

});
