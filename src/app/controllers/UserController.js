const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { name, email, senha_hash, matricula, serie, curso } = req.body;
    const user = await User.create(req.body);
    req.body.senha = await undefined
    return res.json(user);
  },
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },
};
