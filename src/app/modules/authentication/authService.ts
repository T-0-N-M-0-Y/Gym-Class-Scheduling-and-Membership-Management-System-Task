import jwt from 'jsonwebtoken';
import { TLoginResponse, TLoginUser } from './authInterface';
import { Utils } from '../../Utils';
import config from '../../config';
import { ApiError } from '../../apiError';
import { UserModel } from '../user/userModel';

const loginUser = async (payload: TLoginUser): Promise<TLoginResponse> => {
    const { email, password } = payload;

    const user = await UserModel.findOne({ email });
    if (!user) throw new ApiError(401, 'User not found');

    const isPasswordValid = await Utils.comparePassword(password, user.password);
    if (!isPasswordValid) throw new ApiError(403, 'Invalid credentials');

    const accessToken = jwt.sign(
        { _id: user._id, role: user.role, email: user.email },
        config.secret_key as string,
        { expiresIn: '10d' }
    );

    return {
        accessToken,
        user: {
            _id: user._id.toString(),
            role: user.role,
            email: user.email,
        },
    };
}

export const AuthService = {
    loginUser
};
