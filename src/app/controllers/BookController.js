const Book = require("../models/Book");
const path = require("path");

module.exports = {
  async store(req, res) {
    const { titulo, autor, estrelas, sinopse } = await req.body;
    const path = await req.file.filename;
    const dados = [titulo, autor, estrelas, sinopse, path];
    var erros = [];

    dados.forEach((dado) => {
      if (!dado || typeof dado === undefined || dado === null) {
        erros.push("erro");
      }
    });

    if (erros.length > 0) {
      res.redirect("/cadastro-livro");
    } else {
      const book = await Book.create({
        titulo,
        autor,
        estrelas,
        sinopse,
        path,
      });
      return res.redirect("/");
    }
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
