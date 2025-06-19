import bcrypt from 'bcrypt';
import config from '.';

const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = Number(config.bcrypt_salt_rounds) || 10;
    return await bcrypt.hash(password, saltRounds);
};

const comparePassword = async (plainPassword: string, hashedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(plainPassword, hashedPassword);
};

export const Utils = {
    hashPassword,
    comparePassword,
};