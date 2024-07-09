import styled, { css } from "styled-components";
import { ThemeType } from "../../styles/types/theme-type";

type WrapperProps = { theme: ThemeType };

export const SAddItem = styled.div<WrapperProps>`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    h1 {
      margin-top: 15vh;
      text-align: center;
    }
    form {
      display: flex;
      flex-direction: column;
      width: 62vw;
      margin: 0 19vw;

      margin-top: 10vh;

      align-items: center;
      .fields-container {
        display: flex;
        gap: 2vw;

        .upload-container {
          display: flex;
          align-items: center;
          gap: 5vh;
          .image-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            img {
              width: 15vw;
              box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.5);
            }
            span {
              font-size: ${theme.font.sizes.small};
              font-weight: 600;
            }
          }
          label {
            background: #ccc;
            height: 5vh;
            width: 10vw;
            cursor: pointer;
            font-size: ${theme.font.sizes.small};
            font-weight: 700;
            display: flex;
            justify-content: center;
            align-items: center;

            input {
              display: none;
            }
          }
        }

        .text-fields-container {
          display: flex;
          align-items: end;
          height: 20vh;
          gap: 1vw;
          padding-bottom: 7vh;
          .text-field {
            font-size: ${theme.font.sizes.xsmall};
            width: 15vw;

            input {
              width: 100%;
            }
          }
        }
      }

      button {
        background: #ccc;
        margin-top: 10vh;
        width: 20vw;
        height: 7vh;
        border: none;
      }
    }
  `}
`;
