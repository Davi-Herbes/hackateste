import { useState } from "react";
import { SItem } from "./styles";

type ItemProps = {
  text: string;
  callback?: () => void;
  title: string;
  qtd: number;
  imageUrl: string;
};

export const Item = ({ title, imageUrl, text, qtd, callback }: ItemProps) => {
  const [btnTxt, setBtnTxt] = useState(text);
  return (
    <SItem>
      <img src={imageUrl} alt="product image" />
      <h2>{title}</h2>
      <div>
        <div>Em estoque: {qtd}</div>
      </div>
      <button
        onClick={() => {
          callback ? callback() : setBtnTxt("Solicitado");
        }}
      >
        {btnTxt}
      </button>
    </SItem>
  );
};
