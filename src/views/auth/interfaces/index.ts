interface AuthUser {
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

export interface UserResponse {
  accessToken: string;
  refreshToken: string;
  user: AuthUser;
}
