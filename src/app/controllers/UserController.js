const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const {
      name,
      email,
      senha_hash,
      number,
      matricula,
      ensino,
      serie,
      curso,
      admin,
    } = req.body;
    const user = await User.create(req.body);
    console.log(req.body.senha);
    return res.json(user);
  },
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },
};
