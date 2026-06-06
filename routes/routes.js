import express from "express";
import { criar } from "../controller/dados_itens.js";
import { mostrar } from "../controller/mostrar.js";
import deletar from "../controller/deletar.js";
import quantidade from "../controller/quantidade.js";
import acessorio from "../controller/acessorio.js";
import roupa from "../controller/roupa.js";
import objeto from "../controller/objeto.js";
import repo from "../controller/repo.js";



const router = express.Router();

router.post("/criar", criar );
router.get("/lista", mostrar);


router.delete("/lista/:_id", deletar);
router.get("/quantidade", quantidade)


router.get("/acessorios", acessorio)
router.get("/roupa", roupa);
router.get("/objeto", objeto);

router.get("/repor", repo);


export default router;