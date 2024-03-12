import styled, { css } from "styled-components";
import { ThemeType } from "../../../styles/types/theme-type";

type ThemeProps = { theme: ThemeType };

export const SInput = styled.input<ThemeProps>`
  ${({ theme }) => css`
    min-height: 6vh;
    width: 100%;
    border: 1px solid #aaa;
    padding-left: 5px;
    font-size: ${theme.font.sizes.small};

    &:focus {
      outline: none;
      border: 2px solid #000;
    }
  `}
`;

// export const FormField = styled.div`
//   height: calc(6vh + 45px);
// `;
