const Barrio = require("../models/Barrio");

const findAllBarrios = (req, res) => {
  Barrio.find((err, barrios) => {
    err && res.status(500).send(err.message);

    return res.status(200).json(barrios);
  });
};

const findbyId = (req, res) => {
  Barrio.findById(req.params.id, (err, barrio) => {
    err && res.status(500).send(err.message);

    res.status(200).json(barrio);
  });
};

const findbyName = (req, res) => {
  Barrio.find({ barrio: req.params.name.toUpperCase() }, (err, barrio) => {
    err && res.status(500).send(err.message);

    res.status(200).json(barrio);
  });
};

const findPoint = (req, res) => {
  Barrio.find(
    {
      geometry: {
        $geoIntersects: {
          $geometry: {
            type: "Point",
            coordinates: [-58.362567, -34.635311],
          },
        },
      },
    },
    {
      geometry: 0,
    },
    (err, barrio) => {
      err && res.status(500).send(err.message);

      res.status(200).json(barrio);
    }
  );
};

const findBarrioMasCercano = (req, res) => {
  Barrio.findOne(
    {
      geometry: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [-58.542429, -34.671762],
          },
          $maxDistance: 10000,
        },
      },
    },
    {
      geometry: 0,
    },
    (err, barrio) => {
      err && res.status(500).send(err.message);

      res.status(200).json(barrio);
    }
  );
};

const findBarriosDentroDelPoligono = (req, res) => {
  Barrio.find(
    {
      geometry: {
        $geoWithin: {
          $geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-58.46443176269531, -34.63518530664355],
                [-58.35662841796875, -34.63518530664355],
                [-58.35662841796875, -34.561142101161515],
                [-58.46443176269531, -34.561142101161515],
                [-58.46443176269531, -34.63518530664355],
              ],
            ],
          },
        },
      },
    },
    {
      geometry: 0,
    },
    (err, barrio) => {
      err && res.status(500).send(err.message);

      res.status(200).json(barrio);
    }
  );
};
module.exports = {
  findAllBarrios,
  findbyId,
  findbyName,
  findPoint,
  findBarrioMasCercano,
  findBarriosDentroDelPoligono,
};
