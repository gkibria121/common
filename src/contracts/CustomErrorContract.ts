import { Errors } from "../types/error";

abstract class CustomError extends Error {
  abstract statusCode: number;
  abstract serializeErrors(): Errors;
}

export { CustomError };
