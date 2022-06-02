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
    primaryKey: true,
  },
  titulo: {
    type: Sequelize.STRING,
  },
  autor: {
    type: Sequelize.STRING,
  },
  estrelas: {
    type: Sequelize.INTEGER,
  },
  sinopse: {
    type: Sequelize.TEXT,
  },
  quantidade: {
    type: Sequelize.INTEGER,
  },
});

const Users = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.TEXT,
  },
  email: {
    type: Sequelize.TEXT,
  },
  senha: {
    type: Sequelize.STRING,
  },
  confirmacao_senha: {
    type: Sequelize.STRING,
  },
  telefone: {
    type: Sequelize.TEXT,
  },
  matricula: {
    type: Sequelize.INTEGER,
  },
  ensino: {
    type: Sequelize.STRING,
  },
  serie: {
    type: Sequelize.STRING,
  },
  curso: {
    type: Sequelize.STRING,
  },
});

// sequelize.sync({force:true})
//
module.exports = {
  Livros,
  Users,
};
