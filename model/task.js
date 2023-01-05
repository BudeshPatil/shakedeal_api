const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({ 
    team: { type: String, required: true },
    created_at:{type: Date, default: Date.now()}
});

module.exports = mongoose.model("task", dataSchema);