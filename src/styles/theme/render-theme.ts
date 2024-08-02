import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { provideTheme } from "./provide-theme";

export const renderTheme = (children: ReactNode) => {
  return render(provideTheme(children));
};
