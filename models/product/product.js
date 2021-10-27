const mongoose = require("mongoose");

const options = { discriminatorKey: "type" };

const ProductSchema = new mongoose.Schema(
  {
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
  },
  options
);

exports.Product = mongoose.model("Product", ProductSchema);
exports.options = options;
