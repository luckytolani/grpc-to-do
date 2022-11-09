import express from "express";
import * as userController from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/", userController.createUser);

export { userRouter };
