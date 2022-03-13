const router = require('express').Router();
const postController = require('../controllers/postController');
const { postValidation, tokenValidation } = require('../middlewares');

const validationMiddlewares = [postValidation, tokenValidation];

router.post('/', validationMiddlewares, postController.create);

// router.get('/', userController.getAll);

// router.get('/:id', userController.getById);

module.exports = router;