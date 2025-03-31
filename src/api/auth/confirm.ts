import { useGlobalStore } from "../../store/page-store/state";
import { useUserStore } from "../../store/user-store/state";
import { User } from "../../store/user-store/types/user";
import { axios } from "../axios";

export const confirmUser = async (code: number) => {
  try {
    const response = await axios.post(
      "/auth/confirm",
      {
        code,
      },
      {
        withCredentials: true,
      },
    );

    const { username, email, role } = response.data.userData as User;

    useUserStore.getState().setUser({ username, email, role });
    useGlobalStore.getState().toggleIsLoggedIn(true);

    console.log(response);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
