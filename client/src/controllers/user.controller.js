import * as userService from "../services/user.service.js";

export const createUser = async (req, res, next) => {
  let createRes = await userService.createUserService({
    email: "lucky",
    name: "lucky",
    age: 34,
    password: "dfghjk",
  });
  if (createRes?.status) return res.json({ ...createRes, message: "Success" });
  else return res.json({ ...createRes, message: "DB_ERROR" });
};

export const getUser = (_req, _res, _next) => {};
