const express = require("express");
const router = express.Router();
const cartController = require('../controllers/cart');

// @route   GET cart
// @desc    get all items in the cart
router.get("/", cartController.getItems);

// @route   POST cart/:id
// @desc    add item to the cart
router.post("/:id", cartController.addItem);

// @route   PUT cart/:id
// @desc    update item in the cart
router.put("/", cartController.setItem);

// @route   DELETE cart
// @desc    delete item from the cart
router.delete("/:id", cartController.deleteItem);

module.exports = router;
