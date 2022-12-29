const mongoose = require("mongoose");
const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

const dataschema = new mongoose.Schema({
  name: { type: String },
  member: { type: ObjectId },
});

module.exports = mongoose.model("team", dataschema);
