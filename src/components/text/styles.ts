import styled, { css } from "styled-components";
import { ThemeType } from "../../styles/types/theme-type";
import { TextProps } from ".";

type TSText = { theme: ThemeType } & TextProps;

export const SText = styled.p<TSText>`
  ${({ theme, colorDark }) => css`
    color: ${colorDark
      ? theme.colors.secondaryColor
      : theme.colors.primaryColor};
  `}
`;
