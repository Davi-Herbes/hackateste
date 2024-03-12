import { useNavigate } from "react-router-dom";
import { logout } from "../../api/auth/logout";
import { useEffect } from "react";

export const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    logout().then(() => navigate("/"));
  }, []);

  return <></>;
};
