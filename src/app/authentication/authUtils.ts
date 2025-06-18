import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const generateToken = (payload: object, secret: string, expiresIn: string) => {
    return jwt.sign(payload, secret, { expiresIn: expiresIn as any });
};

const verifyToken = (token: string, secret: string) => {
    return jwt.verify(token, secret);
};

const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = Number(process.env.BCRYPT_SALT_ROUNDS) || 10;
    return await bcrypt.hash(password, saltRounds);
};

const comparePassword = async (
    plainPassword: string,
    hashedPassword: string
): Promise<boolean> => {
    return await bcrypt.compare(plainPassword, hashedPassword);
};

export const AuthUtils = {
    generateToken,
    verifyToken,
    hashPassword,
    comparePassword,
};