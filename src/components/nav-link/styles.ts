import styled, { css } from "styled-components";
import { ThemeType } from "../../styles/types/theme-type";

type TSMenuLink = { theme: ThemeType };

export const SNavLink = styled.nav<TSMenuLink>`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    padding: 0 ${theme.spacings.medium};
    align-items: center;

    font-family: "Montserrat", sans-serif;
    font-weight: 800;

    @media${theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
    }
  `}
`;
