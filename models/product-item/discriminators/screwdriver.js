const mongoose = require("mongoose");
const baseSchema = require("../product-item");

const ScrewdriverSchema = new mongoose.Schema(
  {
    isBatteryOnly: {
      type: Boolean,
      required: true,
    },
  },
  baseSchema.options
);

module.exports = Screwdriver = baseSchema.model.discriminator("screwdriver", ScrewdriverSchema);
