// Servidor 
import { Router, Request, Response } from "express";

// Roteamento
const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.json({ message: "Hello Word" })
})

export { router };