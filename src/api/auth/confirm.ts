import { useUserStore } from "../../store/user-store/state";
import { User } from "../../store/user-store/types/user";
import { axios } from "../axios";

export const confirmUser = async (token: string) => {
  try {
    const response = await axios.get("/auth/confirm", { headers: { "confirm-token": token } });

    const { username, email, role } = response.data.userData as User;

    useUserStore.getState().setUser({ username, email, role });
    useUserStore.getState().toggleIsLoggedIn(true);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
