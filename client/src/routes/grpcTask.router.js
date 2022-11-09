import express from "express";
import * as taskController from "../controllers/grpcTask.controller.js";

const grpcTaskRouter = express.Router();

grpcTaskRouter.post("/", taskController.createTask);
grpcTaskRouter.get("/", taskController.getTask);
grpcTaskRouter.patch("/", taskController.updateTask);
grpcTaskRouter.delete("/:id", taskController.deleteTask);

export { grpcTaskRouter };
