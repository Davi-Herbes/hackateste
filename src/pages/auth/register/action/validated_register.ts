import { isEmail } from "validator";
import { RegisterErrors } from "./register_errors";
import { RegisterFormData } from "./types/register_form_data";

export class RegisterValidator {
  public isValid: boolean = true;
  public registerErrors: RegisterErrors = new RegisterErrors();

  constructor(public registerFormData: RegisterFormData) {
    const { username, email, password } = registerFormData;

    if (username.length < 3 || username.length > 255) {
      this.registerErrors.username.push("Nome deve ter entre 3 e 255 caracteres.");
      this.isValid = false;
    }

    if (!isEmail(email)) {
      this.registerErrors.email.push("Email inválido");
      this.isValid = false;
    }

    //
    // else if (!email.match(/@*feliz.ifrs.edu.br/)) {
    //   this.registerErrors.email.push("Necessário email institucional");
    //   this.isValid = false;
    // }

    if (password.length < 3 || password.length > 255) {
      this.registerErrors.password.push("A senha deve ter entre 3 e 255 caracteres.");
      this.isValid = false;
    }
  }
}
