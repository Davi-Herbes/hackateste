import styled, { css } from "styled-components";
import { ThemeType } from "../../styles/types/theme-type";

type WrapperProps = { theme: ThemeType };

export const SRegister = styled.div<WrapperProps>`
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
      height: 70vh;
      width: 100%;
      box-shadow: 0 1px 5px 1px ${theme.shadow.default};
      border-radius: 5px;

      display: flex;
      flex-direction: column;
      align-items: center;

      > h2 {
        min-height: 20%;
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
  padding-top: 2rem;
  gap: 1rem;
  /* overflow-y: hidden; */
`;

export const ButtonContainer = styled.div`
  width: 90%;
  height: 30%;
  display: flex;
  align-items: center;
`;
