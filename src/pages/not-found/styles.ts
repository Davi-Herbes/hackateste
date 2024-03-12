import styled from "styled-components";
import { ThemeType } from "../../styles/types/theme-type";

type WrapperProps = { theme: ThemeType };

export const SNotFoundPage = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
