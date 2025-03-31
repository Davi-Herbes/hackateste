import styled, { css } from "styled-components";
import { ThemeType } from "../../styles/types/theme-type";

type WrapperProps = { theme: ThemeType };

export const SRegister = styled.section<WrapperProps>`
  ${({ theme }) => css`
    height: 100vh;
    width: 100%;
    /* background: red; */
    /* background: rgba(0, 22, 83, 0.2); */
    align-content: center;

    img {
      max-height: 60px;
    }

    .form-container {
      box-shadow: 0 80px 80px 80px rgba(0, 22, 83, 0.14);
      margin: 0 auto;
      width: 80%;
      height: 90vh;
      border-radius: 2px;
      padding: 10px;

      display: grid;
      justify-items: center;
      grid-template-columns: 1fr 1fr;
      gap: 5px;

      .form-image {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 10px;
        gap: 10%;
      }

      .form-image img {
        min-height: 300px;
        filter: brightness(0);
        animation: float 2s ease-in-out infinite;
      }

      .form-fields-container {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;

        .fields-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-bottom: 1px solid #aaa;
          padding-bottom: 10px;
          .confirmation-send {
            display: grid;
            margin-top: 5px;
            grid-template-columns: 2fr 1fr;
            gap: 10px;
            align-items: center;
            span {
              font-family: ${theme.font.family.default};
              font-size: 1.4rem;
              font-weight: 500;
            }
            button {
              border-radius: 6px;
              font-size: 1.4rem;
            }
          }
        }

        .disabled {
          filter: opacity(0.5);
          cursor: default;
        }
        .confirmation-container {
          display: flex;
          flex-direction: column;
          gap: 10px;

          .confirmation-title {
            font-size: 1.6rem;
            font-weight: 500;
          }

          .submit-mail-fields {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 10px;
            .confirmation-button {
              border-radius: 6px;
              font-size: 1.4rem;
            }

            input {
              font-size: 1.6rem;
              padding-left: 4px;
            }
          }
        }

        .fields-container {
          display: flex;
          flex-direction: column;
        }

        .field-container {
          display: flex;
          flex-direction: column;

          label {
            font-size: 2rem;
          }
          input {
            padding-left: 4px;
          }

          .error-message {
            display: flex;
            height: 14px;
            gap: 2px;
            /* overflow: hidden; */
            div {
              font-size: 1.4rem;
              font-weight: 500;
              color: #f00;
            }
          }
        }

        button:disabled {
          color: unset;
          cursor: default;
          filter: opacity(0.5);
        }

        button:disabled:hover {
          box-shadow: 0 0 2px 2px rgba(0, 22, 83, 0.14);
        }

        button {
          height: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          font-size: 1.6rem;
          background: #fff;
          border: none;
          cursor: pointer;
          box-shadow: 0 0 2px 2px rgba(0, 22, 83, 0.14);
          transition: all ease-in-out 300ms;

          img {
            height: 2rem;
          }
        }
        button:hover {
          box-shadow: 0 0 2px 2px rgba(0, 22, 83, 0.25);
        }
      }
    }

    @keyframes float {
      0%,
      100% {
        transform: rotate(-1deg);
      }
      50% {
        transform: rotate(1deg);
      }
    }
  `}
`;
