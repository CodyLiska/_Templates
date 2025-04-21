// Example.js

const mongoose = require("mongoose");

const StretchSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model("Stretch", StretchSchema);
