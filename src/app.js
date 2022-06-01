const express = require("express")
const app = express();
const routes = require('./routes');
const path = require('path');

  app.use(express.static(path.resolve(__dirname + "/../public")))
app.use(routes)
module.exports = app