import { useStore } from "zustand";
import { SStudent } from "./styles";
import { useUserStore } from "../../../../store/user-store/state";

export const StudentPage = () => {
  const userStore = useStore(useUserStore);

  return (
    <SStudent>
      <h1>Bem vindo(a), {userStore.user?.username}</h1>
    </SStudent>
  );
};
