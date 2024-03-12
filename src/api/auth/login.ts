import { axios } from "../../services/axios";
import { useUserStore } from "../../store/user-store/state";
import { User } from "../../store/user-store/types/user";
import { LoginFormError } from "../../store/user-store/actions/errors/login-form-error";

export const logUser = async (userLoginData: {
  email: string;
  password: string;
}): Promise<LoginFormError[]> => {
  try {
    await axios.post("/auth/login", userLoginData);
    const { data } = await axios.get<{ user: User }>("/auth/profile");

    const { toggleIsLoggedIn, setUser } = useUserStore.getState();

    toggleIsLoggedIn(true);
    setUser(data.user);
    return [];
  } catch (e) {
    // Pega o erro e retorna
    // @ts-ignore
    const { message, field } = e.response.data as {
      message: string;
      field: ("password" | "email")[] | undefined;
    };

    return [new LoginFormError(message, field ? field[0] : "password")];
  }
};
