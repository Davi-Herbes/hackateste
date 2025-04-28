import logo_stock_sync from "/images/logo_stock_sync.png";
import login_img from "/images/login.svg";
import register_img from "/images/user-add.svg";
import { IntroStyle } from "./styles";
import { Link } from "react-router-dom";

export const IntroSection = () => {
  return (
    <IntroStyle>
      <div className="intro-container">
        <div>
          <h1 className="page-title">StockSync</h1>
        </div>
        <div>
          <img src={logo_stock_sync} />
        </div>
      </div>
      <div className="text">O Gerenciador de Recursos do Campus Feliz</div>
      <div className="authentication-links-container">
        <div className="link-container">
          <Link to="/auth/register" className="register-link">
            Registrar-se
          </Link>
          {/* <span className="link-description">Ainda não tem uma conta?</span> */}
        </div>
        <div className="link-container">
          <Link to="/auth/login" className="login-link">
            Entrar
          </Link>
          {/* <span className="link-description">Acesse sua conta:</span> */}
        </div>
      </div>
    </IntroStyle>
  );
};
