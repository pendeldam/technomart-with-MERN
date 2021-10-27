const mongoose = require("mongoose");
const baseSchema = require("../product");

const ChainsawSchema = new mongoose.Schema(
  {
    fuelCapacity: {
      type: Number,
      required: true,
    },
  },
  baseSchema.options
);

module.exports = Chainsaw = baseSchema.Product.discriminator("chainsaw", ChainsawSchema);
