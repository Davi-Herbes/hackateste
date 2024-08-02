import logo_stock_sync from "/images/logo_stock_sync.png";
import { IntroStyle } from "./styles";

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
    </IntroStyle>
  );
};
