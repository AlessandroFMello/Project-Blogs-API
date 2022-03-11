const { userService } = require('../services');

module.exports = {
  create: async (req, res, _next) => {
    try {
      const { code, message, user } = await userService.create(req.body);
  
      if (!user) {
        return res.status(code).json({ message });
      }

      return res.status(code).json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Algo deu errado' });
    }
  },
  getAll: async (_req, res, _next) => {
    try {
      const { code, allUsers } = await userService.getAll();
    
      return res.status(code).json(allUsers);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Algo deu errado' });
    }
  },
};
