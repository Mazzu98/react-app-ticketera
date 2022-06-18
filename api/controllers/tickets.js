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

const findUnsolved = (req, res) => {
  Ticket.find({ resuelto: { $eq: false } }, (err, ticket) => {
    err && res.status(500).send(err.message);

    res.status(200).json(ticket);
  });
};

const findAtencionAlCliente = (req, res) => {
  Ticket.find(
    {
      derivaciones: {
        $elemMatch: {
          area: "ATENCIÓN AL CLIENTE",
        },
      },
    },
    (err, ticket) => {
      err && res.status(500).send(err.message);

      res.status(200).json(ticket);
    }
  );
};

const findCantAtencionesDeEmpleados = (req, res) => {
  Ticket.aggregate(
    [
      {
        $unwind: "$derivaciones",
      },
      {
        $group: {
          _id: "$derivaciones.empleado._id",
          empleado: { $first: "$derivaciones.empleado" },
          total: { $sum: 1 },
        },
      },
      {
        $project: {
          "empleado.posicion": 0,
          "empleado.plan": 0,
        },
      },
    ],
    (err, ticket) => {
      err && res.status(500).send(err.message);

      res.status(200).json(ticket);
    }
  );
};

const findByCantDerivaciones = (req, res) => {
  const cant = parseInt(req.params.cant)
  Ticket.find(
    {
      derivaciones: {
        $size: cant,
      },
    },
    (err, ticket) => {
      err && res.status(500).send(err.message);

      res.status(200).json(ticket);
    }
  );
};

const findClientesAtendidosPorZona = (req, res) => {
  Ticket.aggregate(
    [
      {
          $group:{
              "_id": "$cliente.barrio",
              "barrio": {"$first": "$cliente.barrio"},
              total: { "$sum": 1 }
          }
      },
      {
          $project:{
              "cliente.posicion": 0,
              "cliente.plan": 0
          }
      },
      { 
          $sortByCount:  "$barrio" 
      }
  ],
    (err, ticket) => {
      err && res.status(500).send(err.message);

      res.status(200).json(ticket);
    }
  );
};

const findEmpleadosAtiendenEnSuBarrio = (req, res) => {
  Ticket.aggregate(
    [
      {
          $unwind: "$derivaciones"
      },
      {
          $match: {
              $expr: { $eq: [ "$derivaciones.barrio" , "$derivaciones.empleado.posicion.descripcion" ] }
          } 
      },
      {
          $group:{
              "_id": "$derivaciones.empleado._id",
              empleado: { "$first": "$derivaciones.empleado" },
          }
      }
  ],
    (err, ticket) => {
      err && res.status(500).send(err.message);

      res.status(200).json(ticket);
    }
  );
};

const findClienteConTicketSinResolver = (req, res) => {
  Ticket.find(
    {
      resuelto: false
  },
  {
      "cliente": 1
  },
    (err, ticket) => {
      err && res.status(500).send(err.message);

      res.status(200).json(ticket);
    }
  );
};

const findCantTicketsPorCliente = (req, res) => {
  Ticket.aggregate([
    {
        $group:{
            "_id": "$cliente._id",
            cliente: { "$first": "$cliente" },
            total: { "$sum": 1 }
        }
    },
    {
        $project:{
            "cliente.posicion": 0,
            "cliente.plan": 0
        }
    }
],
    (err, ticket) => {
      err && res.status(500).send(err.message);

      res.status(200).json(ticket);
    }
  );
};

const findClienteEmpleadoConTicket = (req, res) => {
  Ticket.find(
  {
      "cliente.empleado": true
  },
  {
      "cliente": 1
  },
    (err, ticket) => {
      err && res.status(500).send(err.message);

      res.status(200).json(ticket);
    }
  );
};


module.exports = {
  findAllUsers,
  findbyId,
  findUnsolved,
  findAtencionAlCliente,
  findCantAtencionesDeEmpleados,
  findByCantDerivaciones,
  findClientesAtendidosPorZona,
  findEmpleadosAtiendenEnSuBarrio,
  findClienteConTicketSinResolver,
  findCantTicketsPorCliente,
  findClienteEmpleadoConTicket,
};
