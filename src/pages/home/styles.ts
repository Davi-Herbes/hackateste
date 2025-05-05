import styled, { css } from "styled-components";
import { ThemeType } from "../../styles/types/theme-type";

type WrapperProps = { theme: ThemeType };

export const SDefaultHome = styled.div<WrapperProps>`
  ${({ theme }) => css``}
`;
