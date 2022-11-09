import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  label: {
    type: String,
    trim: true,
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);

export { Task };
