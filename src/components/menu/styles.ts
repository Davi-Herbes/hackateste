import styled, { css } from "styled-components";
import { ThemeType } from "../../styles/types/theme-type";

type TSMenu = { theme: ThemeType; visible?: boolean };
type TSButton = { theme: ThemeType };

const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
`;

export const SMenu = styled.header<TSMenu>`
  ${({ theme, visible }) => css`
    z-index: 5;
    position: fixed;
    height: 10vh;
    width: 100vw;
    background: ${theme.colors.primaryColor};
    padding: 0 ${theme.spacings.xhuge};
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;

    @media ${theme.media.lteMedium} {
      transition: all ease-in-out 300ms;
      visibility: hidden;
      opacity: 0;

      ${visible && menuVisible()}

      position: fixed;
      height: 100vh;
      width: 100%;
      display: flex;
      padding: 5rem;
      flex-direction: column;
      overflow-y: auto;
    }
  `}
`;

export const SButton = styled.button<TSButton>`
  ${({ theme }) => css`
    display: none;
    @media (${theme.media.lteMedium}) {
      display: block;
      z-index: 6;
      position: fixed;

      top: 2rem;
      right: 4rem;
      width: 4rem;
      height: 4rem;

      background: ${theme.colors.bgWhite};
      color: ${theme.colors.primaryColor};

      border: none;
      cursor: pointer;
      > svg {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  `}
`;

// export const Margin = styled.div`
//   height: 10vh;
// `;
