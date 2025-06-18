import config from "../config";
import { UserModel } from "../user/userModel";
import { AuthUtils } from "./authUtils";

const loginUser = async (email: string, password: string) => {
    const user = await UserModel.findOne({ email });

    if (!user) { throw new Error('User not found'); }

    const isPasswordMatch = await AuthUtils.comparePassword(password, user.password);

    if (!isPasswordMatch) { throw new Error('Invalid credentials'); }

    const token = AuthUtils.generateToken(
        { id: user._id, role: user.role },
        config.secret_key!,
        config.expire_time || '1d'
    );

    return {
        accessToken: token,
        user: {
            id: user._id,
            email: user.email,
            name: user.name,
            role: user.role,
        },
    };
};

export const AuthService = {
    loginUser,
};