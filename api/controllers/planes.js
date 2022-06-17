const Plan = require("../models/Plan");

const findAllPlanes = (req, res) => {
  Plan.find((err, planes) => {
    err && res.status(500).send(err.message);
    
      return res.status(200).json(planes);
  });
};

const findbyId = (req, res) => {
  Plan.findById(req.params.id, (err, plan) => {
    err && res.status(500).send(err.message);

    res.status(200).json(plan);
  });
};

module.exports = { findAllPlanes, findbyId};
