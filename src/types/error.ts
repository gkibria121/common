export type ValidationError = Record<string, string[]>;
export interface Errors {
  message: string;
  errors?: ValidationError;
}
