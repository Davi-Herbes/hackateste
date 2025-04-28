import styled, { css } from "styled-components";
import { ThemeType } from "../../../styles/types/theme-type";

export const SLogin = styled.div<{ theme: ThemeType }>`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
    max-height: 100vh;
    width: 100vw;
    height: 100vh;

    .form-container {
      width: 80vw;
      box-shadow: 0 10px 20px 20px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      height: 90vh;
    }
  `}
`;
