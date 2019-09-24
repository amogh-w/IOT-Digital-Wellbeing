const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const emotionSchema = new Schema({
  detectedEmotion: String,
  date: Date,
  userId: String
});

module.exports = mongoose.model("Emotion", emotionSchema);
