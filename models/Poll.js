const mongoose = require("mongoose");
const pollSchema = new mongoose.Schema({
    question: String,
    options: [{ text: String, votes: Number }],
    createdBy: String
});

module.exports = mongoose.model("Poll", pollSchema);
