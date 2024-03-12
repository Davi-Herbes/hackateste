import { screen } from "@testing-library/react";
import { TextComponent } from ".";
import { renderTheme } from "../../utils/render-theme";

describe("<Text />", () => {
  it("should render with default values", async () => {
    renderTheme(<TextComponent>texto</TextComponent>);
    expect(screen.getByText("texto")).toBeInTheDocument();
  });
});
