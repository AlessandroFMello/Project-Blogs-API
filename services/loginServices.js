require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

module.exports = {
  login: async (email, password) => {
    const userValidation = await User.findOne({ where: { email, password } });
    if (userValidation === null) {
      return { code: 400, message: 'Invalid fields' };
    }
    const { dataValues } = userValidation;

    if (dataValues.email === email && dataValues.password === password) {
        const token = jwt.sign({ data: email }, secret, jwtConfig);
    
        return { code: 200, token: { token } };
      }
  },
};