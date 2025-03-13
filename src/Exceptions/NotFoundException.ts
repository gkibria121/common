import { CustomError } from "../contracts/CustomErrorContract";
import { Errors } from "../types/error";
class NotFoundException extends CustomError {
  constructor() {
    super("404 page not found!");
  }
  statusCode: number = 404;
  serializeErrors(): Errors {
    return {
      message: "404 page not found!",
    };
  }
}

export default NotFoundException;
