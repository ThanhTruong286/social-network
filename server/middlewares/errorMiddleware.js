function errorMiddleware(err, req, res, next) {
    console.error('Error:', err.message); // Log lỗi chi tiết
    res.status(err.status || 500).json({
        message: err.message || 'Lỗi server.',
    });
}

module.exports = errorMiddleware;
