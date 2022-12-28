const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: String,
  numberpage: Number,
  imgae: String,
  author: String,
  datedesortie: Date,
});

module.exports = mongoose.model("book", bookSchema);
