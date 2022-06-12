const fs = require('fs');
const { upload } = require("../../config/multer");
const path = require('path');


module.exports = {
  async store(req, res) {
    await upload(req, res, (err) => {
      err
        ? res.end("Ocorreu um erro:" + err)
        : console.log("Upload com sucesso");
        
    });
  },
  async index(req, res) {
    fs.readdir(path.resolve(__dirname, "..","..","..", "uploads"), (err, files) => {
      return res.json(files);
    });
  },
};
