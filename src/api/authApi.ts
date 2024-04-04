import axiosInstance from './api';

export interface ILoginData {
  username: string;
  password: string;
}

export interface IVerifyTokenData {
  accessToken: string;
}

export interface IAuthUser {
  id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  fullName: string;
  role: 'supper_admin' | 'admin';
}

export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
  user: IAuthUser;
}

export const authApi = {
  login(data: ILoginData): Promise<ILoginResponse> {
    return axiosInstance.post('/auth/login', data);
  },
  verifyToken(data: IVerifyTokenData): Promise<IAuthUser> {
    return axiosInstance.post('/auth/verify-token', data);
  },
};
