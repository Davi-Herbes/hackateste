import "@testing-library/jest-dom";
import { Home } from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<Home />", () => {
  it("should render with default values", () => {
    renderTheme(<Home />);
  });
});
