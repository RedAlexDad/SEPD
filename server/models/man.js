const { mongoose, model } = require("mongoose");

const Man = new mongoose.Schema({
  family: { type: String, required: true },
  name: { type: String, required: true },
  fatherland: { type: String, required: true },
  group: { type: String, required: true },
});

module.exports = mongoose.model("User", Man);
