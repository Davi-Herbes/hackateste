import { ReactNode } from "react";
import { SLogoLink } from "./styles";
import { Title } from "../title";
import { Link } from "react-router-dom";

export type LogoLinkProps = {
  children?: ReactNode;
  link: string;
  text: string;
  onClick?: () => void;
  image?: string;
};

export const LogoLink = ({ link, image, text, onClick }: LogoLinkProps) => {
  return (
    <SLogoLink onClick={onClick}>
      <Link to={link}>
        {image ? <img src={image} alt={text} /> : <Title size="medium">{text}</Title>}
      </Link>
    </SLogoLink>
  );
};
