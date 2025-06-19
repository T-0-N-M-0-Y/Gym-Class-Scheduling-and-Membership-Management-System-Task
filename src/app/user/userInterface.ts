export type TUser = {
    name: string;
    email: string;
    password: string;
    contactNo: number;
    profileImg?: string;
    role: 'admin' | 'trainer' | 'trainee';
    createdAt: Date;
    updatedAt: Date;
}