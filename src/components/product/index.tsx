import { SProduct } from "./styles";

type ProductProps = {
  title: string;
  qtd: number;
  category: string;
  imageUrl: string;
};

export const Product = ({ title, imageUrl, qtd }: ProductProps) => {
  return (
    <SProduct>
      <img src={imageUrl} alt="product image" />
      <h2>{title}</h2>
      <div>
        <div>Quantidade em estoque: {qtd}</div>
      </div>
    </SProduct>
  );
};
