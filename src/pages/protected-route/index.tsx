import { ReactNode } from "react";
import { useUserStore } from "../../store/user-store/state";
import { SProtectedRoute } from "./styles";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  return <>{isLoggedIn ? <SProtectedRoute>Não autorizado</SProtectedRoute> : children}</>;
};
