const mongoose = require("mongoose");
const ProductItem = require("../product-item/product-item");

const ProductSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  vendors: [String],
  count: Number,
  category: String,
  catalog: [ProductItem.schema],
});

module.exports = Product = mongoose.model("product", ProductSchema);
