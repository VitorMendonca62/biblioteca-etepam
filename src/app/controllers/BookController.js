const Book = require("../models/Book");
const path = require("path");

module.exports = {
  async store(req, res) {
    const { titulo, autor, estrelas, sinopse } = await req.body;

    const book = await Book.create({
      titulo,
      autor,
      estrelas,
      sinopse,
      path: req.file.filename,
    });

    return res.redirect("/");
  },
  async index(req, res) {
    const books = await Book.findAll();
    return res.json(books);
  },
  async show(req, res) {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    res.json(book);
  },
};
