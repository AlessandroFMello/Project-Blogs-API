const { Category } = require('../models');

module.exports = {
  create: async ({ name }) => {
    const checkIfCategoryAlreadyExists = await Category.findOne({ where: { name } });

    if (checkIfCategoryAlreadyExists) {
      return { code: 409, message: 'Category already registered' };
    }

    const newCategory = await Category.create({ name });

    return { code: 201, category: newCategory };
  },
  getAll: async () => {
    const allCategories = await Category.findAll();

    return { code: 200, allCategories };
  },
};