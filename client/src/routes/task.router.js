import express from "express";
import * as taskController from "../controllers/task.controller.js";

const taskRouter = express.Router();

taskRouter.post("/", taskController.createTask);
taskRouter.get("/", taskController.getTask);
taskRouter.patch("/", taskController.updateTask);
taskRouter.delete("/:id", taskController.deleteTask);

export { taskRouter };
