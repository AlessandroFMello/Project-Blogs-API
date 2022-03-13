const router = require('express').Router();
const categoryController = require('../controllers/categoryController');
const { tokenValidation, categoryValidation } = require('../middlewares');

const validationMiddlewares = [
  tokenValidation,
  categoryValidation,
];

router.post('/', validationMiddlewares, categoryController.create);

module.exports = router;