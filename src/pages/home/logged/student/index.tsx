import { useStore } from "zustand";
import { SStudent } from "./styles";
import { useUserStore } from "../../../../store/user-store/state";

export const StudentPage = () => {
  const userStore = useStore(useUserStore);
  console.log(userStore);

  return (
    <SStudent>
      <h1>asdf</h1>
    </SStudent>
  );
};
