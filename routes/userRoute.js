const router = require('express').Router();
const userController = require('../controllers/userController');
const { userValidation } = require('../middlewares');

router.post('/', userValidation, userController.create);

module.exports = router;