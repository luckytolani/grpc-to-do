import * as taskService from "../services/task.service.js";

export const createTask = async (req, res, next) => {
  try {
    let taskObj = req.body;

    let createRes = await taskService.createTaskService({ ...taskObj });

    if (createRes?.status)
      return res.json({ ...createRes, message: "Success" });
    else return res.json({ ...createRes, message: "DB_ERROR" });
  } catch (error) {
    return res.json({ status: false, message: "DBError", error });
  }
};

export const getTask = async (req, res, next) => {
  try {
    let getRes = await taskService.getTaskService(req?.body || {});

    if (getRes?.status) return res.json({ ...getRes, message: "Success" });
    else return res.json({ ...getRes, message: "DB_ERROR" });
  } catch (error) {
    console.log(error);
    return res.json({ status: false, message: "DBError", error });
  }
};

export const updateTask = async (req, res, next) => {
  try {
    if (!req?.body?._id)
      return res.json({ status: false, message: "Id not available" });

    let updateRes = await taskService.updateTaskService(req?.body);

    if (updateRes?.status)
      return res.json({ ...updateRes, message: "Success" });
    else return res.json({ message: "DB_ERROR", ...updateRes });
  } catch (error) {
    console.log(error);
    console.log(error);
    return res.json({ status: false, message: "DBError", error });
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    let id = req.params.id;

    if (!id) return res.json({ status: false, message: "Id not available" });

    let deleteRes = await taskService.deleteTaskService(id);

    if (deleteRes?.status)
      return res.json({ ...deleteRes, message: "Success" });
    else return res.json({ message: "DB_ERROR", ...deleteRes });
  } catch (error) {
    console.log(error);
    console.log(error);
    return res.json({ status: false, message: "DBError", error });
  }
};
