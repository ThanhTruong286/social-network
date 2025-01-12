const authService = require('../services/authService.js');

const authController = {
    register: async (req, res) => {
        try {
            const result = await authService.register(req.body);
            res.status(201).json(result);
        } catch (error) {
            console.error('Lỗi đăng ký:', error.message);
            res.status(error.status || 500).json({ message: error.message });
        }
    },

    login: async (req, res) => {
        try {
            const result = await authService.login(req.body);
            res.status(200).json(result);
        } catch (error) {
            console.error('Lỗi đăng nhập:', error.message);
            res.status(error.status || 500).json({ message: error.message });
        }
    },
};

module.exports = authController;
