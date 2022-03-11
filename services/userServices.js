const { User } = require('../models');

module.exports = {
  create: async ({ displayName, email, password, image }) => {
    const checkIfEmailAlreadyExists = await User.findOne({ where: { email } });
    
    if (checkIfEmailAlreadyExists) {
      return { code: 409, message: 'User already registered' };
    }

    const newUser = await User.create({ displayName, email, password, image });
  
    return { code: 201, user: newUser };
  },
};
