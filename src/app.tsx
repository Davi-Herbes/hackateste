import { Outlet } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.ts";
import { GlobalStyle } from "./styles/global.ts";
import { Menu } from "./components/menu/index.tsx";
import { PageContainer } from "./styles/page.ts";
import { useEffect, useState } from "react";

export const App = () => {
  const [windowSmall, setWindowSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowSmall((v) => !v);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Menu windowSmall={windowSmall} />
        <PageContainer>
          <Outlet />
        </PageContainer>
      </ThemeProvider>
    </>
  );
};
