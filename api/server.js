const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Users = require('./api/users');
const Planes = require('./api/planes');
const cors = require('cors');
const Tickets = require('./api/tickets');
const Barrios = require('./api/barrios');

require('dotenv').config();

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.raw());
app.use('/usuarios', Users);
app.use('/planes', Planes);
app.use('/tickets', Tickets);
app.use('/barrios', Barrios);

mongoose.connect(
  `mongodb://${process.env.DB_HOST}/${process.env.DB}`,
  {useNewUrlParser: true},
  (err, res) =>{
    err && console.log('Error conectando a la db');
    app.listen(process.env.PORT || 4000, ()=>{
      console.log("Servidor corriendo en el http://localhost:4000");
    })
  }
)