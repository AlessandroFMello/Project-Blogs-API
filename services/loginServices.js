require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

module.exports = {
  login: async (email, password) => {
    const userValidation = await User.findOne({ where: { email, password } });
    if (!userValidation) {
      return { code: 400, message: 'Invalid fields' };
    }

    const user = userValidation.dataValues;

    const token = jwt.sign({ data: { id: user.id, email } }, secret, jwtConfig);

    return { code: 200, token: { token } };
  },
};