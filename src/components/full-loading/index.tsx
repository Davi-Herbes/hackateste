import { SFullLoading } from "./styles";
import loadingSvg from "/images/loading.svg";

export const FullLoading = () => {
  return (
    <SFullLoading>
      <img src={loadingSvg} alt="Carregando..." />
    </SFullLoading>
  );
};
