import { ReactNode } from "react";
import { MenuLink } from "../menu-link";
import { SNavLink } from "./styles";
import { LoginLink } from "../login-link";

export type NavLinksProps = {
  children?: string;
  onClick?: () => void;
  links: {
    children: ReactNode;
    link: string;
    newTab?: boolean;
  }[];
};

export const NavLinks = ({ links, onClick }: NavLinksProps) => {
  return (
    <SNavLink onClick={onClick}>
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
      <LoginLink></LoginLink>
    </SNavLink>
  );
};
