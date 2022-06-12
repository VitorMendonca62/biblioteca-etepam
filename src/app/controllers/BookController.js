const Book = require("../models/Book");
const multer = require("multer");
const { upload } = require("../../config/multer");

module.exports = {
  async store(req, res) {
    const { titulo, autor, estrelas, sinopse, path = "a" } = await req.body;

    const book = await Book.create({
      titulo,
      autor,
      estrelas,
      sinopse,
      path,
    });
    return res.redirect("/");
  },
  async index(req, res) {
    const books = await Book.findAll();
    return res.json(books);
  },
};
