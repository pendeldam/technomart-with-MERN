const mongoose = require("mongoose");

const options = { discriminatorKey: "type" };

const ProductItemSchema = new mongoose.Schema(
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

exports.options = options;
exports.schema = ProductItemSchema;
exports.model = mongoose.model("Product_item", ProductItemSchema);
