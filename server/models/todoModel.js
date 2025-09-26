const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    Timestamp: true,
  }
);

const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;
