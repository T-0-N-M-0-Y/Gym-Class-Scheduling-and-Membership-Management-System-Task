import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import config from '../config';

const generateToken = (payload: string | object, secret: string, expiresIn: string | number) => {
    return jwt.sign(payload, secret, { expiresIn: expiresIn as any});
};

const verifyToken = (token: string, secret: string) => {
    return jwt.verify(token, secret);
};

const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = Number(config.bcrypt_salt_rounds) || 10;
    return await bcrypt.hash(password, saltRounds);
};

const comparePassword = async (plainPassword: string, hashedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(plainPassword, hashedPassword);
};

export const AuthUtils = {
    generateToken,
    verifyToken,
    hashPassword,
    comparePassword,
};