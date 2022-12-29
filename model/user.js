const mongoose = require("mongoose");
const mongoSchema = mongoose.Schema;

const dataschema = new mongoose.Schema({
  username: { type: String },
  email: { type: String },
});

module.exports = mongoose.model("user", dataschema);
