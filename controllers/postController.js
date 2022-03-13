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
      return res.status(500).json({ message: error.message });
    }
  },
  getAll: async (_req, res, _next) => {
    try {
      const { code, allPosts } = await postService.getAll();
    
      return res.status(code).json(allPosts);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  },
  getById: async (req, res, _next) => {
    try {
      const { id } = req.params;
      const { code, message, post } = await postService.getById(id);
  
      if (!post) {
        return res.status(code).json({ message });
      }
  
      return res.status(code).json(post);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  },
  update: async (req, res, _next) => {
    try {
      const { id } = req.params;
      const { title, content } = req.body;
      const { id: userId } = req.token.data;

      const { code, message, postToUpdate } = await postService.update(id, title, content, userId);
  
      if (!postToUpdate) {
        return res.status(code).json({ message });
      }
  
      return res.status(code).json(postToUpdate);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  },
  delete: async (req, res, _next) => {
    const { id } = req.params;
    const { id: userId } = req.token.data;

    const { code, message } = await postService.delete(id, userId);

    if (message) {
      return res.status(code).json({ message });
    }

    return res.status(code).end();
  },
};
