import styled from "styled-components";
import { ThemeType } from "../../styles/types/theme-type";

type Props = { theme: ThemeType };

export const SItems = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1vw;
`;
