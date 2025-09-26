import { Schema, model } from "mongoose";

const todoSchema = Schema(
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

const Todo = model("todo", todoSchema);

export default Todo;
