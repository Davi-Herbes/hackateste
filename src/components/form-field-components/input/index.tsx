import { InputHTMLAttributes } from "react";
import { SInput } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...props }: InputProps) => {
  return (
    <>
      <SInput {...props}></SInput>
    </>
  );
};
