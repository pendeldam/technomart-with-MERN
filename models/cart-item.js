const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  count: Number,
  image: String,
});

module.exports = CartItem = mongoose.model("Cart-item", CartItemSchema);
