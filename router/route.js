const router = require("express").Router();
const {
  getAllProductsStatic,
  getAllProducts,
} = require("../controller/controller");

router.route("/").get(getAllProducts);
router.route("/static").get(getAllProductsStatic);

module.exports = router;
