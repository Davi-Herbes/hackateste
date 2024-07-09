import { ActionFunction, redirect } from "react-router-dom";
import { RegisterFormError } from "./errors/register-form-error";
import isEmail from "validator/lib/isEmail";
import { CreateUserData } from "../types/create-user-data";
// import { useStore } from "zustand";
import { useUserStore } from "../state";
import { admins } from "../../../utils/admins";
export const loginAction: ActionFunction = async ({ request }) => {
  console.log("OPA");
  const validate = ({ username, email, password }: CreateUserData) => {
    const errors = [];

    if (!username || username.length < 4 || username.length > 255) {
      errors.push(
        new RegisterFormError("O nome de usuário deve ter entre 4 e 255 caracteres.", "username"),
      );
    }

    if (!email || !isEmail(email)) {
      errors.push(new RegisterFormError("Email inválido.", "email"));
    }

    if (!password || password.length < 8 || password.length > 255) {
      errors.push(
        new RegisterFormError("A senha do usuário deve ter entre 8 e 255 caracteres.", "password"),
      );
    }

    return { errors };
  };

  const formData = await request.formData();
  const createUserData = {
    username: formData.get("username") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { errors } = validate(createUserData);

  if (errors.length > 0) {
    return errors;
  }

  useUserStore.getState().setUser({
    email: createUserData.email,
    username: createUserData.username,
    isAdmin: admins.includes(createUserData.email),
    req: [],
  });
  useUserStore.getState().toggleIsLoggedIn(true);
  return redirect("/");
};
