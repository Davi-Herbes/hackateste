import { useEffect, useState } from "react";
import { LogoLink } from "../logo-link";
import { NavLinks } from "../nav-link";
import { SButton, SMenu } from "./styles";
import { Close, Menu as MenuIcon } from "@styled-icons/material-outlined";

type MenuProps = {
  windowSmall: boolean;
};

export const Menu = ({ windowSmall }: MenuProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (windowSmall) {
      setVisible(false);
    }
  }, [windowSmall]);

  return (
    <>
      <SButton onClick={() => setVisible((v) => !v)}>{visible ? <Close /> : <MenuIcon />}</SButton>
      <SMenu visible={windowSmall ? visible : undefined}>
        <LogoLink
          onClick={() => setVisible((v) => !v)}
          link="/"
          image="./src/images/logo_ifrs.png"
          text="LOGO"
        ></LogoLink>
        <NavLinks
          onClick={() => setVisible((v) => !v)}
          links={[
            { link: "/login", children: "link" },
            { link: "/register", children: "link" },
            { link: "/logout", children: "link" },
          ]}
        ></NavLinks>
      </SMenu>
    </>
  );
};
