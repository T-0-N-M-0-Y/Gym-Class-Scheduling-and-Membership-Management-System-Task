import { ApiError } from "../../apiError";
import { UserModel } from "../user/userModel";
import { TUpdateUserRole } from "./adminInterface";

const updateUserRole = async (userId: string, payload: TUpdateUserRole) => {
    const updatedUser = await UserModel.findByIdAndUpdate(
        userId,
        { role: payload.role },
        { new: true }
    );
    if (!updatedUser) {
        throw new ApiError(403, `User not found or not updated. ID: ${userId}`);
    }
    return updatedUser;
}

export const AdminService = {
    updateUserRole
};

