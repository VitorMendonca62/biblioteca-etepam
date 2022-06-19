const Book = require("../models/Book");
const path = require("path");

module.exports = {
  async store(req, res) {
    const { titulo, autor, estrelas, sinopse } = await req.body;
    const path = await req.file.filename;
    const dados = [titulo, autor, estrelas, sinopse, path];
  var erros = []
    if (!titulo || typeof titulo === undefined || titulo === null) {
      erros.push({ texto: "Título Inválido!" });
    }
    if (!autor || typeof autor === undefined || autor === null) {
      erros.push({ texto: "Autor Inválido!" });
    }
    if (!estrelas || typeof estrelas === undefined || estrelas === null) {
      erros.push({ texto: "Estrelas Inválida!" });
    }
    if (!sinopse || typeof sinopse === undefined || sinopse === null) {
      erros.push({ texto: "Sinopse Inválida" });
    }
    if (!path || typeof path === undefined || path === null) {
      erros.push({ texto: "Arquivo Inválido!" });
    }
  
    if (titulo.length < 3) {
      erros.push({ texto: "Título muito pequeno!" });
    }
    if (autor.length < 3) {
      erros.push({ texto: "Autor muito pequeno!" });
    }
    if (sinopse.length < 20) {
      erros.push({ texto: "Sinopse muito pequena!" });
    }
    if (estrelas > 5 || estrelas < 0) {
      erros.push({ texto: "Estrelas fora do limite padrão!" });
    }

    if(erros.length > 0) {
      res.redirect("/cadastro-livro")
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
