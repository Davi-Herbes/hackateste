import { AxiosError } from "axios";
import { LoginFormData } from "../../pages/login/action/types/form_data";
import { axios } from "../axios";
import { LoginError, LoginSuccess } from "./types/login_response";

export const logUser = async (userData: LoginFormData): Promise<LoginError | LoginSuccess> => {
  try {
    const response = await axios.post("/auth/login", userData);

    return new LoginSuccess(response.status, response.data.userData);
  } catch (e) {
    if (e instanceof AxiosError) {
      return new LoginError(e.status ?? 500, e.response?.data);
    }

    return new LoginError(500, { message: "Internal server error." });
  }
};
