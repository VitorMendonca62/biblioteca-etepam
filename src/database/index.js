const Sequelize = require("sequelize");
const configDatabase = require("../config/database");

const User = require('../app/models/User');


const connection = new Sequelize(configDatabase);

connection
  .authenticate()
  .then(() => console.log("Database conectado com sucesso"))
  .catch((err) => console.log("Erro:" + err));

User.init(connection)


module.exports = connection;
