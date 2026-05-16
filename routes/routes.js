import express from "express";
import { hello } from "../controller/saldacao.js";


const router = express.Router()



    router.get("/", hello); //teste com saldacao












export default router

