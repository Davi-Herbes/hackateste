import { Link } from "react-router-dom";
import { SLoginLink } from "./styled";
import { useUserStore } from "../../store/user-store/state";
import { useStore } from "zustand";

export const LoginLink = () => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const store = useStore(useUserStore);

  const handleLogout = () => {
    store.setUser(null);
    store.toggleIsLoggedIn(false);
  };
  return (
    <>
      {isLoggedIn ? (
        <SLoginLink>
          <div className="register">
            <Link onClick={handleLogout} to="/">
              Sair
            </Link>
          </div>
        </SLoginLink>
      ) : (
        <SLoginLink>
          <div className="register">
            <Link to="/login">Entrar</Link>
          </div>
        </SLoginLink>
      )}
    </>
  );
};
