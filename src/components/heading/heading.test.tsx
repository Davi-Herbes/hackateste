import "@testing-library/jest-dom";
import { Heading } from ".";
import { renderTheme } from "../../utils/render-theme";
import { screen } from "@testing-library/react";
import { theme } from "../../styles/theme";
import { provideTheme } from "../../utils/provide-theme";

describe("<Heading />", () => {
  it("should render with default values", () => {
    renderTheme(<Heading size="huge">texto</Heading>);

    // name é o que tem dentro do componente
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      "font-size": theme.font.sizes.xhuge,
      "text-transform": "none",
    });
  });

  it("should render with white colors", () => {
    renderTheme(
      <Heading size="huge" colorDark={true}>
        texto
      </Heading>,
    );

    // name é o que tem dentro do componente
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      color: theme.colors.secondaryColor,
    });
  });

  it("should render correct heading sizes", () => {
    const { rerender } = renderTheme(<Heading size="small">texto</Heading>);

    // name é o que tem dentro do componente
    const heading = () => screen.getByRole("heading", { name: "texto" });

    expect(heading()).toHaveStyle({
      "font-size": theme.font.sizes.medium,
    });

    rerender(provideTheme(<Heading size="big">texto</Heading>));

    expect(heading()).toHaveStyle({
      "font-size": theme.font.sizes.xlarge,
    });

    rerender(provideTheme(<Heading size="medium">texto</Heading>));

    expect(heading()).toHaveStyle({
      "font-size": theme.font.sizes.large,
    });
  });
});
