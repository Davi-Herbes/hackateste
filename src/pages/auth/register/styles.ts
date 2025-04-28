import styled, { css } from "styled-components";
import { ThemeType } from "../../../styles/types/theme-type";

type WrapperProps = { theme: ThemeType };

export const SRegister = styled.section<WrapperProps>`
  ${({ theme }) => css`
    max-height: 100vh;
    height: 100vh;
    max-width: 100vw;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;

    .steps-container {
      width: 80vw;
      height: 90vh;

      border-radius: 4px;
      box-shadow: 0 10px 20px 20px rgba(0, 0, 0, 0.2);

      overflow: hidden;
      transition: transform 500ms ease-in;
    }

    .steps-carousel {
      width: calc(160vw);
      height: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      transition: transform 200ms ease-in-out;
    }

    .carousel-position-0 {
      transform: translateX(0);
    }

    .carousel-position-1 {
      transform: translateX(-80vw);
    }

    .step {
      padding: 30px;
    }

    @keyframes graphAnimation {
      0% {
        transform: rotateY(15deg);
      }

      50% {
        transform: rotateY(0deg);
      }

      100% {
        transform: rotateY(15deg);
      }
    }

    .graph-img {
      height: 50vh;
      animation: graphAnimation 4s infinite ease-in-out;
      filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.3));
    }

    .first-step {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .first-step-column-1 {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .first-step-column-2 {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      /* padding-bottom: 10vh; */
    }

    .first-step-title {
      text-align: center;
    }

    .mail-sending-form {
      height: 70%;
      display: grid;
      grid-template-rows: repeat(4, 1fr);
      grid-template-columns: 0.7fr;
      justify-content: center;
    }

    .mail-form-label {
      display: flex;
      flex-direction: column;
      font-size: 18px;
    }

    .mail-form-label input {
      height: 26px;
      padding-left: 4px;
      font-size: 15px;
    }

    .submit-email-button-container {
      display: grid;
      grid-template-rows: 1fr 1fr;
    }

    .hidden {
      display: none;
    }

    .error-message {
      color: red;
      font-weight: 600;
      font-size: 16px;
      height: 25px;
      align-content: center;
    }
    .submit-email-button-container span {
      font-size: 19px;
      font-weight: 500;
    }

    .submit-email-button-container button {
      background: none;
      border: solid 1px #000;
      border-radius: 2px;
      font-size: 16px;

      display: flex;
      justify-content: center;
      gap: 10px;
      align-items: center;
    }

    .submit-email-button-container img {
      height: 30px;
    }

    .confirmation-container {
      .title-container {
        padding-left: 25px;
        border-left: 4px solid ${theme.colors.primaryColor};
        border-radius: 2px;

        h2 {
          margin-top: 10px;
          font-size: 2.6rem;
        }
      }

      .confirmation-form-container {
        padding-left: 29px;

        width: 100%;
        height: 100%;
        padding-top: 10%;

        .error {
          color: red;
          font-weight: 600;
          margin-top: 20px;
          font-size: 2.6rem;
          text-align: center;
        }
      }

      form {
        width: 40%;
        margin: 0 auto;
        text-align: center;
      }

      label {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      input:placeholder-shown {
        font-size: 2rem;
      }

      input {
        width: 50%;
        font-size: 3rem;
        outline: none;
        height: 60px;
        border: none;
        border-bottom: 2px solid black;
        text-align: center;
      }

      img {
        height: 100px;
      }
    }
  `}
`;
