import styled, { css } from "styled-components";
import { ThemeType } from "../../../styles/types/theme-type";

type ThemeProps = { theme: ThemeType };

export const SErrorMsg = styled.div<ThemeProps>`
  ${({ theme }) => css`
    width: 89%;
    min-height: 20px;
    color: red;
    font-size: ${theme.font.sizes.small};

    display: flex;
  `}
`;
