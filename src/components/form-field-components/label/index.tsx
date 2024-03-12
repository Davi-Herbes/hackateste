import { LabelHTMLAttributes } from "react";
import { SLabel } from "./styles";

export const Label = ({
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) => {
  return <SLabel {...props}>{children}</SLabel>;
};
