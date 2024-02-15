import { ReactNode } from "react";
import { SHeading } from "./styles";
import { Titles } from "../../styles/types/style-types";

export type HeadingProps = {
  children: ReactNode;
  colorDark?: boolean;
  as?: Titles;
  size: "small" | "medium" | "big" | "huge";
  uppercase?: boolean;
};

export const Heading = ({
  children,
  colorDark,
  as,
  size,
  uppercase,
}: HeadingProps) => {
  return (
    <SHeading as={as} colorDark={colorDark} size={size} uppercase={uppercase}>
      {children}
    </SHeading>
  );
};
