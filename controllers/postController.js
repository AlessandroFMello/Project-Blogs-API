const { postService } = require('../services');

module.exports = {
  create: async (req, res, _next) => {
    try {
      const { id } = req.token.data;
      const { title, content, categoryIds } = req.body;
      const { code, message, post } = await postService.create(title, content, categoryIds, id);
      if (!post) {
        return res.status(code).json({ message });
      }
  
      return res.status(code).json(post);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Algo deu errado' });
    }
  },
};
