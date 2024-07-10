import { SDefaultHome } from "./styles";

export const DefaultHome = () => {
  return (
    <SDefaultHome>
      <div>
        <div>
          <h1 className="page-title">StockSync</h1>
        </div>
        <div>
          <img src="/images/logo_stok_sync.png" alt="StokSync" />
        </div>
      </div>
      <div className="text">O Gerenciador de Recursos do Campus Feliz</div>
    </SDefaultHome>
  );
};
