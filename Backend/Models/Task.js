const mongoose = require("mongoose");

const Task = mongoose.Schema({
  title: String,
  description: String,
  isCompleted: Boolean,
  createdAt: Date,
  updatedAt: Date
})

module.exports = mongoose.model("Task", Task);