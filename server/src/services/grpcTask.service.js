import { Task } from "../model/task.js";

export const grpcGetTask = (_input, callback) => {
  Task.find({})
    .then((res) => {
      callback(null, { tasks: res });
    })
    .catch((err) => {
      callback(err, null);
    });
};

export const grpcCreateTask = (input, callback) => {
  try {
    const tempTask = {
      label: input?.request?.label,
    };
    const task = new Task({
      ...tempTask,
    });

    task
      .save()
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err, null);
      });
  } catch (error) {
    callback(error, null);
  }
};

export const grpcUpdateTask = (input, callback) => {
  try {
    let updateObj = {
      ...(input?.request || {}),
    };

    Task.findOneAndUpdate({ _id: updateObj._id }, { ...updateObj })
      .then((res) => {
        callback(null, { status: true });
      })
      .catch((err) => {
        callback(err, null);
      });
  } catch (error) {
    callback(error, null);
  }
};

export const grpcDeleteTask = (input, callback) => {
  try {
    let _id = input?.request?._id;

    Task.findOneAndDelete({ _id })
      .then((res) => {
        callback(null, { status: true });
      })
      .catch((err) => {
        callback(err, null);
      });
  } catch (error) {
    callback(error, null);
  }
};
