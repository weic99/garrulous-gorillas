const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/mongo');
const router = express.Router();

const User = require('../models/user');

router.post('/register', (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password
  });
  
  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({
        success: false,
        msg: `Failed to register new user: ${newUser.username}`
      });
    } else if (user) {
      res.json({
        success: true,
        msg: `New user ${newUser.username} is registered`
      });
    }
  });
});

module.exports = router;