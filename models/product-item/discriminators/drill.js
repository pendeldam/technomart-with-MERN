const mongoose = require("mongoose");
const baseSchema = require("../product-item");

const DrillSchema = new mongoose.Schema(
  {
    isCordless: {
      type: Boolean,
      required: true,
    },
  },
  baseSchema.options
);

module.exports = Drill = baseSchema.model.discriminator("drill", DrillSchema);
