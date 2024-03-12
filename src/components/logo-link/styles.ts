import styled, { css } from "styled-components";
import { ThemeType } from "../../styles/types/theme-type";

type TSLogoLink = { theme: ThemeType };

export const SLogoLink = styled.div<TSLogoLink>`
  ${({ theme }) => css`
    > a {
      display: block;
      text-decoration: none;
      font-size: ${theme.font.sizes.medium};
      padding: ${theme.spacings.medium};
      color: ${theme.colors.secondaryColor};
      position: relative;
      transition: all 100ms;
      text-transform: uppercase;
    }

    > img {
      max-height: 7rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
  `}
`;
