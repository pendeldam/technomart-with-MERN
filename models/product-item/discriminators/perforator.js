const mongoose = require("mongoose");
const baseSchema = require("../product-item");

const PerforatorSchema = new mongoose.Schema(
  {
    length: {
      type: Number,
      required: true,
    },
  },
  baseSchema.options
);

module.exports = Perforator = baseSchema.model.discriminator("perforator", PerforatorSchema);
