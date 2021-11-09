const express = require("express");
const router = express.Router();
const productController = require('../controllers/catalog');

// @route   GET catalog/:type/:id
// @desc    get product from the catalog by id
router.use("/:type/:id", productController.getProductById);

// @route   GET catalog/:id
// @desc    get catalog product list by type
router.use("/:type", productController.getProductsByType);

// @route   GET catalog
// @desc    get catalog sections
router.use("/", productController.getCatalogSections);

module.exports = router;
