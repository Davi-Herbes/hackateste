import styled, { css } from "styled-components";
import { ThemeType } from "../../../../styles/types/theme-type";

export const SStudent = styled.div<{ theme: ThemeType }>`
  ${({ theme }) => css`
    .home-page {
      .home-header {
      }

      .home-aside {
      }
    }
  `}
`;
