import { useEffect, useState } from "react";
import { LogoLink } from "../logo-link";
import { NavLinks } from "../nav-link";
import { SButton, SMenu } from "./styles";
import { Close, Menu as MenuIcon } from "@styled-icons/material-outlined";
import { useStore } from "zustand";
import { useUserStore } from "../../store/user-store/state";

type MenuProps = {
  windowSmall: boolean;
};

export const Menu = ({ windowSmall }: MenuProps) => {
  const [visible, setVisible] = useState(false);
  const store = useStore(useUserStore);

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
          image="/images/logo_ifrs.png"
          text="LOGO"
        ></LogoLink>
        <NavLinks
          onClick={() => setVisible((v) => !v)}
          links={
            store.user?.isAdmin
              ? [
                  { link: "/add-item", children: "Adicionar" },
                  { link: "/remove-item", children: "Remover" },
                  { link: "/requests", children: "Solicitar compra" },
                ]
              : []
          }
        ></NavLinks>
      </SMenu>
    </>
  );
};
