import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { TLoginResponse, TLoginUser } from './authInterface';
import { UserModel } from '../user/userModel';
import config from '../config';

export const AuthService = {

    loginUser: async (payload: TLoginUser): Promise<TLoginResponse> => {
        const { email, password } = payload;

        const user = await UserModel.findOne({ email });
        if (!user) throw new Error('User not found');

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) throw new Error('Invalid credentials');

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
    },
};
