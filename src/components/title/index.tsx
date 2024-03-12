import { STitle } from "./styles";

export type TitleProps = {
  children: string;
  size: "small" | "medium" | "big" | "huge";
};

export const Title = ({ size, children }: TitleProps) => {
  return <STitle size={size}>{children}</STitle>;
};
