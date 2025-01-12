const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { hashPassword, verifyPassword } = require('../utils/passwordUtils');

const authService = {
    async register({ username, email, password, confirmPassword }) {
        // Kiểm tra mật khẩu xác nhận
        if (password !== confirmPassword) {
            const error = new Error('Mật khẩu và xác nhận mật khẩu không khớp.');
            error.status = 400;
            throw error;
        }

        // Kiểm tra username đã tồn tại
        const existingUsername = await User.findByUsername(username);
        if (existingUsername) {
            const error = new Error('Tên người dùng đã tồn tại.');
            error.status = 400;
            throw error;
        }

        // Kiểm tra email đã tồn tại
        const existingUser = await User.findByEmail(email);
        if (existingUser) {
            const error = new Error('Email đã tồn tại.');
            error.status = 400;
            throw error;
        }

        // Mã hóa mật khẩu
        const hashedPassword = await hashPassword(password);

        // Tạo đối tượng người dùng mới
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        // Lưu người dùng mới vào cơ sở dữ liệu
        const userId = await newUser.save();

        return {
            message: 'Người dùng được tạo thành công.',
            user: { id: userId, username, email },
        };
    },

    async login({ email, password }) {
        // Lấy thông tin người dùng theo email
        const user = await User.findByEmail(email);
        if (!user) {
            const error = new Error('Email hoặc mật khẩu không đúng.');
            error.status = 401;
            throw error;
        }

        // Kiểm tra mật khẩu
        const isPasswordValid = await verifyPassword(password, user.password);
        if (!isPasswordValid) {
            const error = new Error('Email hoặc mật khẩu không đúng.');
            error.status = 401;
            throw error;
        }

        // Tạo JWT token
        const token = jwt.sign(
            { id: user.user_id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return {
            message: 'Đăng nhập thành công.',
            token,
            user: { id: user.user_id, username: user.username, email: user.email },
        };
    },
};

module.exports = authService;
