export type User = {
  id: number;
  email: string;
};

export type UserWithoutId = Omit<User, 'id'>;
export type UserRegistrationForm = UserWithoutId & { password: string };
export type UserLoginForm = Omit<UserWithoutId, 'name'> & { password: string };
