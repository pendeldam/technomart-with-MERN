const mongoose = require("mongoose");
const baseSchema = require("../product");

const DrillSchema = new mongoose.Schema(
  {
    isCordless: {
      type: Boolean,
      required: true,
    },
  },
  baseSchema.options
);

module.exports = Drill = baseSchema.Product.discriminator("drill", DrillSchema);
