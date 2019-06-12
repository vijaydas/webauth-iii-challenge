//const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

//const Users = require('../users/users-model.js');

const secrets = require("../config/secrets");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    console.log("secret", secrets.jwtSecret)
    jwt.verify(token, secrets.jwtSecret, (err, decodeToken) => {
      if(err) {
        // invalid token
        console.log(err);
        res.status(401).json({message: 'Invalid Creds'})

      } else {
        // valid token
        req.user = { role: decodeToken.roles, username: decodeToken.username}
        next();
      }
    });
  } else {
    res.status(400).json({message: 'error'})
  }
};

