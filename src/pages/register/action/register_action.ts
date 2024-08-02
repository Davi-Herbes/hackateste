import { ActionFunction } from "react-router-dom";
import { ValidatedRegister } from "./validated_register";
import { requestRegistration } from "../../../api/user/request_registration";

export const registerAction: ActionFunction = async ({ request }): Promise<ValidatedRegister> => {
  const formData = await request.formData();

  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const userData = { username, email, password };

  const validatedRegister = new ValidatedRegister(userData);

  if (!validatedRegister.isValid) {
    return validatedRegister;
  }

  const response = await requestRegistration(userData);

  if (response.status !== 200) {
    validatedRegister.isValid = false;
    validatedRegister.registerErrors[response.data.field ?? "password"].push(response.data.message);
  }

  return validatedRegister;
};
