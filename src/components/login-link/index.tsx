import { Link, useLocation } from "react-router-dom";
import { SLoginLink } from "./styled";
import { useUserStore } from "../../store/user-store/state";
import { useStore } from "zustand";
import { useEffect, useState } from "react";

export const LoginLink = () => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const [visible, setVisible] = useState(true);
  const store = useStore(useUserStore);

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/login":
        setVisible(false);
    }
  }, []);

  const handleLogout = () => {
    store.setUser(null);
    store.toggleIsLoggedIn(false);
    setVisible(true);
  };
  return (
    <>
      {visible ? (
        isLoggedIn ? (
          <SLoginLink>
            <div className="register">
              <Link onClick={handleLogout} to="/">
                Sair
              </Link>
            </div>
          </SLoginLink>
        ) : (
          <SLoginLink>
            <div className="login">
              <Link to="/login">Entrar</Link>
            </div>
            <div className="register">
              <Link to="/register">Criar conta</Link>
            </div>
          </SLoginLink>
        )
      ) : (
        <> </>
      )}
    </>
  );
};
