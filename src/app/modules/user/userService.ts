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

const updateUserInDB = async (_id: string, updateData: Partial<TUser>) => {
    if (updateData.password) {
        updateData.password = await Utils.hashPassword(updateData.password);
    }
    const result = await UserModel.findOneAndUpdate({ _id }, updateData, { new: true });
    return result;
};


export const UserServices = {
    createUserIntoDB,
    getAllUsersFromDB,
    getOneUserFromDB,
    updateUserInDB
}