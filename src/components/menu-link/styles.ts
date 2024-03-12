import styled, { css } from "styled-components";
import { ThemeType } from "../../styles/types/theme-type";

type TSMenuLink = { theme: ThemeType };

export const SMenuLink = styled.div<TSMenuLink>`
  ${({ theme }) => css`
    > a {
      display: block;
      text-decoration: none;
      font-size: ${theme.font.sizes.small};
      padding: ${theme.spacings.medium};
      color: ${theme.colors.secondaryColor};
      position: relative;
      text-align: center;

      &::after {
        content: "";
        position: absolute;
        bottom: 10px;
        left: 37.5%;
        width: 25%;
        height: 0.2rem;
        background: ${theme.colors.secondaryColor};
        transition: all ease-in-out 300ms;
      }
      &:hover::after {
        left: 25%;
        width: 50%;
      }
    }
  `}
`;
