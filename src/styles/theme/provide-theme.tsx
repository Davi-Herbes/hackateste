import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

export const provideTheme = (children: ReactNode) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
