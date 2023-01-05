const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({ 
    name: { type: String, required: true },
    // user_1: { type: mongoose.Types.ObjectId, required: false },
    // user_2: { type: mongoose.Types.ObjectId, required: false }
    user_1: { type: String, required: false },
    user_2: { type: String, required: false }
});

module.exports = mongoose.model("team", dataSchema);