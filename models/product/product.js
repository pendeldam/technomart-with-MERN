const mongoose = require("mongoose");
const ProductItem = require("../product-item/product-item");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  vendors: [String],
  count: Number,
  catalog: [ProductItem.schema],
});

module.exports = Product = mongoose.model("product", ProductSchema);
