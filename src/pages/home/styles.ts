import styled, { css } from "styled-components";
import { ThemeType } from "../../styles/types/theme-type";

type WrapperProps = { theme: ThemeType };

export const SDefaultHome = styled.div<WrapperProps>`
  ${({ theme }) => css`
    height: 100vh;
    margin-left: 5vw;
    .text {
      width: 100%;
      text-align: center;
    }

    div {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: center;

      margin-top: 20vh;
      div {
        width: 22vw;
        .page-title {
          font-size: ${theme.font.sizes.pageTitle};
        }

        img {
          filter: brightness(0);
          height: 20vh;
        }
      }
    }
  `}
`;
