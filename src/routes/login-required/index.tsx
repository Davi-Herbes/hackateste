import { ReactNode } from "react";
import { SLoginRequired } from "./styles";
import { useGlobalStore } from "../../store/page-store/state";

export const LoginRequired = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn } = useGlobalStore();

  return <>{isLoggedIn ? <SLoginRequired>Não autorizado</SLoginRequired> : children}</>;
};
