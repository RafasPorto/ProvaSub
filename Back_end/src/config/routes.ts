import { Router } from "express";
import { ComputadorController } from "../controller/computador.controller";

export const router: Router = Router();

router.get("/computador/listar", new ComputadorController().listar);
router.post("/computador/cadastrar", new ComputadorController().cadastrar);