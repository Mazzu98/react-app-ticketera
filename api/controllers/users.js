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

const findConBarrios = (req, res) => {
  User.aggregate(
    [
      {
        $lookup: {
          from: "barrios",
          localField: "barrio",
          foreignField: "barrio",
          as: "posicion",
        },
      },
    ],
    (err, user) => {
      err && res.status(500).send(err.message);

      res.status(200).json(user);
    }
  );
};

const findByText = (req, res) => {
  User.find(
    {
      $text: {
        $search: req.params.text,
      },
    },
    (err, user) => {
      err && res.status(500).send(err.message);

      res.status(200).json(user);
    }
  );
};

const findClientes = (req, res) => {
  User.find(
    {
      plan: {$exists: true}
  },
    (err, user) => {
      err && res.status(500).send(err.message);

      res.status(200).json(user);
    }
  );
};

const findClientes2 = (req, res) => {
  User.find(
    {
      plan: {$type: "object"}
  },
    (err, user) => {
      err && res.status(500).send(err.message);

      res.status(200).json(user);
    }
  );
};

const findClientePorZona = (req, res) => {
  User.aggregate(
    [
      {
        $match: {
            cliente: true
        }
      },
      {
          $group:{
              "_id": "$barrio",
              total: { "$sum": 1 }
          }
      }
  ],
    (err, user) => {
      err && res.status(500).send(err.message);

      res.status(200).json(user);
    }
  );
};

const cantCanalesMayorA = (req, res) => {
  const cant = parseInt(req.params.cant)
  User.find(
    {
      "cliente": true,
      "plan.cantCanales": {$gt: cant}
  },
    (err, user) => {
      err && res.status(500).send(err.message);

      res.status(200).json(user);
    }
  );
};

const cantCanalesMenorIgualA = (req, res) => {
  const cant = parseInt(req.params.cant)
  User.find(
    {
      "cliente": true,
      "plan.cantCanales": {$lte: cant}
  },
    (err, user) => {
      err && res.status(500).send(err.message);

      res.status(200).json(user);
    }
  );
};

const findClienteConEstosCanales = (req, res) => {
  User.find(
    {
      "plan.canales": {$all: ["4","5","20"]}
  },
    (err, user) => {
      err && res.status(500).send(err.message);

      res.status(200).json(user);
    }
  );
};

const findClientesByDnisApellidos = (req, res) => {
  User.find(
    {
      "cliente": true,
      $or: [
          {"dni": {$in: ["41536767", "42536565", "43287323"]}},
          {"apellido":{$in: ["Mazzucchelli", "Bernheim"]}}
      ]
  },
    (err, user) => {
      err && res.status(500).send(err.message);

      res.status(200).json(user);
    }
  );
};

const findClientesExeptoApellidos = (req, res) => {
  User.find(
    {
      "cliente": true,
      "apellido": {$nin: ["Mazzucchelli", "Bernheim", "Lopez"]}
  },
    (err, user) => {
      err && res.status(500).send(err.message);

      res.status(200).json(user);
    }
  );
};

const findClientesSinPack = (req, res) => {
  const pack = req.params.pack
  User.find(
    {
      "cliente": true,
      "plan.nombre": {$ne: pack}
  },
    (err, user) => {
      err && res.status(500).send(err.message);

      res.status(200).json(user);
    }
  );
};

module.exports = {
  findAllUsers,
  findbyId,
  findConBarrios,
  findByText,
  findClientes,
  findClientes2,
  findClientePorZona,
  cantCanalesMayorA,
  cantCanalesMenorIgualA,
  findClienteConEstosCanales,
  findClientesByDnisApellidos,
  findClientesExeptoApellidos,
  findClientesSinPack
};
