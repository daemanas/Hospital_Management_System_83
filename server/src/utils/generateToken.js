const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');

module.exports = (id, expiresIn = jwtConfig.expiresIn) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || jwtConfig.secret, {
    expiresIn,
  });
};
