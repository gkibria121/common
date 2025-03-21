import { NextFunction, Request, Response } from "express";
import { AuthException } from "../Exceptions/AuthException";
import { validationResult } from "express-validator";
import { ValidationException } from "../Exceptions/ValidationException";

export function RequestValidatorMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): any {
  const validated = validationResult(req);
  if (!validated.isEmpty()) {
    throw new ValidationException(validated.array());
  }
  next();
}
