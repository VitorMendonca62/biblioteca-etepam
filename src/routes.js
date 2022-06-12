const express = require("express");
const routes = express.Router();
const path = require("path");

const UserController = require("./app/controllers/UserController");
const BookController = require("./app/controllers/BookController");
const UploadController = require("./app/controllers/UploadController");


routes.post("/auth/cadastrar-user", UserController.store);
routes.get("/auth/cadastrar-user", UserController.index);

routes.post("/books/cadaster-book", BookController.store);
routes.get("/books/cadaster-book", BookController.index);





routes.post("/books/upload-capa-livro", UploadController.store);
routes.get("/books/upload-capa-livro", UploadController.index );





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
