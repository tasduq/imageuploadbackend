const mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const imagesSchema = new Schema({
  images: { type: Array, required: true },
});

module.exports = mongoose.model("Images", imagesSchema);
