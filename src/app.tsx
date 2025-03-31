import { Outlet } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme/theme.ts";
import { GlobalStyle } from "./styles/global.ts";
import { PageContainer } from "./styles/page.ts";

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PageContainer>
          <Outlet />
        </PageContainer>
      </ThemeProvider>
    </>
  );
};
