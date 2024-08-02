import styled, { css } from "styled-components";
import { ThemeType } from "../../styles/types/theme-type";

type WrapperProps = { theme: ThemeType };

export const SRegister = styled.section<WrapperProps>`
  ${({ theme }) => css`
    min-height: 100vh;
    width: 100%;

    animation: fadeInAnimation 1s forwards;
    background-image: linear-gradient(to bottom, #fff, #666);

    align-content: center;

    .login-display {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1vh;
      width: 100%;
      h3 {
        font-size: 1.7rem;
        font-weight: 500;
      }
    }

    .form-container {
      height: 85vh;
      min-width: 500px;
      width: 60vw;

      margin: 0 auto;

      overflow: hidden;

      border-radius: 1px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);

      background: #fff;

      display: grid;
      grid-template-columns: repeat(2, minmax(250px, 1fr));

      align-items: center;
      justify-items: center;

      .show-in-short-screen {
        display: none;
      }

      @media (max-width: 1000px) {
        height: 100vh;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        margin: 30px auto;

        .register-content {
          display: none;
        }

        .button {
          width: 70%;
          margin-top: 10px;
        }

        .show-in-short-screen {
          display: flex;
          gap: 0;
        }
      }

      a.button {
        width: 70%;
      }

      .email-request {
        grid-column: 1 / 3;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        h3 {
          font-size: 1.8rem;
          font-weight: 700;
          text-align: center;
        }
        img {
          max-height: 30vh;
        }
      }

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
    .register-content {
      height: 85%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      gap: 2vh;

      h2 {
        font-size: ${theme.font.sizes.medium};
        text-align: center;
      }

      .register-mail-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        h3 {
          font-size: 1.8rem;
          font-weight: 700;
          text-align: center;
        }
        .mail-images-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          align-items: center;
          margin-top: 15vh;

          div {
            height: 18vh;
            overflow: hidden;
            align-content: center;
            .envelope-svg {
              position: relative;
              top: -3vh;
              height: 22vh;
            }
          }

          .lock-svg {
            max-height: 10vh;
          }
        }
        div {
          span {
            font-size: ${theme.font.sizes.small};
            font-weight: 800;
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
