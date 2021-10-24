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
  powerSupply: {
    isBatteryOnly: Boolean,
    value: String,
  },
  isNewOffer: Boolean,
  image: String,
});

ProductSchema.statics.getVendors = async function () {
  try {
    const products = await this.find();
    const vendors = products.map((it) => it.vendor);
    return Array.from(new Set(vendors));
  } catch (err) {
    console.log(err);
  }
};

module.exports = Product = mongoose.model("Product", ProductSchema);
