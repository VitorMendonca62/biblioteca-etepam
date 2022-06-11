const User = require("../models/User");
module.exports = {
  async store(req, res) {
    const {
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
    } = req.body;
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
    user.senha = undefined
    return res.json(user);
  },
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },
};
