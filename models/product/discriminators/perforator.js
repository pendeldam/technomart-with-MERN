const mongoose = require("mongoose");
const baseSchema = require("../product");

const PerforatorSchema = new mongoose.Schema(
  {
    length: {
      type: Number,
      required: true,
    },
  },
  baseSchema.options
);

module.exports = Perforator = baseSchema.Product.discriminator("perforator", PerforatorSchema);
