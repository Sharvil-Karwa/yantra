const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter article title"],
    maxLength: [100, "Article title cannot exceed 100 characters"],
    minLength: [3, "Article title must be at least 3 characters long"],
  },
  content: {
    type: String,
    required: [true, "Please enter article content"],
    maxLength: [1000, "Article content cannot exceed 1000 characters"],
    minLength: [3, "Article content must be at least 3 characters long"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Article", articleSchema);
