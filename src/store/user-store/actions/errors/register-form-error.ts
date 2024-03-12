export class RegisterFormError extends Error {
  constructor(
    public message: string,
    public field: "password" | "email" | "username",
  ) {
    super(message);
  }
}
