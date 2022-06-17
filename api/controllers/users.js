const User = require("../models/Usuario");

const findAllUsers = (req, res) => {
  User.find((err, users) => {
    err && res.status(500).send(err.message);
    
      return res.status(200).json(users);
  });
};

const findbyId = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    err && res.status(500).send(err.message);

    res.status(200).json(user);
  });
};

module.exports = { findAllUsers, findbyId};
