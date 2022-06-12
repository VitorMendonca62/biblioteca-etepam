const { Model, DataTypes } = require("sequelize");

class Book extends Model {
  static init(sequelize) {
    super.init(
      {
        titulo: DataTypes.STRING(2000),
        autor: DataTypes.STRING,
        sinopse: DataTypes.STRING,
        estrelas: DataTypes.INTEGER,
        path: DataTypes.STRING,
        url: {
          type: DataTypes.VIRTUAL,
          get() {
            return `http://localhost:4041/uploads/${this.path}`;
          },
        },
      },
      { sequelize }
    );
  }
}

module.exports = Book;
