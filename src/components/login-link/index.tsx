import { Link } from "react-router-dom";
import { SLoginLink } from "./styled";
import { useUserStore } from "../../store/user-store/state";

export const LoginLink = () => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        ""
      ) : (
        <SLoginLink>
          <div className="login">
            <Link to="/login">Entrar</Link>
          </div>
          <div className="register">
            <Link to="/register">Criar conta</Link>
          </div>
        </SLoginLink>
      )}
    </>
  );
};
