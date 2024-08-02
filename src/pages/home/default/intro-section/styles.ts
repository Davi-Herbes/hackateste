import styled, { css } from "styled-components";
import { ThemeType } from "../../../../styles/types/theme-type";

type Props = {
  theme: ThemeType;
};

export const IntroStyle = styled.section<Props>`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: ${theme.colors.background.white};

    animation: fadeInAnimation 1s ease forwards;
    gap: 5vh;

    .text {
      width: 100%;
      text-align: center;
    }

    .intro-container {
      padding-top: 10vh;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 5vw;

      div {
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
