import styled from "styled-components";
import { ThemeType } from "../../styles/types/theme-type";

type WrapperProps = { theme: ThemeType };

export const SHome = styled.div<WrapperProps>`
  height: 100vh;
  margin-left: 5rem;
`;
