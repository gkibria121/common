import { CustomError } from "./contracts/CustomErrorContract";
import AuthException from "./Exceptions/AuthException";
import ValidationException from "./Exceptions/ValidationException";
import NotFoundException from "./Exceptions/NotFoundException";
import { pluralize, makeValidationError } from "./helpers/helpers";

import AuthMiddleware from "./Middlewares/AuthMiddleware";
import ExceptionHandlerMiddleware from "./Middlewares/ExceptionHandlerMiddleware";
import { ValidationError, Errors } from "./types/error";

export {
  CustomError,
  AuthException,
  ValidationException,
  pluralize,
  makeValidationError,
  AuthMiddleware,
  ExceptionHandlerMiddleware,
  ValidationError,
  Errors,
  NotFoundException,
};
