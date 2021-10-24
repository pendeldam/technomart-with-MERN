const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// @route   GET catalog/:id
// @desc    get item by ID from the catalog
router.use("/:id", async function (req, res) {
  try {
    const product = await Product.findById(req.params.id);

    res.render("product-page", {
      title: product.name,
      product: product,
    });
  } catch (err) {
    console.log(err);
  }
});

// @route   GET catalog
// @desc    get all items from the catalog
router.use("/", async function (req, res) {
  try {
    const products = await Product.find().sort({price: 1});
    const vendors = await Product.getVendors();

    res.render("catalog", {
      title: "Каталог",
      products: products,
      filters: vendors,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
