import { RegisterValidator } from "../../../../../pages/auth/register/action/validated_register";
import { BadRequestResponseProtocol } from "../schemas/bad_request_response.schema";
import { RegisterFieldType } from "../types/field_type";

export class BadRequestResponse implements BadRequestResponseProtocol {
  constructor(
    public parsedResponse: BadRequestResponseProtocol,
    registerValidator: RegisterValidator,
  ) {
    registerValidator.registerErrors[parsedResponse.field].push(parsedResponse.message);
    registerValidator.isValid = false;
  }

  public get status(): number {
    return this.parsedResponse.status;
  }

  public get message(): string {
    return this.parsedResponse.message;
  }

  public get field(): RegisterFieldType {
    return this.parsedResponse.field;
  }
}
