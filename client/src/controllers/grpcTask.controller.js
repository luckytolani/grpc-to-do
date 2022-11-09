import { client } from "../sync.js";

export const createTask = async (req, res, next) => {
  try {
    let taskObj = req.body;

    let resp = await client.CreateTask(taskObj);

    if (resp) return res.json({ status: true, message: "Success", data: resp });
  } catch (error) {
    return res.json({ status: false, message: "DBError", error });
  }
};

export const getTask = async (req, res, next) => {
  try {
    let resp = await client.GetTask({});

    if (resp?.tasks)
      return res.json({ status: true, message: "Success", data: resp?.tasks });

    return res.json({ status: false, message: "error", error: resp });
  } catch (error) {
    console.log(error);
    return res.json({ status: false, message: "DBError", error });
  }
};

export const updateTask = async (req, res, next) => {
  try {
    if (!req?.body?._id)
      return res.json({ status: false, message: "Id not available" });

    let resp = await client.UpdateTask({ ...(req?.body || {}) });

    if (resp?.status) {
      let data = await client.GetTask({});
      if (data?.tasks)
        return res.json({
          status: true,
          message: "Success",
          data: data?.tasks,
        });
    }

    return res.json({ status: false, message: "error", error: resp });
  } catch (error) {
    return res.json({ status: false, message: "DBError", error });
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    let id = req.params.id;

    if (!id) return res.json({ status: false, message: "Id not available" });

    let resp = await client.DeleteTask({
      _id: id,
    });

    if (resp?.status) return res.json({ status: true, message: "success" });

    return res.json({ status: false, message: "error", error: resp });
  } catch (error) {
    return res.json({ status: false, message: "DBError", error });
  }
};
