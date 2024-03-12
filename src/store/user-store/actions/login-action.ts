import { ActionFunction, redirect } from "react-router-dom";
import { LoginFormError } from "./errors/login-form-error";
import isEmail from "validator/lib/isEmail";
import { logUser } from "../../../api/auth/login";

export const logUserAction: ActionFunction = async ({ request }) => {
  // valida os dados
  const validate = (email: string, password: string) => {
    const errors = [];

    if (!isEmail(email)) {
      errors.push(new LoginFormError("Email inválido.", "email"));
    }

    if (password.length < 4 || password.length > 255) {
      errors.push(new LoginFormError("A senha deve ter entre 4 e 255 caracteres.", "password"));
    }

    return errors;
  };

  // dados do formulário
  const formData = await request.formData();

  // dados formatados
  const userLoginData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  // Se houver erros, ele os retorna
  const errors = validate(userLoginData.email, userLoginData.password);
  if (errors.length > 0) {
    return errors;
  }

  // tenta logar o usuário, se não der retornará um erro que será exibido no formulário
  const requestErrors = await logUser(userLoginData);

  if (requestErrors.length > 0) {
    return requestErrors;
  }
  return redirect("/");
};
