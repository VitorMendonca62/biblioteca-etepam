const express = require("express");
const routes = express.Router();
const path = require("path");
const { Livros, Users } = require("./database/index");
const { upload } = require("./config/multer");

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

routes.post("/cadastrar-livro", async (req, res) => {
  await upload(req, res, (err) => {
    err ? res.end("Ocorreu um erro:" + err) : false;
  });
  await Livros.create(req.body)
    .then(() => res.redirect("/cadastro-livro"))
    .catch((err) => console.log("ERRO:" + err));
});

routes.post("/cadastrar-user", async (req, res) => {
  await Users.create(req.body)
    .then(() => res.redirect("/"))
    .catch((err) => console.log("ERRO:" + err));
});

module.exports = routes;
