import styled, { css } from "styled-components";
import { ThemeType } from "../../styles/types/theme-type";

type TSLoginLink = { theme: ThemeType };

export const SLoginLink = styled.div<TSLoginLink>`
  ${({ theme }) => css`
    height: 50%;
    display: flex;
    gap: 2rem;
    margin-left: 2rem;

    > div > a {
      text-decoration: none;
      font-size: ${theme.font.sizes.small};
      font-weight: 500;
      transition: all 100ms;
      height: 100%;
      width: 100%;
      text-align: center;
      align-content: center;
    }

    > div {
      height: 100%;
      width: 10rem;
      border-radius: 2px;
      display: flex;
      align-items: center;
      transition: all 100ms;
    }

    > div:hover {
      filter: brightness(0.8);
    }

    > .login {
      border: solid 1px ${theme.colors.secondaryColor};

      > a {
        color: ${theme.colors.secondaryColor};
      }
    }

    > .register {
      background-color: ${theme.colors.background.white};

      > a {
        color: ${theme.colors.primaryColor};
      }
    }
  `}
`;
