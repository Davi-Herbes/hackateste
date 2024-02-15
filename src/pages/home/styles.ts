import styled from "styled-components";
import { ThemeType } from "../../styles/types/theme-type";

type WrapperProps = { theme: ThemeType; darkMode?: boolean };

export const Wrapper = styled.div<WrapperProps>`
  background-color: ${({ theme, darkMode }) =>
    darkMode ? theme.colors.bgDark : theme.colors.bgWhite};
`;
