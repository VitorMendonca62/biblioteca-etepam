const express = require("express");
const routes = express.Router();
const path = require("path");

// Configurações para upar arquivos
const multer = require("multer");
const multerConfig = require('./config/multer');
const upload = multer(multerConfig)

// Controladoras


// Arquivos estaticos

routes.get("/livros/:id", (req, res) => {
  res.sendFile(path.resolve(__dirname ,"..","public","html","sinopse.html"));
});
routes.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../public/html/login.html"));
});
routes.get("/cadastro", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../public/html/cadastro.html"));
});
routes.get("/matricula", (req, res) => {
  res.sendFile(
    path.resolve(
      __dirname + "/../public/assets/Como conseguir a sua matricula.pdf"
    )
  );
});
routes.get("/cadastro-livro", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../public/html/cadastro-livro.html"));
});

module.exports = routes;
