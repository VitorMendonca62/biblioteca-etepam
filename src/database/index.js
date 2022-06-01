const database = require("../config/database");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  database.database,
  database.user,
  database.password,
  {
    host: database.host,
    dialect: database.dialect,
  }
);


const Livros = sequelize.define("livros", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  titulo: { 
    type: Sequelize.STRING
  },
  autor: { 
    type: Sequelize.STRING
  },
  estrelas: { 
    type: Sequelize.INTEGER
  },
  sinopse: { 
    type: Sequelize.TEXT
  },
})


module.exports = {
  Livros,
}