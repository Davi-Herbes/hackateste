import { z } from "zod";

import { RegisterFormData } from "../../../../pages/auth/register/action/types/register_form_data";

import { RegisterResponse } from "./schemas/register_response.schema";

import { FailedResponseSchema } from "./schemas/failed_response.schema";
import { SuccessfulResponseSchema } from "./schemas/successful_response.schema";
import { BadRequestResponseSchema } from "./schemas/bad_request_response.schema";

import { FailedResponse } from "./responses/failed_response";
import { SuccessfulResponse } from "./responses/successful_response";
import { BadRequestResponse } from "./responses/bad_request_response";

import { AxiosError } from "axios";
import { axios } from "../../../axios";
import { AxiosErrorParser } from "../../../axios_error_parser";
import { RegisterValidator } from "../../../../pages/auth/register/action/validated_register";

export class RegistrationRequester {
  constructor(
    private userData: RegisterFormData,
    private registerValidator: RegisterValidator,
  ) {}

  async requestRegistration(): Promise<RegisterResponse> {
    try {
      const response = await this.tryToRequestRegistration();
      return response;
    } catch (e) {
      return this.handleRequestError(e);
    }
  }

  private async tryToRequestRegistration(): Promise<RegisterResponse> {
    const response = await axios.post("/auth/register", this.userData, { withCredentials: true });
    const parsedData = SuccessfulResponseSchema.parse({
      status: response.status,
      ...response.data,
    });
    return new SuccessfulResponse(parsedData, this.registerValidator);
  }

  private async handleRequestError(e: unknown): Promise<RegisterResponse> {
    if (e instanceof z.ZodError) {
      return this.handleTypeError(e);
    }

    if (e instanceof AxiosError) {
      return this.handleAxiosError(e);
    }

    return this.defaultFailedResponse(e);
  }

  private async handleAxiosError(e: AxiosError): Promise<RegisterResponse> {
    try {
      return this.tryHandleAxiosError(e);
    } catch (e) {
      if (e instanceof z.ZodError) {
        return this.handleTypeError(e);
      }
      return this.defaultFailedResponse(e);
    }
  }

  private async tryHandleAxiosError(e: AxiosError): Promise<RegisterResponse> {
    const status = e.status;

    if (!AxiosErrorParser.hasData(e)) {
      const parsedData = FailedResponseSchema.parse({
        status,
        message: "Nenhum dado foi retornado.",
      });

      return new FailedResponse(parsedData, this.registerValidator);
    }
    const data = { status, ...e.response.data };

    if ("field" in data) {
      const parsedData = BadRequestResponseSchema.parse(data);
      return new BadRequestResponse(parsedData, this.registerValidator);
    }

    const parsedData = FailedResponseSchema.parse(data);
    return new FailedResponse(parsedData, this.registerValidator);
  }

  defaultFailedResponse(e: unknown): FailedResponse {
    const data = {
      message: "Ocorreu um erro inesperado.",
      status: 500,
    };
    if (e instanceof Error) {
      data.message = e.message;
    }

    const parsedData = FailedResponseSchema.parse(data);
    return new FailedResponse(parsedData, this.registerValidator);
  }

  private handleTypeError(e: z.ZodError): FailedResponse {
    const responseData = {
      message: e.message,
      status: 500,
    };
    return new FailedResponse(responseData, this.registerValidator);
  }
}
