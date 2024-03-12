import { axios } from "../../services/axios";
import { useUserStore } from "../../store/user-store/state";

export const logout = async () => {
  await axios.delete("/auth/logout");

  const { toggleIsLoggedIn, setUser } = useUserStore.getState();

  toggleIsLoggedIn(false);
  setUser(null);

  return true;
};
