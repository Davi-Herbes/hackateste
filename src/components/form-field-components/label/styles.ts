import styled, { css } from "styled-components";
import { ThemeType } from "../../../styles/types/theme-type";

type ThemeProps = { theme: ThemeType };

export const SLabel = styled.label<ThemeProps>`
  ${({ theme }) => css`
    width: 89%;
    height: 25px;
    font-size: ${theme.font.sizes.small};
  `}
`;
