import { CustomError } from "../contracts/CustomErrorContract";
import { ValidationError } from "express-validator";
import { ValidationError as CustomValidationError } from "../types/error";
import { pluralize } from "../helpers/helpers";
import { Errors } from "../types/error";
class ValidationException extends CustomError {
  constructor(public errores: ValidationError[]) {
    super();
  }
  statusCode: number = 442;
  serializeErrors(): Errors {
    const errors = this.normalizeError(this.errores);
    return {
      message: this.getErrorMessage(errors),
      errors: errors,
    };
  }

  private normalizeError(errors: ValidationError[]): CustomValidationError {
    return errors.reduce((acc, curr) => {
      if (curr.type !== "field") return acc;
      if (curr.path in acc) acc[curr.path].push(curr.msg);
      else acc[curr.path] = [curr.msg];

      return acc;
    }, {} as CustomValidationError);
  }

  private getErrorMessage(errors: CustomValidationError) {
    const errorKeys = Object.keys(errors);
    const firstError = errors[errorKeys[0]][0] ?? "";
    const remainingErrorLength = errorKeys.length - 1;

    return `${firstError}${
      remainingErrorLength
        ? ` and  ${remainingErrorLength} more ${pluralize(
            remainingErrorLength,
            "error"
          )}.`
        : "."
    }`;
  }
}

export { ValidationException };
