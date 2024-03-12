import { AssessmentStars } from "../assesment-stars";
import { SProduct } from "./styles";

type ProductProps = {
  title: string;
  price: number;
  category: string;
  imageUrl: string;
  assessment: number;
};

export const Product = ({ title, imageUrl, assessment, price }: ProductProps) => {
  return (
    <SProduct>
      <img src={imageUrl} alt="product image" />
      <h2>{title}</h2>
      <div>
        <AssessmentStars assessment={assessment}></AssessmentStars>
        <div>{price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</div>
      </div>
    </SProduct>
  );
};
