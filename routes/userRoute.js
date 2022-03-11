const router = require('express').Router();
const userController = require('../controllers/userController');
const { userValidation, tokenValidation } = require('../middlewares');

router.post('/', userValidation, userController.create);

router.get('/', tokenValidation, userController.getAll);

module.exports = router;