import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";
import AuthException from "../Exceptions/AuthException";

declare global {
  namespace Express {
    interface Request {
      user: JwtPayload | null | string;
      session?: {
        jwt?: string;
      };
    }
  }
}

export default function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): any {
  try {
    const payload = verify(req.session?.jwt ?? "", process.env.JWT_KEY!);

    req.user = payload;
  } catch (error) {
    throw new AuthException();
  }
  next();
}
