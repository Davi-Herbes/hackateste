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
      width: 30vw;
      box-shadow: 0 10px 20px 20px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      height: 80vh;

      padding: 40px;
    }

    h1 {
      font-size: ${theme.font.sizes.xlarge};
      height: 20%;
    }

    form {
      height: 80%;
      padding-left: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }

    .fields-container {
      width: 100%;
      /* height: 100%; */
    }

    .field-container {
      display: flex;
      flex-direction: column;
      width: 100%;

      height: 100px;

      label {
      }

      input {
        padding-left: 4px;
        height: 25px;
        font-size: 17px;
      }
    }

    button {
      cursor: pointer;
      width: 100%;
      height: 50px;
      background: #eee;

      border: none;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 17px;

      img {
        height: 30px;
      }
    }

    button:hover {
      background: #ddd;
    }

    .error {
      color: #f00;
      font-size: 17px;
      font-weight: 600;
    }
  `}
`;
