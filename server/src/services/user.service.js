import { User } from "../model/user.js";

export const createUserService = async (userObj) => {
  try {
    const user = new User({
      ...userObj,
    });

    return { status: true, data: await user.save() };
  } catch (error) {
    return { status: false, error };
  }
};

export const getUserService = async (email) => {
  try {
    let data = await User.findOne({ email });

    if (data) return { status: true, message: "Success", data };

    return { status: false, message: "User Not Found" };
  } catch (error) {
    return { status: false, message: "DB Error", error };
  }
};

export const updateUserService = async (email, updateObj) => {
  try {
    let updateRes = User.findOneAndUpdate({ email }, { ...updateObj });

    if (updateRes) return { status: true, message: "Success", data: updateRes };

    return { status: false, message: "User Not Found" };
  } catch (error) {
    return { status: false, message: "DB Error", error };
  }
};

export const deleteUserService = async (email) => {
  try {
    let deleteRes = User.findOneAndDelete({ email });

    if (deleteRes) return { status: true, message: "Success" };

    return { status: false, message: "User Not Found" };
  } catch (error) {
    return { status: false, message: "DB Error", error };
  }
};
