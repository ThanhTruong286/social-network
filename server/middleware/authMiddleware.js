const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Lấy token từ header
    if (!token) {
        return res.status(403).json({ message: 'Không có token, quyền truy cập bị từ chối.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token không hợp lệ.' });
        }
        req.user = user; // Lưu thông tin người dùng vào request
        next(); // Tiếp tục tới middleware hoặc route tiếp theo
    });
};

module.exports = authMiddleware;
