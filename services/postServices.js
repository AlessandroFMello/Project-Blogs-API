const { BlogPosts } = require('../models');
const { Category } = require('../models');
const { User } = require('../models');

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
  getAll: async () => {
    const allPosts = await BlogPosts.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    return { code: 200, allPosts };
  },
  getById: async (id) => {
    const post = await BlogPosts.findOne({
      where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
    ], 
  });

    if (!post) {
      return { code: 404, message: 'Post does not exist' };
    }

    return { code: 200, post };
  },
  update: async (id, title, content, userId) => {
    const postToUpdate = await BlogPosts.findOne({
      where: { id },
      include: [
        { model: Category, as: 'categories', through: { attributes: [] } },
      ], 
    });

    if (!postToUpdate) {
      return { code: 404, message: 'Post does not exist' };
    }

    if (postToUpdate.dataValues.userId !== userId) {
      return { code: 401, message: 'Unauthorized user' };
    }

    await postToUpdate.update({
      title, content,
    });

    return { code: 200, postToUpdate };
  },
};