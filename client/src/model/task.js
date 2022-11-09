import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    time: {
      type: String,
    },
    date: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

export { Task };
