//Dependencies used
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

//Modules used
const database = require('./database');

var app = express();

database.openDB();

//Enabled bodyParser to get data from users request
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

//Autoload
consign()
    .include('src/routes')
    .then('src/models')
    .then('src/controllers')
    .into(app);

//Morgan logger
app.use(morgan('dev'));

//Enabled security with helmet
app.use(helmet());

//Enabled cross domain with cors
app.use(cors());

module.exports = app;
