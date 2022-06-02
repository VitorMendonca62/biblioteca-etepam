const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");

app.use(express.static(path.resolve(__dirname + "/../public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const multer = require("multer");
const storage = multer.diskStorage({
  // Configurar a pasta dos arquivos e os nomes dos arquvios
  destination: function (req, file, callback) {
    // Direcionar o arquivo para uma pasta
    callback(null, "./upload"); // A pasta de destino que quero que seja armazenado o arquivo
  },
  filename: function (req, file, callback) {
    // configurar o arquivo
    callback(null, `${Date.now()}_${file.originalname}`); // Coloca a data de hoje mais o nome do arquivo
  },
});


const upload = multer({ storage }).single("arquivo"); // Vai vir na requisicao com nome arquivo

app.use(routes);
module.exports = app;
