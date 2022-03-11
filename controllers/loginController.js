const { loginService } = require('../services');

module.exports = {
  login: async (req, res, _next) => {
    try {
      const { email, password } = req.body;
      const { code, message, token } = await loginService.login(email, password);
  
      if (!token) {
        return res.status(code).json({ message });
      }
  
      return res.status(code).json(token);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Algo deu errado' });
    }
  },
};
