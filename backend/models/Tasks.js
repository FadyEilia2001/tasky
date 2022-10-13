const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
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

    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);
