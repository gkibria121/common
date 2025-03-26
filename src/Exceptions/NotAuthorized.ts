import { CustomError } from "../contracts/CustomErrorContract";
import { Errors } from "../types/error";
class NotAuthorized extends CustomError {
  constructor(private messaege?: string) {
    super(messaege ?? "User is Unauthorized!");
  }
  statusCode: number = 403;
  serializeErrors(): Errors {
    return {
      message: this.messaege ?? "User is Unauthorized!",
    };
  }
}

export { NotAuthorized };
