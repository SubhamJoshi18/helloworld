const mongoose = require("mongoose");

const ProducSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name must be required"],
    trim: true,
  },
  feature: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    default: 20,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: ["ikea", "liddy", "caressa", "marcos"],
  },
});

module.exports = mongoose.model("Product", ProducSchema);
