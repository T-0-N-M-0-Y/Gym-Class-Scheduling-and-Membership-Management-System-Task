export type TLoginUser = {
  email: string;
  password: string;
};

export type TLoginResponse = {
  accessToken: string;
  user: {
    _id: string;
    role: 'admin' | 'trainer' | 'trainee';
    email: string;
  };
};
