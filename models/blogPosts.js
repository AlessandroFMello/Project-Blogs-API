const { DataTypes } = require('sequelize'); 

const atributes = {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  userId: { type: DataTypes.INTEGER, foreignKey: true },
  published: DataTypes.DATE,
  updated: DataTypes.DATE,
};

module.exports = (sequelize, _DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', atributes,
  {
    createdAt: 'published',
    updatedAt: 'updated',
    timestamps: true,
  });

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user',
    });

    BlogPosts.belongsToMany(models.Category, {
      foreignKey: 'postId',
      through: 'PostsCategories',
      as: 'categories',
    });
  };

  return BlogPosts;
};