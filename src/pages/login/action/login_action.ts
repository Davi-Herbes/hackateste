import { ActionFunction } from "react-router-dom";
import { ValidatedLogin } from "./validated_login";
import { logUser } from "../../../api/auth/login";
import { useUserStore } from "../../../store/user-store/state";
import { LoginError } from "../../../api/auth/types/login_response";

export const loginAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const userData = { email, password };

  const validatedLogin = new ValidatedLogin(userData);

  if (!validatedLogin.isValid) {
    return validatedLogin;
  }

  const response = await logUser(userData);
  console.log(response);

  if (response instanceof LoginError) {
    validatedLogin.isValid = false;
    validatedLogin.loginErrors[response.data.field ?? "password"] = [response.data.message];
  } else {
    useUserStore.getState().setUser(response.data.userData);
    useUserStore.getState().toggleIsLoggedIn(true);
  }

  return validatedLogin;
};
