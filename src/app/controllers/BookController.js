const Book = require("../models/Book");

module.exports = {
  async store(req, res) {
    const { titulo, autor, estrelas, sinopse, path } = await req.body;
    const book = await Book.create({
      titulo,
      autor,
      estrelas,
      sinopse,
      path,
    });

    return res.json(book);
  },
  async index(req, res) {
    const books = await Book.findAll();
    return res.json(books);
  },
};
