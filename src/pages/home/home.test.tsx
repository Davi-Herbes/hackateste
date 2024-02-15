import "@testing-library/jest-dom";
import { Home } from ".";
import { renderTheme } from "../../styles/render-theme";
test("renders learn react link", () => {
  renderTheme(<Home />);
});
