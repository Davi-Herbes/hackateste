import styled, { css } from "styled-components";
import { ThemeType } from "../../../styles/types/theme-type";

export const SLoggedHome = styled.div<{ theme: ThemeType }>`
  ${({ theme }) => css`
    .home-page {
      min-height: 100vh;
      width: 100%;

      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-template-rows: 1fr 6fr;

      .home-header {
        background: ${theme.colors.primaryColor};
        grid-column: 1 / 3;
        color: #fff;
        z-index: 1;
      }

      .home-aside {
        background: #eee;
        box-shadow: 0 0 10px 10px #ddd;
      }
    }
  `}
`;
