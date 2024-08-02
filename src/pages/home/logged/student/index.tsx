import { useStore } from "zustand";
import { SStudent } from "./styles";
import { useUserStore } from "../../../../store/user-store/state";
import { SideBar } from "../../../../components/side-bar";

export const StudentPage = () => {
  const userStore = useStore(useUserStore);

  return (
    <SStudent>
      <SideBar></SideBar>
      <h1>Bem vindo(a), {userStore.user?.username}</h1>
    </SStudent>
  );
};
