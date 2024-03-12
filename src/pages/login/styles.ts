import styled, { css } from "styled-components";
import { ThemeType } from "../../styles/types/theme-type";

type WrapperProps = { theme: ThemeType };

export const SLogin = styled.div<WrapperProps>`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ddd;

    > form {
      width: 30%;
      min-width: 50rem;
    }

    > form > div {
      background: #fff;
      height: 60vh;
      width: 30%;
      min-width: 50rem;

      box-shadow: 0 1px 5px 1px ${theme.shadow.default};
      border-radius: 5px;

      display: flex;
      flex-direction: column;
      align-items: center;

      > h2 {
        height: 20%;
        display: flex;
        align-items: center;
      }
    }
  `}
`;

export const InputContainer = styled.div`
  height: 50%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const ButtonContainer = styled.div`
  width: 90%;
  height: 30%;
  padding: 2rem 0;
`;
