import { ItemType } from "./item";
import { User } from "./user";

export type StateType = {
  isLoggedIn: boolean;
  toggleIsLoggedIn: (value: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  items: ItemType[];
  addItem: (item: ItemType) => void;
  removeItem: (item: ItemType) => void;

  requests: ItemType[];
  addRequest: (item: ItemType) => void;
  removeRequest: (item: ItemType) => void;
};
