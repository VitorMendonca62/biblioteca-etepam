const User = require("../models/User");
module.exports = {
  async store(req, res) {
    const {
      name,
      email,
      senha,
      confirmacao_senha,
      senha_hash,
      number,
      matricula,
      ensino,
      serie,
      curso,
      admin = false,
    } = req.body;

    const dados = [
      name,
      email,
      senha,
      confirmacao_senha,
      number,
      matricula,
      ensino,
      serie,
      curso,
    ];
    var erros = [];
    dados.forEach((dado,i) => {
      if (!dado || typeof dado === undefined || dado === null) {
        erros.push({err: "erro"});
      }
    });

    if (erros.length > 0) {
      return res.redirect("/cadastro");
    } else {
      const user = await User.create({
        name,
        email,
        senha,
        senha_hash,
        number,
        matricula,
        ensino,
        serie,
        curso,
        admin,
      });
      user.senha = undefined;
      return res.redirect("/");
    }
  },

  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },
};
