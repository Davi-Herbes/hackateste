import { ActionFunction } from "react-router-dom";
import { RegisterValidator } from "./validated_register";
import { RegistrationRequester } from "../../../../api/auth/register/request/request";
export const registerAction: ActionFunction = async ({ request }): Promise<RegisterValidator> => {
  const formData = await request.formData();

  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const userData = { username, email, password };

  const validatedRegister = new RegisterValidator(userData);

  if (!validatedRegister.isValid) {
    return validatedRegister;
  }

  validatedRegister.isValid = false;

  const registrationRequester = new RegistrationRequester(userData, validatedRegister);
  await registrationRequester.requestRegistration();

  return validatedRegister;
};
