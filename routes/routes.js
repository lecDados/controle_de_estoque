import express from "express";
import { criar } from "../controller/dados_itens.js";
import { mostrar } from "../controller/mostrar.js";



const router = express.Router();

router.post("/criar", criar );
router.get("/lista", mostrar);

export default router;