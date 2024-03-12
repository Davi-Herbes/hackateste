import { axios } from "../../services/axios";
import { RegisterFormError } from "../../store/user-store/actions/errors/register-form-error";
import { CreateUserData } from "../../store/user-store/types/create-user-data";
import { logUser } from "../auth/login";
import { useUserStore } from "../../store/user-store/state";
import { User } from "../../store/user-store/types/user";

export const register = async ({ username, email, password }: CreateUserData) => {
  try {
    const data: { user: User } = await axios.post("/users", { username, email, password });
    logUser({ email, password });

    const { toggleIsLoggedIn, setUser } = useUserStore.getState();

    toggleIsLoggedIn(true);
    setUser(data.user);

    return [];
  } catch (e) {
    // @ts-ignore
    const { message, field } = e.response.data as {
      message: string;
      field: ("password" | "email" | "username")[] | undefined;
    };

    return [new RegisterFormError(message, field ? field[0] : "password")];
  }
};
