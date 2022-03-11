const router = require('express').Router();
const loginController = require('../controllers/loginController');
const { loginValidation, emailPassValidation } = require('../middlewares');

const validation = [emailPassValidation, loginValidation];

router.post('/', validation, loginController.login);

module.exports = router;