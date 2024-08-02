import styled, { css } from "styled-components";
import { ThemeType } from "./types/theme-type";

export const PageContainer = styled.div<{ theme: ThemeType }>`
  ${({ theme }) => css`
    @media${theme.media.lteMedium} {
      margin-top: 0;
      height: 100vh;
    }
  `}
`;
