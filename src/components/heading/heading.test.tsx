import "@testing-library/jest-dom";
import { Heading } from ".";
import { renderTheme } from "../../styles/render-theme";
test("renders learn react link", () => {
  renderTheme(<Heading size="medium">ioa </Heading>);
});
