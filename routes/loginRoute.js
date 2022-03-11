const router = require('express').Router();
const loginController = require('../controllers/loginController');
const { loginValidation } = require('../middlewares');

router.post('/', loginValidation, loginController.login);

module.exports = router;