import express from "express";
import { listarItens, criarItem } from "../controller/listaItem.js";

const router = express.Router();

router.get("/lista", listarItens);

router.post("/lista", criarItem);

export default router;