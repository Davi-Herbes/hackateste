import { DefaultHome } from "./default";
import { LoggedHome } from "./logged";
import { useGlobalStore } from "../../store/page-store/state";

export const Home = () => {
  const { isLoggedIn } = useGlobalStore();

  return <>{isLoggedIn ? <LoggedHome /> : <DefaultHome />}</>;
};
