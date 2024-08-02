import { User } from "./user";

export type StateType = {
  isLoggedIn: boolean;
  toggleIsLoggedIn: (value: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
};
