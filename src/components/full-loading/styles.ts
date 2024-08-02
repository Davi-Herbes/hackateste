import styled, { css } from "styled-components";
import { ThemeType } from "../../styles/types/theme-type";

export const SFullLoading = styled.div<{ theme: ThemeType }>`
  ${({ theme }) => css`
    position: absolute;
    z-index: 1;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);

    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 15vh;
      animation: linear rotateImg 1s infinite;

      @keyframes rotateImg {
        from {
          transform: rotate(0deg);
        }
        25% {
          transform: rotate(90deg);
        }
        50% {
          transform: rotate(240deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  `}
`;
