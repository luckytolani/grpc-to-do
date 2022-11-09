import { Task } from "../model/task.js";

export const createTaskService = async (taskObj) => {
  try {
    const task = new Task({
      ...taskObj,
    });
    return { status: true, data: await task.save() };
  } catch (error) {
    return { status: false, error };
  }
};

export const getTaskService = async (filter) => {
  try {
    let data = await Task.find({ ...filter });

    if (data) return { status: true, message: "Success", data };

    return { status: false, message: "Task Not Found" };
  } catch (error) {
    return { status: false, message: "DB Error", error };
  }
};

export const updateTaskService = async (updateObj) => {
  try {
    let updateRes = await Task.findOneAndUpdate(
      { _id: updateObj._id },
      { ...updateObj }
    );
    if (updateRes)
      return {
        status: true,
        message: "Success",
      };

    return { status: false, message: "Task Not Found" };
  } catch (error) {
    console.log(789);
    return { status: false, message: "DB Error", error };
  }
};

export const deleteTaskService = async (id) => {
  try {
    let deleteRes = await Task.deleteOne({ id });

    console.log(deleteRes);

    if (deleteRes.deletedCount) return { status: true, message: "Success" };

    return { status: false, message: "Task not Founds" };
  } catch (error) {
    return { status: false, message: "DB Error", error };
  }
};
