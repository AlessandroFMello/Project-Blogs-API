require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const validatesUsers = jwt.verify(token, secret);
    req.user = validatesUsers;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};