// Exoress
import express, { Request, Response } from "express";

// Bibliotecas
import dotenv from 'dotenv'
import cors from 'cors'

// Rotas
import { router } from "./router";

const app = express()
app.use(cors())
app.use(express.json())

// Rotas
app.use(router)

// Variavel de ambiente
dotenv.config()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log("Servidor rodando na porta: ", PORT))