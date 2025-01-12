const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { userValidator, validate } = require('../middlewares/userValidator');

router.post('/register', userValidator, validate, authController.register);
router.post('/login', authController.login);

module.exports = router;
