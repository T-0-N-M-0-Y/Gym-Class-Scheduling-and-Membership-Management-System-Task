import { ApiError } from "../../apiError";
import { Utils } from "../../Utils";
import { TUser } from "./userInterface";
import { UserModel } from "./userModel";

const createUserIntoDB = async (user: TUser) => {
    const hashedPassword = await Utils.hashPassword(user.password);
    user.password = hashedPassword;
    const result = await UserModel.create(user);
    return result;
};

const getAllUsersFromDB = async () => {
    const result = await UserModel.find();
    return result;
}

const getOneUserFromDB = async (_id: string) => {
    const result = await UserModel.find({ _id });
    return result;
}

const updateUserData = async (userId: string, payload: TUser) => {
    const updatedUser = await UserModel.findByIdAndUpdate(
        userId,
        { ...payload },
        { new: true, runValidators: true }
    );
    if (!updatedUser) {
        throw new ApiError(403, `User not found or not updated. ID: ${userId}`);
    }
    return updatedUser;
}

export const UserServices = {
    createUserIntoDB,
    getAllUsersFromDB,
    getOneUserFromDB,
    updateUserData
}