const { categoryService } = require('../services');

module.exports = {
  create: async (req, res, _next) => {
    try {
      const { code, message, category } = await categoryService.create(req.body);

      if (!category) {
        return res.status(code).json({ message });
      }

    return res.status(code).json(category);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  },
  getAll: async (_req, res, _next) => {
    try {
      const { code, allCategories } = await categoryService.getAll();

      return res.status(code).json(allCategories);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  },
};
