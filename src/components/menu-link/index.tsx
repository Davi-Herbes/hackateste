import { ReactNode } from "react";
import { SMenuLink } from "./styles";
import { Link } from "react-router-dom";

export type MenuLinkProps = {
  children: ReactNode;
  link: string;
  newTab?: boolean;
};

export const MenuLink = ({ children, link, newTab }: MenuLinkProps) => {
  const target = newTab ? "_blank" : "_self";

  return (
    <SMenuLink>
      <Link to={link} target={target}>
        {children}
      </Link>
    </SMenuLink>
  );
};
