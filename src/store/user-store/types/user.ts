export type User = {
  email: string;
  username: string;
  role: "student" | "supervisor" | "monitor";
  exp?: number;
  iat?: number;
};
