const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ["gasto", "ingreso"],
    required: true,
  },

   userId: {
    type: String, 
    required: false,
  },
  isDefault: { type: Boolean, default: false },
});

module.exports = mongoose.model("Category", categorySchema);
