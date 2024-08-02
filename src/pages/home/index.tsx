import { useStore } from "zustand";
import { useUserStore } from "../../store/user-store/state";
import { DefaultHome } from "./default";
import { LoggedHome } from "./logged";

export const Home = () => {
  const userStore = useStore(useUserStore);
  return <>{userStore.isLoggedIn ? <LoggedHome /> : <DefaultHome />}</>;
};
