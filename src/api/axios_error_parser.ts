import { AxiosError } from "axios";

export interface AxiosErrorResponseWithData {
  data: {
    message: string;
  };
}

export class AxiosErrorParser {
  public static hasData(e: AxiosError): e is AxiosError & { response: { data: any } } {
    const data = e.response?.data;
    const status = e.status;

    if (!data || !status) return false;

    if (!(typeof data === "object")) return false;

    if (!("message" in data) || typeof data.message !== "string") return false;

    return true;
  }
}
