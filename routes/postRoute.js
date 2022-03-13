const router = require('express').Router();
const postController = require('../controllers/postController');
const { postValidation, tokenValidation, postUpdateValidation } = require('../middlewares');

const validationMiddlewares = [postValidation, tokenValidation];

router.post('/', validationMiddlewares, postController.create);

router.get('/', tokenValidation, postController.getAll);

router.get('/:id', tokenValidation, postController.getById);

router.put('/:id', [tokenValidation, postUpdateValidation], postController.update);

router.delete('/:id', tokenValidation, postController.delete);

module.exports = router;