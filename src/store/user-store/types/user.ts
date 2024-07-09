import { ItemType } from "./item";

export type User = {
  email: string;
  username: string;
  isAdmin: boolean;
  req: ItemType[];
  exp?: number;
  iat?: number;
};
