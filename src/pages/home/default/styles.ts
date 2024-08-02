import styled from "styled-components";
import { ThemeType } from "../../../styles/types/theme-type";

type Props = { theme: ThemeType };

export const SDefaultHome = styled.div<Props>`
  section {
    height: 100vh;
  }
`;
