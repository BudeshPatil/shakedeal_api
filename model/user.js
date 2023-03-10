const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({ 
    username: { type: String, required: true },
    email: { type: String, required: true }
});

module.exports = mongoose.model("user", dataSchema);