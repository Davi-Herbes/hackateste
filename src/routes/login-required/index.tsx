import { ReactNode } from "react";
import { useUserStore } from "../../store/user-store/state";
import { SLoginRequired } from "./styles";

export const LoginRequired = ({ children }: { children: ReactNode }) => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  return <>{isLoggedIn ? <SLoginRequired>Não autorizado</SLoginRequired> : children}</>;
};
