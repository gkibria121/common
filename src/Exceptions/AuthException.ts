import { CustomError } from "../contracts/CustomErrorContract";
import { Errors } from "../types/error";
class AuthException extends CustomError {
  constructor() {
    super("User is not authenticated!");
  }
  statusCode: number = 403;
  serializeErrors(): Errors {
    return {
      message: "User is not authenticated!",
    };
  }
}

export default AuthException;
