const multer = require("multer");

module.exports = {
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, "./public/assets/img/capas");
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}_${file.originalname}`);
    },
  }),
  
  fileFilter: (req, file, callback) => {
    if (
      file.mimetype.includes("jpeg") ||
      file.mimetype.includes("png") ||
      file.mimetype.includes("jpg") 
    ) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  }
};
