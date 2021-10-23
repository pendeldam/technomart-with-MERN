const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  vendor: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  isNewOffer: Boolean,
  image: String,
});

module.exports = Product = mongoose.model("Product", ProductSchema);
