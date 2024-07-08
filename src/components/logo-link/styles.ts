import styled, { css } from "styled-components";
import { ThemeType } from "../../styles/types/theme-type";

type TSLogoLink = { theme: ThemeType };

export const SLogoLink = styled.div<TSLogoLink>`
  ${({ theme }) => css`
    height: 100%;
    > a {
      height: 100%;
      display: block;
      text-decoration: none;
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.secondaryColor};
      position: relative;
      transition: all 100ms;
      text-transform: uppercase;
    }

    > a > img {
      height: 100%;
      filter: brightness(0) invert(1);
    }

    &:hover {
      filter: brightness(0.9);
    }
  `}
`;
