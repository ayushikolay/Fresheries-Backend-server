const express = require("express");
const router = express.Router();
const API = require("../controllers/api");
const multer = require("multer");

//multer middleware
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.filename + "_" + Date.now() + "_" + file.originalname);
  },
});

let upload = multer({
  storage: storage,
}).single("image");

router.get("/", API.fetchAllProducts);
router.get("/id/:id", API.fetchProductByID);
router.get("/:title", API.fetchAllProductsByTitle);
router.post("/", upload, API.createProduct);
router.patch("/:id", upload, API.updateProduct);
router.delete("/:id", API.deleteProduct);

module.exports = router;
