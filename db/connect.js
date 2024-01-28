const mongoose = require("mongoose");

const startingSchema = (url) => {
  return mongoose.connect(url);
};

module.exports = startingSchema;
