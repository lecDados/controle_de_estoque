import express from "express";
import { listarItens, criarItem, mostrar_total } from "../controller/listaItem.js";


const router = express.Router();

router.get("/lista", listarItens);

router.get("/total", mostrar_total);

router.post("/lista", criarItem);

export default router;