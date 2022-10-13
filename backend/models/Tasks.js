const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "please provide a user ID"],
  },
  todo: {
    type: String,
    required: [true, "must provide a task name"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: Number,
    required: [true, "Must Provide a userID"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Task", TaskSchema);
