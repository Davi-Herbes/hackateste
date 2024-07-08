import { useStore } from "zustand";
import { useUserStore } from "../../store/user-store/state";
import { DefaultHome } from "../../components/default-home";

export const Home = () => {
  const userStore = useStore(useUserStore);
  return <>{userStore.isLoggedIn ? <h1>LOGADO</h1> : <DefaultHome />}</>;
};
