const express = require("express");
const router = express.Router();
const productController = require('../controllers/catalog');

// @route   GET catalog/:type/:id
// @desc    get product from the catalog by id
router.use("/:name/:id", productController.getProduct);

// @route   GET catalog/:id
// @desc    get catalog section by name
router.use("/:name", productController.getSection);

// @route   GET catalog
// @desc    get all items from the catalog
router.use("/", productController.getProducts);

module.exports = router;
