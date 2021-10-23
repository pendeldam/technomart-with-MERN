const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const CartItem = require("../models/cart-item");

// @route   GET cart
// @desc    get all items in cart

router.get("/", async (req, res) => {
  try {
    const items = await CartItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({
      msg: "Server unavailable",
    });
  }
});

// @route   POST cart
// @desc    post item in cart

router.post("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    const item = new CartItem({
      name: product.name,
      price: product.price,
      link: req.params.id,
      image: product.image,
      count: req.body.count,
    });

    const result = await item.save();
    res.json(result);
  } catch (err) {
    res.status(500).json({
      success: false,
      msg: "Server unavailable",
    });
  }
});

// @route   DELETE cart
// @desc    delete item in cart

router.delete("/:id", async (req, res) => {
  try {
    const item = await CartItem.findOneAndDelete(req.params.id);
    
    res.json({
      msg: item._id,
      success: true,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      msg: "object not found",
    });
  }
});

module.exports = router;
