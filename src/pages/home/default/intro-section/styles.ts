import styled, { css } from "styled-components";
import { ThemeType } from "../../../../styles/types/theme-type";

type Props = {
  theme: ThemeType;
};

export const IntroStyle = styled.section<Props>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    grid-template-rows: 4fr 1fr 2fr;

    background: linear-gradient(112.5deg, rgba(0, 72, 105, 0.2), 30%, #fff, 70%, rgba(0, 72, 105, 0.2));

    animation: fadeInAnimation 1s ease forwards;
    gap: 5vh;

    .authentication-links-container {
      display: flex;
      justify-content: center;
      gap: 25px;
      padding-top: 3vh;

      .link-container {
        width: 12vw;
        display: flex;
        flex-direction: column;
        gap: 1vh;

        .link-description {
          font-size: ${theme.font.sizes.small};
          text-align: center;
          overflow: hidden;
          align-content: end;
          font-weight: 500;
        }

        a {
          text-decoration: none;
          color: unset;
          border-radius: 2px;
          text-align: center;
          font-weight: 500;
          font-size: 2rem;
          align-content: center;
          transition: all 300ms ease-in-out;
          filter: drop-shadow(0 0 4px rgba(0,0,0,0.1));

          &:hover {
          filter: drop-shadow(0 0 4px rgba(0,0,0,0.6));
          }
        }

        } */
      }
    }

    .text {
      width: 100%;
          filter: drop-shadow(0 0 4px rgba(0,0,0,0.4));
          text-align: center;
    }

    .intro-container {
      /* padding-top: 10vh; */
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 5vw;
      margin-top: 30vh;
      margin-top: 30vh;

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
