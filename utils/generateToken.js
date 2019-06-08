const jwt = require('jsonwebtoken');

const generateToken = user => {
  const payload = {
    id: user.id, // what the token is describing
    username: user.username,
  };
  const options = {
    expiresIn: '24d',
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
};

module.exports = generateToken;
