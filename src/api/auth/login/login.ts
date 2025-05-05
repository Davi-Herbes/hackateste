import { AxiosError } from "axios";
import { axios } from "../../axios";
import { LoginError, LoginSuccess } from "./types/login_response";
import { LoginFormData } from "../../../pages/auth/login/action/types/form_data";
import { UserDataSchema } from "../../../store/user-store/types/user_data.schema";

export const logUser = async (userData: LoginFormData): Promise<LoginError | LoginSuccess> => {
  try {
    const response = await axios.post("/auth/login", userData);

    const parsedUserData = UserDataSchema.parse(response.data.userData);

    return new LoginSuccess(response.status, parsedUserData);
  } catch (e) {
    if (e instanceof AxiosError) {
      return new LoginError(e.status || 500, e.response?.data);
    }

    return new LoginError(500, { message: "Internal server error." });
  }
};
