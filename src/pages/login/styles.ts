import styled, { css } from "styled-components";
import { ThemeType } from "../../styles/types/theme-type";

export const SLogin = styled.div<{ theme: ThemeType }>`
  ${({ theme }) => css`
    min-height: 100vh;
    width: 100%;

    animation: fadeInAnimation 1s forwards;
    background-image: linear-gradient(to bottom, #fff, #666);
    align-content: center;

    .form-container {
      height: 85vh;
      min-width: 500px;
      width: 50vw;

      margin: 0 auto;

      overflow: hidden;

      border-radius: 1px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);

      background: #fff;

      display: flex;

      justify-content: center;
      align-items: center;

      .button {
        transition: all ease 300ms;
        cursor: pointer;
        min-width: 230px;
        width: 70%;
        min-height: 50px;
        background-color: #f5f5f5;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border: none;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.7);
        color: #000;
        text-decoration: none;
        font-size: ${theme.font.sizes.small};
        font-weight: 500;

        img {
          max-height: 4vh;
        }
      }
      .button:hover {
        background-color: #ddd;
      }

      form {
        height: 85%;
        transition: 500ms ease;
        min-width: 400px;

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: space-between;
        h1 {
          font-family: ${theme.font.family.default};
          font-weight: 600;
        }

        .fields-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 70%;
          min-width: 230px;

          .field-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            .register-input {
              height: 40px;
              padding-left: 0.5vw;

              border: solid #555 2px;
              border-radius: 2px;

              transition: all 300ms ease;
            }
            .register-input:hover {
              border: solid #111 2px;
              transform: scale(1.01);
            }

            .register-input:focus {
              border: solid #000 2px;
              transform: scale(1.02);
            }
            label {
              font-size: ${theme.font.sizes.small};
              height: 25px;
              padding-left: 2px;
            }
            div {
              overflow: hidden;
              animation: errorIn 1s forwards;

              padding-left: 1px;
              min-height: 10px;
              max-height: 60px;
              div {
                font-size: ${theme.font.sizes.xsmall};
                font-weight: 500;
                color: #f00;
                height: 20px;
              }
            }
          }
        }
      }
    }
    @keyframes errorIn {
      from {
        transform: translateY(-100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `}
`;
