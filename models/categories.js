module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'Categories',
  });

  Category.associate = (models) => {
    Category.belongsToMany(models.BlogPosts, {
      foreignKey: 'categoryId',
      through: 'PostsCategories',
      as: 'posts',
    });
  };

  return Category;
};