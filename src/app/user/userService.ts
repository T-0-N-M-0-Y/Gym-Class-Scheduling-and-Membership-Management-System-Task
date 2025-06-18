import { User } from "./userInterface";
import { UserModel } from "./userModel";

const createUserIntoDB = async (user: User) => { //create a user
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