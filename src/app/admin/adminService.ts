import { UserModel } from "../user/userModel";
import { TUpdateUserRole } from "./adminInterface";

const updateUserRole = async (_Id: string, payload: TUpdateUserRole) => {
    const updatedUser = await UserModel.findByIdAndUpdate(
        _Id,
        { role: payload.role },
        { new: true }
    );

    if (!updatedUser) {
        throw new Error('User not updated');
    }

    return updatedUser;
}

export const AdminService = {
    updateUserRole
};

