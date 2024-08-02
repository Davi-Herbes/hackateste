import styled, { css } from "styled-components";
import { ThemeType } from "../../../../styles/types/theme-type";

type Props = {
  theme: ThemeType;
};

export const SecondStyle = styled.section<Props>`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryColor};
  `}
`;
