import { LogoLink } from "../logo-link";
import { NavLinks } from "../nav-link";
import { SButton, SMenu } from "./styles";
import { useStore } from "zustand";
import { useUserStore } from "../../store/user-store/state";
import logoIfrs from "/images/logo_ifrs.png";
import { LoginLink } from "../login-link";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Menu = () => {
  const store = useStore(useUserStore);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setVisible(false);
    switch (location.pathname) {
      case "/":
        setVisible(true);
      case "/profile":
        setVisible(true);
    }
  }, [location.pathname]);

  return (
    <>
      {visible ? (
        <>
          <SButton></SButton>
          <SMenu visible={visible}>
            <LogoLink link="/" image={logoIfrs} text="LOGO"></LogoLink>
            <NavLinks
              links={
                store.user?.role === "monitor"
                  ? [
                      { link: "/add-item", children: "Adicionar" },
                      { link: "/remove-item", children: "Remover" },
                      { link: "/requests", children: "Solicitar compra" },
                    ]
                  : []
              }
            ></NavLinks>
            <LoginLink />
          </SMenu>
        </>
      ) : (
        <> </>
      )}
    </>
  );
};
