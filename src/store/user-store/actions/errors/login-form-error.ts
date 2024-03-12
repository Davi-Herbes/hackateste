export class LoginFormError extends Error {
  constructor(
    public message: string,
    public field: "password" | "email",
  ) {
    super(message);
  }
}
