import { SButton } from "./styles";

type ButtonProps = {
  children: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit" | undefined;
};

export const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <SButton className="botao" type={type} onClick={onClick}>
      {children}
    </SButton>
  );
};
