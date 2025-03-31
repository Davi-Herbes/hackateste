import { AxiosError } from "axios";
import { axios } from "../axios";
import { RegisterResponse } from "./types/register_response";
import { RegisterFormData } from "../../pages/register/action/types/register_form_data";

export const requestRegistration = async (
  userData: RegisterFormData,
): Promise<RegisterResponse> => {
  try {
    const response = await axios.post("/users", userData, { withCredentials: true });

    return { status: response.status, data: { message: response.data.message } };
  } catch (e) {
    if (e instanceof AxiosError) {
      return {
        status: e.status ?? 500,
        data: { message: e.response?.data.message, field: e.response?.data.field },
      };
    }
    return { status: 500, data: { message: "Deu erro no servidor." } };
  }
};
