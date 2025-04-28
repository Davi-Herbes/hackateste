import { RegisterValidator } from "../../../../../pages/auth/register/action/validated_register";
import { FailedResponseProtocol } from "../schemas/failed_response.schema";

export class FailedResponse implements FailedResponseProtocol {
  constructor(
    public parsedResponse: FailedResponseProtocol,
    registerValidator: RegisterValidator,
  ) {
    registerValidator.isValid = false;
    registerValidator.registerErrors.password.push("Ocorreu um erro ao realizar o registro.");
    console.log(this.parsedResponse.message);
  }

  public get status(): number {
    return this.parsedResponse.status;
  }

  public get message(): string {
    return this.parsedResponse.message;
  }
}
