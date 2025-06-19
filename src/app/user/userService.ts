import { Utils } from "../config/Utils";
import { TUser } from "./userInterface";
import { UserModel } from "./userModel";

const createUserIntoDB = async (user: TUser) => { //create a user
    const hashedPassword = await Utils.hashPassword(user.password);
    user.password = hashedPassword;
    const result = await UserModel.create(user);
    return result;
};

const getAllUsersFromDB = async () => { //get all data from database
    const result = await UserModel.find();
    return result;
}

const getOneUserFromDB = async (_id: string) => { //get single user data from databae
    const result = await UserModel.find({ _id });
    return result;
}

export const UserServices = {
    createUserIntoDB,
    getAllUsersFromDB,
    getOneUserFromDB
}