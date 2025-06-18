import { Schema, model } from 'mongoose';
import { User } from './userInterface';

const userSchema = new Schema<User>({
    name:
    {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        maxlength: 50,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    contactNo: {
        type: Number,
        required: true
    },
    profileImg: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'trainer', 'trainee'],
        required: true,
        default: 'trainee',
    },
},
    {
        timestamps: true,
    }
);

export const UserModel = model<User>('User', userSchema);