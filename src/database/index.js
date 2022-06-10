const Sequelize = require("sequelize");
const configDatabase = require("../config/database");

const User = require('../app/models/User');
const Book = require('../app/models/Book');
const models = [User,Book]

const connection = new Sequelize(configDatabase);

connection
  .authenticate()
  .then(() => console.log("Database conectado com sucesso"))
  .catch((err) => console.log("Erro:" + err));

models.forEach(model => model.init(connection))




module.exports = connection;
