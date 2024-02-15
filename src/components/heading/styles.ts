import styled, { css } from "styled-components";
import { ThemeType } from "../../styles/types/theme-type";
import { HeadingProps } from ".";

type TSHeading = { theme: ThemeType } & HeadingProps;

const headingSize = {
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
    ${mediaFont(theme)}
  `,
};

const mediaFont = (theme: ThemeType) => css`
  @media (${theme.media.lteMedium}) {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

// Pode ser opcional pq se vier undefined vai ser none igual
const headingCase = (uppercase?: boolean) => css`
  text-transform: ${uppercase ? "uppercase" : "none"};
`;

export const SHeading = styled.h1<TSHeading>`
  ${({ theme, colorDark, size = "medium", uppercase }) => css`
    color: ${colorDark
      ? theme.colors.secondaryColor
      : theme.colors.primaryColor};
    ${headingSize[size](theme)};
    ${headingCase(uppercase)}
  `}
`;
