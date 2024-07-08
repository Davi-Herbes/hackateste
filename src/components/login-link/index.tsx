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
          <div className="register">
            <Link to="/login">Entrar</Link>
          </div>
        </SLoginLink>
      )}
    </>
  );
};
