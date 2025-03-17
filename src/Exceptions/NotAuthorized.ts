import { CustomError } from "../contracts/CustomErrorContract";
import { Errors } from "../types/error";
class NotAuthorized extends CustomError {
  constructor() {
    super("User is Unauthorized!");
  }
  statusCode: number = 401;
  serializeErrors(): Errors {
    return {
      message: "User is Unauthorized!",
    };
  }
}

export { NotAuthorized };
