const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
ObjectId       = Schema.ObjectId; 

const dataschema = new mongoose.Schema({
  name: { type: String },
  team: { type: ObjectId},
  user: { type: ObjectId}
});

module.exports = mongoose.model("task", dataschema);
