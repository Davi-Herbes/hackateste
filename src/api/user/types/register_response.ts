export type RegisterResponse = {
  status: number;
  data: { message: string; field?: "email" | "password" | "username" };
};
