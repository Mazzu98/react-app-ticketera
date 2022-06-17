const Ticket = require("../models/Ticket");

const findAllUsers = (req, res) => {
  Ticket.find((err, tickets) => {
    err && res.status(500).send(err.message);
    
      return res.status(200).json(tickets);
  });
};

const findbyId = (req, res) => {
  Ticket.findById(req.params.id, (err, ticket) => {
    err && res.status(500).send(err.message);

    res.status(200).json(ticket);
  });
};

module.exports = { findAllUsers, findbyId};
