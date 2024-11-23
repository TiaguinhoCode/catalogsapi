// Servidor
import { NextFunction, Request, Response } from "express";

// Biblioteca
import { verify } from "jsonwebtoken";

interface payLoad {
  sub: string;
  role: string; // Adiciona a role ao payload
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub, role } = verify(token, process.env.JWT_SECRET) as payLoad;

    req.user_id = sub;
    req.user_role = role; // Define a role para ser usada em middlewares

    return next();
  } catch (err) {
    return res.status(401).end();
  }
}
