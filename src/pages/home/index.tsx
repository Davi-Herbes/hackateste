import { useStore } from "zustand";
import { useUserStore } from "../../store/user-store/state";
import { DefaultHome } from "../../components/default-home";
import { LoggedHome } from "../../components/logged-home";

export const Home = () => {
  const userStore = useStore(useUserStore);
  return <>{userStore.isLoggedIn ? <LoggedHome /> : <DefaultHome />}</>;
};
