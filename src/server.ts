// express
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

// Bibliotecas
import dotenv from "dotenv";
import cors from "cors";

// Rotas
import { router } from "./router";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

dotenv.config();

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Servidor rodando na porta: ", PORT));
