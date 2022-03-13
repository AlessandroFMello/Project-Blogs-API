const { BlogPosts } = require('../models');
const { Category } = require('../models');

module.exports = {
  create: async (title, content, categoryIds, userId) => {
    const allCategories = await Category.findAll();

    const allCategoriesIds = allCategories.map(({ id }) => id);

    if (!categoryIds.every((category) => allCategoriesIds.includes(category))) {
      return { code: 400, message: '"categoryIds" not found' };
    }

    const newPost = await BlogPosts.create({ title, content, categoryIds, userId });
  
    return { code: 201, post: newPost };
  },
};