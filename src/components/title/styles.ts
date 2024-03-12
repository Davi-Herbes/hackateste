import styled, { css } from "styled-components";
import { ThemeType } from "../../styles/types/theme-type";
import { TitleProps } from ".";

type TSTitle = { theme: ThemeType } & TitleProps;

const titleSize = {
  small: (theme: ThemeType) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme: ThemeType) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme: ThemeType) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme: ThemeType) => css`
    font-size: ${theme.font.sizes.xhuge};
    /* transition: ease-in-out all 20ms; */
    ${mediaFont(theme)}
  `,
};

const mediaFont = (theme: ThemeType) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

export const STitle = styled.h1<TSTitle>`
  ${({ theme, size }) => css`
    z-index: 5;
    /* background: ${theme.colors.bgDark}; */
    color: ${theme.colors.secondaryColor};
    ${titleSize[size](theme)};
  `}
`;
