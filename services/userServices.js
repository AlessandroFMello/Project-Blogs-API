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
  getAll: async () => {
    const allUsers = await User.findAll();

    return { code: 200, allUsers };
  },
  getById: async (id) => {
    const user = await User.findOne({ where: { id } });

    if (!user) {
      return { code: 404, message: 'User does not exist' };
    }

    return { code: 200, user };
  },
};
