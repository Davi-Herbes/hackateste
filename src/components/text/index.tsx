import { SText } from "./styles";

export type TextProps = {
  children: string;
  colorDark?: boolean;
};

export const TextComponent = ({ children, colorDark }: TextProps) => {
  return <SText colorDark={colorDark}>{children}</SText>;
};
