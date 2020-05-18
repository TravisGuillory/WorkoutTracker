const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const app = express();
const PORT = preocess.env.PORT || 3000;


// Middleware
app.use(express.urlencoded( { extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use(logger('dev'));


// Routes
app.use(require('./routes/apiRoutes.js'));
app.use(require('./routes/htmlRoutes.js'));


const db = require('./models');


