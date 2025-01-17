const { body, validationResult } = require('express-validator');

const userValidator = [
    body('username')
        .notEmpty().withMessage('Tên người dùng không được để trống.')
        .isLength({ min: 3 }).withMessage('Tên người dùng phải có ít nhất 3 ký tự.'),
    body('email')
        .isEmail().withMessage('Email không hợp lệ.')
        .normalizeEmail(),
    body('password')
        .notEmpty().withMessage('Mật khẩu không được để trống.')
        .isLength({ min: 6 }).withMessage('Mật khẩu phải có ít nhất 6 ký tự.'),
];

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => ({
            msg: error.msg,
            param: error.param
        }));
        return res.status(400).json({ errors: errorMessages });
    }
    next();
};

module.exports = { userValidator, validate };
