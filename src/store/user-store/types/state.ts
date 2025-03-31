import { User } from "./user";

export type UserStateType = {
  user: User | null;
  setUser: (user: User | null) => void;
};
