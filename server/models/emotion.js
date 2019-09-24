const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const emotionSchema = new Schema({
  userId: String,
  detectedEmotion: String,
  date: Date
});

module.exports = mongoose.model("Emotion", emotionSchema);
