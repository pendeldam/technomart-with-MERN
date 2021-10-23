const express = require("express");
const router = express.Router();
const Product = require("../models/product");

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
