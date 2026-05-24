import express from "express";
import { criar } from "../controller/dados_itens.js";
import { mostrar } from "../controller/mostrar.js";
import deletar from "../controller/deletar.js";



const router = express.Router();

router.post("/criar", criar );
router.get("/lista", mostrar);
router.delete("/lista/:_id", deletar);

export default router;