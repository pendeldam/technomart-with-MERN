const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// @route   GET catalog/:type/:id
// @desc    get product from the catalog by id
router.use("/:name/:id", async function (req, res) {
  try {
    const product = await Product.findOne({ name: req.params.name });
    const result = await product.catalog.id(req.params.id);

    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

// @route   GET catalog/:id
// @desc    get catalog section by name
router.use("/:name", async function (req, res) {
  try {
    const product = await Product.findOne({ name: req.params.name });

    res.render("catalog", {
      title: product.name,
      products: product.catalog,
    });
  } catch (err) {
    console.log(err);
  }
});

// @route   GET catalog
// @desc    get all items from the catalog
router.use("/", async function (req, res) {
  try {
    const products = await Product.find();

    res.render("catalog", {
      title: "Каталог",
      products: products,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
