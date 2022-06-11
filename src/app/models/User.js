const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.VIRTUAL,
        senha_hash: DataTypes.STRING,
        number: DataTypes.STRING,
        matricula: DataTypes.STRING,
        ensino: DataTypes.STRING,
        serie: DataTypes.STRING,
        curso: DataTypes.STRING,
        admin: DataTypes.BOOLEAN,
      },
      { sequelize }
    );
    this.addHook("beforeSave", async (user) => {
      if (user.senha) {
        user.senha_hash = await bcrypt.hash(user.senha, 10);
        console.log(user)
      }
    });

    return this;
  }

  verificarSenha(senha) {
    return bcrypt.compare(senha, this.senha_hash);
  }
}
module.exports = User;
