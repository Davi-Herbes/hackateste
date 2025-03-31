import { User } from "../../../store/user-store/types/user";

export class LoginError {
  constructor(
    public status: number,
    public data: { message: string; field?: "email" | "password" },
  ) {}
}

export class LoginSuccess {
  constructor(
    public status: number,
    public data: User,
  ) {}
}
