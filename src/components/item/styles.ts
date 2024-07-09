import styled, { css } from "styled-components";
import { ThemeType } from "../../styles/types/theme-type";

export const SItem = styled.div<{ theme: ThemeType }>`
  ${({ theme }) => css`
    height: 20vw;
    box-shadow: 0 4px 9px 0 rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-weight: 600;

      width: 80%;
      text-align: justify;
      padding: 0 1rem;
      height: 3vw;
      font-size: 2rem;
    }

    > div {
      width: 80%;
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
      height: 2vw;
      div {
        width: 100%;
        font-family: "Open Sans", sans-serif;
        font-weight: 700;
        font-size: ${theme.font.sizes.small};
      }
    }

    overflow: hidden;
    img {
      margin-top: 1vw;
      max-height: 12vw;
    }
    button {
      height: 2vw;
      width: 80%;
      border: none;
      cursor: pointer;
      background: #ccc;
      margin-bottom: 1vw;
    }
  `}
`;
