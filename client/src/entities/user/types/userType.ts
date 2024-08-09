export type User = {
  id: number;
  email: string;
  isAdmin: boolean;
};

export type UserWithoutId = Omit<User, 'id'>;
export type UserRegistrationForm = UserWithoutId & { password: string };
