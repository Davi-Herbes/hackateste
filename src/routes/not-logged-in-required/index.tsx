import { ReactNode, useEffect } from "react";
import { useGlobalStore } from "../../store/page-store/state";
import { useNavigate } from "react-router-dom";

export const NotLoggedInRequired = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useGlobalStore();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, []);

  return <>{children}</>;
};
