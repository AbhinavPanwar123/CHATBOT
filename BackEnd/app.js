var express = require('express');
var authRouter = require('./routes/authRouter');
const cors = require('cors');
const colors = require('colors');
require('./config/db');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/auth', authRouter);

module.exports = app;
