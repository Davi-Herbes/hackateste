import { SErrorMsg } from "./styles";

export const ErrorMsg = ({ children }: { children?: string }) => {
  return <SErrorMsg>{children || ""}</SErrorMsg>;
};
