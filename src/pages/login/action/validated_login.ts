import { isEmail } from "validator";
import { LoginErrors } from "./login_errors";
import { LoginFormData } from "./types/form_data";

export class ValidatedLogin {
  public isValid: boolean = true;
  public loginErrors: LoginErrors = new LoginErrors();

  constructor(public loginFormData: LoginFormData) {
    const { email, password } = loginFormData;

    if (!isEmail(email)) {
      this.loginErrors.email.push("Email inválido");
      this.isValid = false;
    } else if (!email.match(/@*feliz.ifrs.edu.br/)) {
      this.loginErrors.email.push("Necessário email institucional");
      this.isValid = false;
    }

    if (password.length < 3 || password.length > 255) {
      this.loginErrors.password.push("A senha deve ter entre 3 e 255 caracteres.");
      this.isValid = false;
    }
  }
}
