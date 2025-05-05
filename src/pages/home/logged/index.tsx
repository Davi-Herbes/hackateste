import { useStore } from "zustand";
import { useUserStore } from "../../../store/user-store/state";
import { SLoggedHome } from "./styles";
import { StudentPage } from "./student";

export const LoggedHome = () => {
  const userStore = useStore(useUserStore);

  const homeByRole = {
    student: <StudentPage></StudentPage>,
    supervisor: "",
    monitor: "",
    default: "",
  };

  return <SLoggedHome>{homeByRole[userStore.user?.role ?? "default"]}</SLoggedHome>;
};
