import { RegisterValidator } from "../../../../../pages/auth/register/action/validated_register";
import { SuccessfulResponseProtocol } from "../schemas/successful_response.schema";

export class SuccessfulResponse implements SuccessfulResponseProtocol {
  constructor(
    public parsedResponse: SuccessfulResponseProtocol,
    registerValidator: RegisterValidator,
  ) {
    registerValidator.isValid = true;
    registerValidator.registerErrors.password = [];
    registerValidator.registerErrors.email = [];
    registerValidator.registerErrors.username = [];
  }

  public get status(): number {
    return this.parsedResponse.status;
  }

  public get message(): string {
    return this.parsedResponse.message;
  }
}
