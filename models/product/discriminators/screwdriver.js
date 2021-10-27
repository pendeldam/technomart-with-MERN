const mongoose = require("mongoose");
const baseSchema = require("../product");

const ScrewdriverSchema = new mongoose.Schema(
  {
    powerSupply: {
      isBatteryOnly: Boolean,
      value: String,
    },
  },
  baseSchema.options
);

module.exports = Screwdriver = baseSchema.Product.discriminator("screwdriver", ScrewdriverSchema);
