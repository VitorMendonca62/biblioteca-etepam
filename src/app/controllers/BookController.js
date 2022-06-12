const Book = require("../models/Book");

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
};
