import type { User } from '../../user/types/userType';

export type Profile = {
  id: number;
  firstName: string;
  lastName: string;
  telegram: string;
  image: string;
  userId: number;
};


export type ProfileWithUser = Profile & { User: User[] };

export type ProfileWithoutId = Omit<Profile, 'id'>;

export type ProfileId = Profile['id'];
