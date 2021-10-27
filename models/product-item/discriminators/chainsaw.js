const mongoose = require("mongoose");
const baseSchema = require("../product-item");

const ChainsawSchema = new mongoose.Schema(
  {
    fuelCapacity: {
      type: Number,
      required: true,
    },
  },
  baseSchema.options
);

module.exports = Chainsaw = baseSchema.model.discriminator("chainsaw", ChainsawSchema);
