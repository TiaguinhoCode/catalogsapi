// Middleware para verificar se o usuário é o dono do recurso ou tem uma role específica
import { Request, Response, NextFunction } from "express";

export async function isAdmin(req: Request, res: Response, next: NextFunction) {
  const userIdFromToken = req.user_id;
  const userRole = req.user_role; // role extraída do token
  const userIdFromParams = req.params.id;

  // Permitir acesso se o usuário for "admin" ou "dono"
  if (userRole === "admin" || userRole === "dono") {
    return next();
  }

  // Caso contrário, verificar se é o dono do recurso
  if (userIdFromToken !== userIdFromParams) {
    return res.status(403).json({ error: "Acesso negado." });
  }

  return next();
}
