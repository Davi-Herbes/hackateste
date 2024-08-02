import styled, { css } from "styled-components";
import { ThemeType } from "../../styles/types/theme-type";

type TSButton = { theme: ThemeType };

export const SButton = styled.button<TSButton>`
  ${({ theme }) => css`
    width: 100%;
    height: 8vh;
    border: none;
    background: #fff;
    box-shadow: 0 1px 5px 1px ${theme.shadow.default};
    font-size: ${theme.font.sizes.small};
    cursor: pointer;
  `}
`;
